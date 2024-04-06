from flask import Flask, request
from flask_cors import CORS
import os
from docx import Document
from pypdf import PdfReader
from pptx import Presentation





app = Flask(__name__)
CORS(app)


def handle_png(png):
    pass

def handle_jpeg(jpeg):
    pass

def handle_pdf(pdf):
    reader = PdfReader(os.getcwd() + '/file.pdf')
    number_of_pages = len(reader.pages)
    s = ''
    for i in range(number_of_pages):
        page = reader.pages[i]
        text = page.extract_text()
        s += text
    
    print(s) # pass in s to gemini

def handle_txt(txt):
    s = open('file.txt').read()
    print(s) # pass in s to gemini
    pass

def handle_docx(docx):
    d = Document(os.getcwd() + '/file.docx')
    s = ''
    for paragraph in d.iter_inner_content():
        for line in paragraph.iter_inner_content():
            s += line.text
        s += '\n'
    
    print(s) # pass in s to gemini

def handle_mp3(mp3):
    pass

def handle_mp4(mp4):
    pass

def handle_pptx(pptx):
    p = Presentation('file.pptx')
    s = ''
    # sorry about the try/except stuff. its annoying bc certain things dont have texts/shapes and make it crash
    for slide in p.slides:
        try: 
            for shape in slide.shapes:
                try:
                    s += shape.text
                except Exception:
                    pass
            s += '\n'
        except Exception:
            pass
    
    print(s) # pass in s to gemini

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    name = file.filename
    extension = name.split('.')[-1]
    file.save(dst = os.getcwd() + '/file.' + extension)

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
    elif extension == 'mp3':
        handle_mp4(file)
    elif extension == 'mp4':
        handle_mp3(file)
    elif extension == 'pptx':
        handle_pptx(file)

    print('pinged', file, type(file), file.filename)

    return {"file recieved": True}


if __name__ == '__main__':
    app.run(debug=True, port=5000)