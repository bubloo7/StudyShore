import io
from google.oauth2 import service_account   
from google.cloud import speech
from mutagen.mp3 import MP3

client_file = 'sa_speech.json'
credentials = service_account.Credentials.from_service_account_file(client_file)
client = speech.SpeechClient(credentials = credentials)

audio_len = MP3("elon_musk.mp3").info.length
audio_file = 'elon_musk.mp3'
with io.open(audio_file, 'rb') as f:
    content = f.read()
    audio = speech.RecognitionAudio(content=content)
    
config = speech.RecognitionConfig(
    encoding = speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
    sample_rate_hertz = 48000,
    language_code = 'en-US',
    audio_channel_count = 2
)

if audio_len <= 60:
    response = client.recognize(config = config, audio = audio)
    print(response)
else:
    print("hi")