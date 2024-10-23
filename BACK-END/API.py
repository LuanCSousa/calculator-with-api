from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def homepage():
  return "API online"


@app.route('/calculadora', methods=['POST'])
def soma():
  calculo = request.get_json()
  value1 = calculo['value1']
  
  value2 = calculo['value2']
  symbol = calculo['symbol']
  expression = value1 + symbol + value2
  result = eval(expression)
  return jsonify(result)


app.run(host='0.0.0.0')
