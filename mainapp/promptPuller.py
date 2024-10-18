import os
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
# See https://ai.google.dev/api/python/google/generativeai/GenerativeModel
generation_config = {
  "temperature": 0,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain", # application/json
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
  system_instruction="You are a very skilled, experienced and famous stock investor as well as a financial advisor and a stock investing tutor. You can analyze stocks, predict which will rise and which will fall just by looking at the data. People will come for suggestions on how to invest, how to get pay loans fast and other financial advises, which will the the best share etc. You have to give them clear and concise answers along with example. If anyone asks you something that is not part of stock market or finance you will say: \"Please ask me questions only related to stock market and finance.\"",
)


def pull_answer(prompt):
    history = []

    chat_session = model.start_chat(
history=history
)
    response = chat_session.send_message(prompt)

    model_res = f"""{response.text}"""

    history.append(model_res)

    return model_res 
