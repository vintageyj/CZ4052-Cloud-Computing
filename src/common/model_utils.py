from io import BytesIO
from PIL import Image
import tensorflow as tf
import os
import numpy as np


def read_file_as_image(file) -> np.ndarray:
    image = np.array(Image.open(BytesIO(file)))
    return image

async def classify_image(image: np.ndarray, model_name: str=None) -> str:
    # model_path = os.path.join("models", "doggo_breed_classifier", model_name)
    # model = tf.keras.models.load_model(model_path)

    # Use to load pb file
    model_path = os.path.join("DogRace")
    model = tf.saved_model.load(model_path)

    image = tf.image.resize(image, (180, 180))

    print("Image shape:",image.shape)
    predictions = model(image)

    return predictions[0].numpy()

def get_labels(labels_path="DogRace/labels.txt"):
    with open(labels_path, "r") as file:
        labels = file.read().splitlines()
    return labels