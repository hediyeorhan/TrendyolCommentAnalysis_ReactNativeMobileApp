from flask import Flask, request, make_response, jsonify
import json
from predict import EmotionAnalysis
from get_data import data
from flask_cors import CORS
import socket

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def predict():
    try:
        data_url = request.json.get('url')
        print(data_url)
        if data_url:
            data_value = data(data_url)
            if data_value:
                analyzer = EmotionAnalysis()
                prediction = analyzer.prediction(data_value)
                json_response = json.dumps({"prediction": prediction}, ensure_ascii=False).encode('utf-8')
                response = make_response(json_response)
                response.headers['Content-Type'] = 'application/json; charset=utf-8'

                return response
            else:
                return jsonify({"error": "No data available"}), 500
        else:
            return jsonify({"error": "No URL provided"}), 400
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("APP API")
    app.run(host='192.168.0.28', port=5000, debug=True)
