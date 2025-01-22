# EmotionAI - Real-time Emotion Detection

A deep learning-based emotion detection system that recognizes facial expressions in real-time using a webcam or uploaded images.

## Features

- **Real-time Emotion Detection:** Analyze facial expressions through a live webcam feed.
- **Image Upload Support:** Detect emotions from uploaded images.
- **Emotion Categories:**
  - Happy
  - Sad
  - Angry
  - Disgust
  - Fear
  - Surprise
  - Neutral
- **Interactive Web Interface:** User-friendly design for seamless interaction.
- **Live Confidence Scores:** Display confidence levels for detected emotions.
- **Emotion History Tracking:** Monitor past detections and trends.

## Tech Stack

### Frontend

- **React.js**: Build interactive UI components.
- **TailwindCSS**: Style the interface with a modern CSS framework.
- **Recharts**: Visualize emotion data using charts and graphs.
- **Axios**: Handle API requests.

### Backend

- **Python**: Power the backend logic.
- **Keras/TensorFlow**: Train and run the deep learning model.
- **OpenCV**: Perform image processing and facial detection.
- **Flask API**: Manage API endpoints for communication.

### Machine Learning Model

- **Architecture:** Convolutional Neural Network (CNN)
- **Dataset:** Trained on the FER2013 dataset
- **Accuracy:** Achieves \~63% validation accuracy

## Installation

### 1. Clone the Repository

```bash
github.com/DanishVahora/CNN_Emotion_Recognition.git
cd CNN_Emotion_Recognition
```

### 2. Install Frontend Dependencies

```bash
cd emotion-detector-frontend
npm install
```

### 3. Install Python Dependencies

```bash
cd CNN_PROJ
pip install -r requirements.txt
```

### 4. Start the Backend Server

```bash
uvicorn api:app --reload
```

### 5. Start the Frontend Development Server

```bash
cd emotion-detector-frontend
npm run dev
```

## Project Structure

```plaintext
emotion-detection/
├── CNN_PROJ/
│   ├── models/
│   ├── trainmodel.ipynb
│   ├── realtimedetection.py
│   └── requirements.txt
├── emotion-detector-frontend/
│   ├── src/
│   │   ├── Pages/
│   │   ├── components/
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Usage

### 1. Real-time Detection

- Navigate to the landing page and click **"Try Live Demo"**.
- Allow camera access when prompted.
- Click **"Start Detection"** to begin real-time emotion analysis.

### 2. Image Upload

- Click the **"Upload Image"** button.
- Select an image containing faces.
- View the detected emotions and confidence scores.

### 3. Analytics

- Monitor the **emotion history graph** for trends.
- Download detection data as a **JSON file**.
- Adjust detection settings as needed.

## Model Architecture

- **Input:** 48x48 grayscale images
- **Layers:**
  - 4 Convolutional layers with MaxPooling
  - Dropout layers for regularization
  - Dense layers for classification
- **Output:** 7 emotion classes

## Contributing

We welcome contributions to enhance the project! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

Happy coding! 🚀

