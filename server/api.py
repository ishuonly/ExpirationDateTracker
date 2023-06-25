import requests
import json
from fastapi import FastAPI, UploadFile, File
import uvicorn

app = FastAPI()

@app.post("/scan_receipt")
async def scan_receipt(file: UploadFile = File(...)):
    url = 'https://ocr.asprise.com/api/v1/receipt'

    res = requests.post(url, 
                        data={
                            'api_key': 'TEST',
                            'recognizer': 'auto',
                            'ref_no': 'oct_python_123'
                        },
                        files={
                            'file': await file.read()
                        })

    if res.status_code != 200:
        print("Error: OCR API request failed.")
        return None

    response_json = json.loads(res.text)

    if 'receipts' not in response_json or not response_json['receipts']:
        print("Error: Invalid response from OCR API.")
        return None

    items = response_json['receipts'][0]['items']

    extracted_data = []

    for item in items:
        name = item['description']
        quantity = item['qty']
        extracted_data.append({
            'name': name,
            'quantity': quantity
        })

    json_data = json.dumps(extracted_data)

    return json_data


if __name__ == "__main__":
    uvicorn.run(app, port=8000)