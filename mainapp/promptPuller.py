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
  "max_output_tokens": 9000,
  "response_mime_type": "text/plain", # application/json
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
  system_instruction="We are committed to addressing the most pressing concerns of farmers. Whether it's understanding the effects of irrigation on crops, figuring out why plants aren't growing well, or knowing when and how to adjust soil pH and fertility, our smart system provides clear answers backed by data. Our goal is to empower farmers with technology that simplifies their work, reduces waste, and increases productivity.""",
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
  
