import cv2
from keras.models import model_from_json # type: ignore
import numpy as np
from tkinter import Tk, filedialog

# Load the pre-trained model
json_file = open(r"D:\CNN_Emotion_Recognition\CNN_PROJ\emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights("emotoindetector.h5")

# Load Haar Cascade
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

# Labels for emotions
labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}

def extract_features(image):
    feature = np.array(image)
    feature = feature.reshape(1, 48, 48, 1)
    return feature / 255.0

def process_uploaded_image(filepath):
    """Process the uploaded image, resize it to 48x48, and display the detected emotion."""
    try:
        image = cv2.imread(filepath)  # Read the image
        if image is None:
            print("Error: Unable to read the image. Please select a valid image file.")
            return

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)  # Convert to grayscale
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)  # Detect faces

        if len(faces) == 0:
            print("No face detected in the image. Please upload an image with a visible face.")
            return

        for (p, q, r, s) in faces:
            # Extract the face region
            face_image = gray[q:q + s, p:p + r]
            cv2.rectangle(image, (p, q), (p + r, q + s), (255, 0, 0), 2)  # Draw rectangle around the face

            # Resize the face to 48x48
            face_image = cv2.resize(face_image, (48, 48))

            # Preprocess the face for model prediction
            img = extract_features(face_image)
            pred = model.predict(img)  # Predict emotion
            prediction_label = labels[pred.argmax()]  # Get emotion label

            # Add text to the image with the detected emotion
            cv2.putText(image, '%s' % (prediction_label), (p, q - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

        # Display the result
        cv2.imshow("Uploaded Image Emotion Detection", image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    except Exception as e:
        print(f"An error occurred: {e}")


# Main loop for live camera and image upload
webcam = cv2.VideoCapture(0)

while True:
    print("Press 'c' for live camera, 'u' to upload an image, or 'q' to quit.")
    key = input("Your choice: ").lower()

    if key == 'c':
        # Live camera emotion detection
        while True:
            ret, im = webcam.read()
            gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(im, 1.3, 5)
            try:
                for (p, q, r, s) in faces:
                    image = gray[q:q + s, p:p + r]
                    cv2.rectangle(im, (p, q), (p + r, q + s), (255, 0, 0), 2)
                    image = cv2.resize(image, (48, 48))
                    img = extract_features(image)
                    pred = model.predict(img)
                    prediction_label = labels[pred.argmax()]
                    cv2.putText(im, '% s' % (prediction_label), (p - 10, q - 10),
                                cv2.FONT_HERSHEY_COMPLEX_SMALL, 2, (0, 0, 255))
                cv2.imshow("Live Camera Emotion Detection", im)
                if cv2.waitKey(27) & 0xFF == ord('q'):
                    break
            except cv2.error:
                pass
        cv2.destroyAllWindows()

    elif key == 'u':
    # Image upload functionality
        print("Opening file dialog to select an image...")
        Tk().withdraw()  # Hide the Tkinter root window
        filepath = filedialog.askopenfilename(
            title="Select an Image File",
            filetypes=[("Image Files", "*.png;*.jpg;*.jpeg")]
        )
        if filepath:
            print(f"File selected: {filepath}")
            process_uploaded_image(filepath)
        else:
            print("No file selected. Returning to the main menu.")


# Release webcam resources
webcam
