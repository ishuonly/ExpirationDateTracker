import requests
import json
from fastapi import FastAPI, UploadFile, File
import uvicorn

app = FastAPI()

# Endpoint to receive and process the uploaded receipt image
@app.post("/scan_receipt")
async def scan_receipt(file: UploadFile = File(...)):
    # OCR API endpoint
    url = 'https://ocr.asprise.com/api/v1/receipt'

    # Sending a POST request to the OCR API
    res = requests.post(url, 
                        data={
                            'api_key': 'TEST',           # Your API key
                            'recognizer': 'auto',        # OCR recognizer to use
                            'ref_no': 'oct_python_123'   # Reference number for tracking
                        },
                        files={
                            'file': await file.read()   # Attach the uploaded file
                        })

    # Check if the API request was successful
    if res.status_code != 200:
        print("Error: OCR API request failed.")
        return None

    # Parse the response JSON
    response_json = json.loads(res.text)

    # Check if the response contains valid receipt data
    if 'receipts' not in response_json or not response_json['receipts']:
        print("Error: Invalid response from OCR API.")
        return None

    # Extract items from the receipt
    items = response_json['receipts'][0]['items']

    extracted_data = []

    # Loop through extracted items and prepare the data
    for item in items:
        name = item['description']
        quantity = item['qty']
        extracted_data.append({
            'name': name,
            'quantity': quantity
        })

    # Convert extracted data to JSON format
    json_data = json.dumps(extracted_data)

    return json_data

# Run the FastAPI server
if __name__ == "__main__":
    uvicorn.run(app, port=8000)