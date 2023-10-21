from flask import Flask, render_template, jsonify, request
import requests
import json

app = Flask(__name__)

# Store the previous question
previous_question = None

# Function to make a GET request using the 'requests_get' function
def get_script_list():
    # Example: Replace this with your actual script list retrieval logic
    return request_get("script_list").split(",")

# Function to make a GET request
def request_get(data: str) -> str:
    get_status = "get status"
    return requests.post(endpoint, data=f"{get_status} {data}").text

# Function to make a SET request
def request_set(data: str) -> str:
    set_var = "set var"
    # You need to define the 'endpoint' variable here
    # Example: endpoint = "http://your-api-endpoint.com"
    return requests.post(endpoint, data=f"{set_var} {data}").text

@app.route('/')
def home():
    script_list = get_script_list()
    return render_template('html3.html', script_list=script_list)

@app.route('/getstatus', methods=['GET', 'POST'])
def get_status():
    # Your get_status route logic here
    status = "Status information goes here"
    return jsonify({'status': status})

@app.route('/runscript', methods=['POST'])
def run_script():
    # Your run_script route logic here
    result = "Script execution result goes here"
    return jsonify({'result': result})

@app.route('/getQuestion', methods=['GET'])
def get_question():
    global previous_question  # Use a global variable to store the previous question

    # Make a request to an external endpoint to get a new question
    response = requests.get("URL_OF_EXTERNAL_ENDPOINT_HERE")

    # Check if the response was successful
    if response.status_code == 200:
        data = response.json()
        new_question = data.get("question", "")

        # Check if the new question is different from the previous one
        if new_question != previous_question:
            previous_question = new_question

        response = {'question': new_question}
    else:
        response = {'question': 'Failed to retrieve a question'}

    return jsonify(response)

if __name__ == "__main__":
    app.run(port=5000)
    print("server is running")
