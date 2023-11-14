# ExpirationDateTracker(WasteNot)
WaffleHack 2023

### WasteNot App
WasteNot is a web application designed to help users keep track of their food items, manage expiration dates, and make informed grocery decisions. The app includes features such as user authentication, food item addition through various methods (receipt, photo, barcode), and timely reminders about expiring items.

### Tech Stack
#### Frontend:
ReactJS, CSS
#### Backend:
Node.js, Express.js, FastAPI
#### Database:
MongoDB
#### Other APIs:
Open Food API, Asprise OCR API

### Features

#### Sign Up Page

Frontend (React):

* User-friendly sign-up form with real-time validation.
* State management using React hooks (useState).
* Event handling for the "Sign Up" button triggering an API request to the backend.

Backend (Node.js + Express.js):

* Express server handling POST requests on the /signup route.
* Secure password handling with bcrypt for hashing before storage in MongoDB.
* MongoDB interaction through Mongoose for user data storage.
* Response with appropriate status codes and messages.

Database (MongoDB):

* Collection (users) storing hashed user data.
  
Frontend Response Handling:

* Update UI or display messages based on backend response.

#### Sign In Page

Frontend (React):

* Sign-in form with real-time validation.
* Event handling for the "Sign In" button triggering an API request.

Backend (Node.js + Express.js):

* Express server handling POST requests on the /signin route.
* MongoDB interaction to validate user credentials using bcrypt.
* Token generation for authenticated sessions.

Database (MongoDB):

* Collection (users) storing hashed user data.

Frontend Response Handling:

* Store authentication token (if provided) and update UI or redirect.

#### Home Page

Frontend (React):

* UI for adding food items through receipt, barcode, or photo.
* Event handling for sending data to the backend for processing and storage.
* Display of stored food items with countdown timers based on freshness.

Backend (Node.js + Express.js):

* Endpoints (e.g., /addFood, /deleteFood) for adding and deleting food items.
* Integration with Open Food API for fetching fresh time periods.
* MongoDB storage (foodItems) for food item details.

Open Food API Integration:

* Backend requests to Open Food API for fresh time period information.

Database (MongoDB):

* Collection (foodItems) storing food item details.

Frontend Response Handling:

* Update UI based on backend responses.
* Countdown timers for each displayed food item.
* Upload Receipt

  

#### FastAPI (Python):

* Web service for scanning receipts.
* /scan_receipt route for handling POST requests.
* Utilizes Asprise OCR API for processing receipt images.
* Returns extracted information in JSON format.
* Upload Photo - Fresh Produce Recognition

#### Machine Learning (TensorFlow):

* Data preprocessing using TensorFlow's image_dataset_from_directory.
* Convolutional Neural Network (CNN) model for fresh produce recognition.
* Training, validation, and testing of the model.
* Model evaluation and visualization of accuracy.
* Saved model for testing and prediction.
* Scan Barcode
  
#### FastAPI (Python):

* Web service for decoding barcodes from uploaded images.
* /decode_barcode route for handling POST requests.
* Barcode decoding using the pyzbar library.
* Retrieval of product details from Open Food Facts API.
* JSON response with decoded barcode information.


### Getting Started

* Clone the repository
* Install dependencies for both frontend and backend
* Set up MongoDB and configure the database connection in the backend
* Start the frontend and backend servers

### Contributing
Contributions are welcome! Please follow our contribution guidelines.

### License
This project is licensed under the MIT License.

### YouTube Video
[![Alt text](https://img.youtube.com/vi/jXnWqMaLeRA/0.jpg)](https://youtu.be/jXnWqMaLeRA)

### Figma Link
https://www.figma.com/file/ZH1gqgOhWrEb3ib4Np9LSO/Expiration-Date-Tracker?type=design&node-id=0-1&mode=design&t=hk9hC1kIkIWzJffx-0

### Slides
https://tome.app/zeel-b98/wastenot-making-a-difference-one-expiry-date-at-a-time-cljbbfd0p1h0xmu3eeh2rrglp

### Note
Navigate to different branches to access the code for different features
