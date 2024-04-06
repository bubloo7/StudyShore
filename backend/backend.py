from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    print('pinged', file, type(file))
    file.save(dst= os.getcwd() + '/file')
    return {"file recieved": True}


if __name__ == '__main__':
    app.run(debug=True, port=5000)