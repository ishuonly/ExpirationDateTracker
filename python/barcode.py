from fastapi import FastAPI, UploadFile, File
from pyzbar.pyzbar import decode
from PIL import Image
from io import BytesIO
import requests

app = FastAPI()

def get_product_details(barcode_id,i):
    url = f"https://world.openfoodfacts.org/api/v0/product/{barcode_id}.json"
    headers = {"User-Agent": "Your App Name", "Accept": "application/json"}
    
    response = requests.get(url, headers=headers)
    data = response.json()

    if response.status_code == 200 and data.get("status") == 1:
        product = data["product"]

        name = product.get("product_name")
        expiration_date = product.get("expiration_date")
        if i == 1:
            return name
        else:
            return expiration_date
    else:
        return None, None

@app.post("/decode_barcode")
async def decode_barcode(file: UploadFile = File(...)):
    image = Image.open(BytesIO(await file.read()))

    gray = image.convert("L")

    barcodes = decode(gray)

    decoded_barcodes = []
    for barcode in barcodes:
        barcode_data = barcode.data.decode("utf-8")
        barcode_type = barcode.type

        decoded_barcodes.append({
            "name" : get_product_details(barcode_data,1),
            "expiry_date": get_product_details(barcode_data,2)
        })

    return {"barcodes": decoded_barcodes}
