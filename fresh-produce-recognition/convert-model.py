import torch
import torch.nn as nn
import torchvision.transforms as transforms
from PIL import Image
import numpy as np
import keras2onnx
import onnx
import onnx2pytorch
import tensorflow as tf

# Convert Keras model to ONNX format
keras_model_path = 'trained_model.h5'
onnx_model_path = 'converted_model.onnx'

keras_model = tf.keras.models.load_model(keras_model_path)
onnx_model = keras2onnx.convert.from_keras_model(keras_model)
onnx.save_model(onnx_model, onnx_model_path)

# Load ONNX model and convert it to PyTorch
pytorch_model_path = 'converted_model.pt'

onnx_model = onnx.load(onnx_model_path)
pytorch_model = onnx2pytorch.ConvertModel(onnx_model).cuda()
dummy_input = torch.randn(1, 3, 64, 64).cuda()
torch.onnx.export(pytorch_model, dummy_input, pytorch_model_path)

# Load PyTorch model
class MyModel(nn.Module):
    def __init__(self):
        super(MyModel, self).__init__()
        # Define your model layers here

    def forward(self, x):
        # Implement the forward pass logic
        return x

pytorch_model = MyModel()
pytorch_model.load_state_dict(torch.load(pytorch_model_path))
pytorch_model.eval()

# Perform inference using PyTorch model
transform = transforms.Compose([
    transforms.Resize((64, 64)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

image_path = 'test/image.jpg'
image = Image.open(image_path)
image = transform(image).unsqueeze(0)

with torch.no_grad():
    predictions = pytorch_model(image)

predicted_class_index = torch.argmax(predictions, dim=1).item()

print(predictions)
print("It's a {}".format(predicted_class_index))