from fastapi import FastAPI, UploadFile, File
from pyzbar.pyzbar import decode
from PIL import Image
from io import BytesIO
import requests
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.chains import SimpleSequentialChain
import os
import uvicorn
import re
import datetime

#Shervin doesn't want his api key leaked again
os.environ["OPENAI_API_KEY"] = "ASK SHERVIN"
api="ASK SHERVIN"

# Custom built LLM 1
llm1 = OpenAI(openai_api_key=api, temperature=0.7)
template1 = """You are a service that offers information about average expiration dates about food items based on these sources: The USDA Food Safety and Inspection Service, StillTasty and EatByDate. 
Question: What is the average expiration of {text}. Give out just a specific range of dates.(Like number of weeks or dates to go)
Answer: Has to be in in the following format and nothing else should pop up: number - number weeks.
"""
prompt_template1 = PromptTemplate(input_variables=["text"], template=template1)
answer_chain1 = LLMChain(llm=llm1, prompt=prompt_template1)

# Custom built LLM 2
llm2 = OpenAI(openai_api_key=api, temperature=0.7)
template2 = """You are a service that says if a fruit is a fresh food(perishable) or non perishable. 
Question: {text}
Answer: Single word answer only, so either fresh or no fresh
"""
prompt_template2 = PromptTemplate(input_variables=["text"], template=template2)
answer_chain2 = LLMChain(llm=llm2, prompt=prompt_template2)

# Custom built LLM 3
llm3 = OpenAI(openai_api_key=api, temperature=0.7)
template3 = """You are a service that gives enviornmental facts using credible information online and open food fact api. Give information like carbon footprint and packaging of the food and if the food has positive or negative impact. 
Question: What is the enviornmental impact of {text} and give me specific facts like carbon footprint(specificemissions stats) and packaging about that food item as well.
Answer: Just 2-3 short sentences. Like in total, there should be around 15-20 words in total.
"""
prompt_template3 = PromptTemplate(input_variables=["text"], template=template3)
answer_chain3 = LLMChain(llm=llm3, prompt=prompt_template3)

app = FastAPI()

def get_product_details(barcode_id, i):
    url = f"https://world.openfoodfacts.org/api/v0/product/{barcode_id}.json"
    headers = {"User-Agent": "Your App Name", "Accept": "application/json"}
    
    response = requests.get(url, headers=headers)
    data = response.json()

    if response.status_code == 200 and data.get("status") == 1:
        product = data["product"]

        name = product.get("product_name")
        expiration_date = product.get("expiration_date")
        sustainability_facts = product.get("environmental_impact")

        if i == 1:
            return name
        elif i == 2:
            return expiration_date
        else:
            return sustainability_facts
    else:
        return None, None

def get_date(string):
  pattern = r"\d-\d"
  matches = re.findall(pattern, string)

  numbers = []
  for match in matches:
    numbers.append(int(match[0]))

  average = sum(numbers)/len(numbers)
  future_date = datetime.date.today() + datetime.timedelta(weeks=average)

  return future_date

@app.post("/decode_barcode")
async def decode_barcode(file: UploadFile = File(...)):
    image = Image.open(BytesIO(await file.read()))

    gray = image.convert("L")

    barcodes = decode(gray)

    decoded_barcodes = []
    for barcode in barcodes:
        barcode_data = barcode.data.decode("utf-8")
        barcode_type = barcode.type

        if answer_chain2.run(get_product_details(barcode_data,1)) == "Fresh":
            expiry = answer_chain1.run(get_product_details(barcode_data,1))
            expiry = get_date(expiry)

        else:
            if get_product_details(barcode_data,2) == "null":
                expiry = "null"
            else: 
                expiry = get_product_details(barcode_data,2)


        decoded_barcodes.append({
            "name" : get_product_details(barcode_data,1),
            "barcode_id" : barcode_data,
            "expiry" : expiry,
            "fresh or no fresh" : answer_chain2.run(get_product_details(barcode_data,1)),
            "facts" : answer_chain3.run(get_product_details(barcode_data,1))
        })

    return {"barcodes": decoded_barcodes}

if __name__ == "__main__":
    uvicorn.run(app, port=8000)

#uvicorn app.py --host 0.0.0.0 --port 8000
#python -m uvicorn main.py --host 0.0.0.0 --port 8000
