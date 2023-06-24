import requests
import json
import re

def scan_receipt(image_path):
    # Set up the OCR.space API endpoint
    api_key = 'K83331052488957'  # Replace with your OCR.space API key
    endpoint = 'https://api.ocr.space/parse/image'

    # Send a POST request to the API
    response = requests.post(
        endpoint,
        files={'image': open(image_path, 'rb')},
        data={'apikey': api_key, 'isOverlayRequired': False}
    )

    # Parse the JSON response
    result = json.loads(response.content)

    # Print the full JSON response for debugging
    print('Full JSON response:', result)

    # Extract the relevant information from the OCR result
    items = []
    if result['IsErroredOnProcessing'] == False:
        parsed_text = result['ParsedResults'][0]['ParsedText']
        lines = parsed_text.split('\r\n')

        for line in lines:
            # Remove leading/trailing spaces and line breaks within a line
            line = line.strip().replace('\r\n', ' ')

            # Use regular expressions to extract item names and quantities
            match = re.search(r'^(.*?)(\d+(?:\.\d+)?)$', line)
            if match:
                item_name = match.group(1).strip()
                quantity = match.group(2)
                items.append({'name': item_name, 'quantity': quantity})

    # Create a JSON object with the extracted information
    receipt = {'items': items}

    # Convert the JSON object to a string
    json_data = json.dumps(receipt)

    return json_data

# Provide the path to the image file
image_path = 'receipt-sample/receipt-3.png'

# Call the function to scan the receipt and get the JSON data
json_result = scan_receipt(image_path)

# Print the JSON result
print('JSON result:', json_result)