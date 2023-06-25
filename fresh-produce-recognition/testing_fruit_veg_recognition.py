import torch
import torchvision.transforms as transforms
from PIL import Image
import json
import torchvision.models as models

num_classes = 36  # Replace with the actual number of output classes in your model

# Load the pre-trained model
model = models.resnet18(pretrained=True)
num_ftrs = model.fc.in_features
model.fc = torch.nn.Linear(num_ftrs, num_classes)  # Replace num_classes with the number of output classes in your model
model.load_state_dict(torch.load('trained_model.pt'))
model.eval()

# Define the image transformation
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # Normalization values for ImageNet dataset
])

# Load and preprocess the image
image_path = 'test/image.jpg'
image = Image.open(image_path)
image = transform(image)
image = image.unsqueeze(0)  # Add batch dimension

# Forward pass through the model
with torch.no_grad():
    output = model(image)

# Get the predicted class label
_, predicted_idx = torch.max(output, 1)
predicted_label = 'banana'  # Replace with the actual label corresponding to the predicted_idx

# Create a dictionary with the output
output_dict = {'name': predicted_label}

# Convert the dictionary to JSON format
output_json = json.dumps(output_dict)

# Print or save the JSON output
print(output_json)