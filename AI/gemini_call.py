import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
KEY = os.environ.get('KEY')
genai.configure(api_key=KEY)

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content('Which college should I attend between UC San Diego and UCLA?')

print(response.text)