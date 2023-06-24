import requests
import json

# Function to scan a receipt image and generate JSON data
def scan_receipt(image_path):
    # Set the OCR API endpoint URL
    url = 'https://ocr.asprise.com/api/v1/receipt'

    # Send the image to the OCR API for processing
    res = requests.post(url, 
                        data = {
                            'api_key': 'TEST',
                            'recognizer': 'auto',
                            'ref_no': 'oct_python_123'
                        },
                        files = {
                            'file': open(image_path, 'rb')
                        })

    # Check if the request was successful
    if res.status_code != 200:
        print("Error: OCR API request failed.")
        return None

    # Deserialize the API response JSON
    response_json = json.loads(res.text)

    # Check if the response contains the expected data structure
    if 'receipts' not in response_json or not response_json['receipts']:
        print("Error: Invalid response from OCR API.")
        return None

    # Get the items from the response
    items = response_json['receipts'][0]['items']

    # Create a list to store the extracted information
    extracted_data = []

    # Extract the item names and quantities
    for item in items:
        name = item['description']
        quantity = item['qty']
        extracted_data.append({
            'name': name,
            'quantity': quantity
        })

    # Convert the extracted data to JSON format
    json_data = json.dumps(extracted_data)

    return json_data


# Provide the path to the image file
image_path = 'receipt-sample/receipt-5.png'

# Call the function to scan the receipt and get the JSON data
json_result = scan_receipt(image_path)

# Print the JSON result
print(json_result)