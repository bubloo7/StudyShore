from flask import Flask, request
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)


def handle_png(png):
    pass

def handle_jpeg(jpeg):
    pass

def handle_pdf(pdf):
    pass

def handle_txt(txt):
    pass

def handle_docx(docx):
    pass


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    name = file.filename
    extension = name.split('.')[-1]
    print(extension, name)
    if extension == 'png':
        handle_png(file)
    elif extension == 'jpg':
        handle_jpeg(file)
    elif extension == 'pdf':
        handle_pdf(file)
    elif extension == 'txt':
        handle_txt(file)
    elif extension == 'docx':
        handle_docx(file)

    print('pinged', file, type(file), file.filename)

    return {"file recieved": True}


if __name__ == '__main__':
    app.run(debug=True, port=5000)