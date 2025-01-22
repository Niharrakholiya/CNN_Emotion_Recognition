import EmotionDetector from "./Pages/EmotionDetector"
import LandingPage from "./Pages/LandingPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detector" element={<EmotionDetector />} />
      </Routes>
    </BrowserRouter> 
     )
}

export default App
