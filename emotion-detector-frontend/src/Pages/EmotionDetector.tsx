import React, { useState, useRef, useEffect } from 'react';
import { Camera, BarChart2, Settings, Download, RefreshCw } from 'lucide-react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Header from './Header';
import Footer from './Footer';

const EmotionDetector = () => {
  const webcamRef = useRef(null);
  const [detectionData, setDetectionData] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [emotionHistory, setEmotionHistory] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [settings, setSettings] = useState({
    detectionInterval: 1000,
    showConfidence: true,
    showBoundingBox: true
  });

  const captureFrame = React.useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        try {
          const response = await axios.post('http://localhost:8000/detect-emotion', {
            image: imageSrc
          });
          setDetectionData(response.data);
          if (response.data.faces.length > 0) {
            const timestamp = new Date().toLocaleTimeString();
            setEmotionHistory(prev => [...prev, {
              timestamp,
              emotion: response.data.faces[0].emotion,
              confidence: response.data.faces[0].confidence * 100
            }].slice(-20));
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (isDetecting) {
      intervalId = setInterval(captureFrame, settings.detectionInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isDetecting, settings.detectionInterval, captureFrame]);

  const downloadHistory = () => {
    const data = JSON.stringify(emotionHistory, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emotion-history.json';
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Detection Window */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Live Detection</h2>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowAnalytics(!showAnalytics)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <BarChart2 />
                  </button>
                  <button
                    onClick={() => downloadHistory()}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <Download />
                  </button>
                  <button
                    onClick={() => setEmotionHistory([])}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <RefreshCw />
                  </button>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden">
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/jpeg"
                  className="w-full rounded-lg"
                />
                
                {settings.showBoundingBox && detectionData?.faces.map((face, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      left: face.bbox[0],
                      top: face.bbox[1],
                      width: face.bbox[2],
                      height: face.bbox[3],
                      border: '2px solid #3B82F6',
                      borderRadius: '8px'
                    }}
                  >
                    {settings.showConfidence && (
                      <div className="absolute -top-10 left-0 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                        {face.emotion} ({(face.confidence * 100).toFixed(1)}%)
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setIsDetecting(prev => !prev)}
                  className={`px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all transform hover:scale-105 ${
                    isDetecting 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>{isDetecting ? 'Stop Detection' : 'Start Detection'}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Settings and Analytics Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Settings</h3>
                <Settings className="text-gray-600" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center justify-between text-gray-700">
                    Detection Interval (ms)
                    <input
                      type="number"
                      value={settings.detectionInterval}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        detectionInterval: parseInt(e.target.value)
                      }))}
                      className="ml-2 w-24 px-2 py-1 border rounded"
                      min="100"
                      step="100"
                    />
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="checkbox"
                      checked={settings.showConfidence}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        showConfidence: e.target.checked
                      }))}
                      className="mr-2"
                    />
                    Show Confidence Score
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="checkbox"
                      checked={settings.showBoundingBox}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        showBoundingBox: e.target.checked
                      }))}
                      className="mr-2"
                    />
                    Show Bounding Box
                  </label>
                </div>
              </div>
            </div>

            {/* Emotion History */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Emotion History</h3>
              {emotionHistory.length > 0 ? (
                <div className="h-64">
                  <LineChart
                    width={300}
                    height={200}
                    data={emotionHistory}
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="confidence" 
                      stroke="#3B82F6" 
                      name="Confidence %"
                    />
                  </LineChart>
                </div>
              ) : (
                <p className="text-gray-500 text-center">No detection history yet</p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmotionDetector;