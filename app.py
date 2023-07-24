from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/calculate", methods=['POST'])
def calculate():
    operation = request.form['operation']
    num1 = float(request.form['num1'])
    num2 = float(request.form['num2'])
    result = calculate_result(operation, num1, num2)
    return render_template('index.html', result=result)

if __name__ == "__main__":
    app.run(port=5000)
    print("server is running")