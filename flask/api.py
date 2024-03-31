from flask import Flask, request, jsonify
from openai import OpenAI

app = Flask(__name__)



@app.route('/send-message', methods=['POST'])
def sendmessage():
    data = request.json
    message = data.get('message')

    # Send user message to GPT API
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": message}
        ]
    )

    responsefromgpt = completion.choices[0].message

    return jsonify({"response": responsefrom_gpt})

if __name__ == '__main':
    app.run(debug=True)