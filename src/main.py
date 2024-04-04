from fastapi import FastAPI, UploadFile
import uvicorn
import numpy as np
from common.model_utils import read_file_as_image, classify_image, get_labels

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/ping")
async def ping():
    return "Ping Pong!"


@app.post("/predict", status_code=200)
async def predict(file: UploadFile):
    image = read_file_as_image(await file.read()) 
    img_batch = np.expand_dims(image, 0)
    predictions = await classify_image(img_batch)
    
    labels = get_labels()
    results = {
        "class id": int(np.argmax(predictions)),
        "class": labels[np.argmax(predictions)],
        "confidence": float(np.max(predictions))
    }
    
    return results

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)