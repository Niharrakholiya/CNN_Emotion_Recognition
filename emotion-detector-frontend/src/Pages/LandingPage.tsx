import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';



const LandingPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Detect Emotions with AI Precision
              </h1>
              <p className="text-xl mb-8">
                Advanced emotion recognition technology that understands human expressions in real-time.
              </p>
              <Link
                to="/detector"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Camera className="mr-2" />
                Try Live Demo
              </Link>
            </div>        
            <div className="hidden md:block">
  <svg
    viewBox="0 0 600 400"
    className="w-full h-full rounded-lg shadow-xl"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4338ca', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background */}
    <rect x="0" y="0" width="600" height="400" fill="url(#bgGradient)" rx="15"/>

    {/* Face Container */}
    <g transform="translate(300 200)">
      {/* Face Circle */}
      <circle r="120" fill="none" stroke="white" strokeWidth="4" opacity="0.8"/>
      
      {/* Eyes */}
      <g id="eyes">
        <circle cx="-50" cy="-40" r="15" fill="white" opacity="0.8">
          <animate
            attributeName="ry"
            values="15;2;15"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="-40" r="15" fill="white" opacity="0.8">
          <animate
            attributeName="ry"
            values="15;2;15"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Animated Mouth */}
      <path d="M-60 40 Q0 80 60 40" fill="none" stroke="white" strokeWidth="4" opacity="0.8">
        <animate
          attributeName="d"
          values="
            M-60 40 Q0 80 60 40;
            M-60 60 Q0 0 60 60;
            M-60 40 Q0 80 60 40
          "
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </g>

    {/* Emotion Indicators */}
    <g>
      <circle cx="150" cy="100" r="20" fill="white" opacity="0.2" filter="url(#glow)">
        <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="450" cy="100" r="20" fill="white" opacity="0.2" filter="url(#glow)">
        <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" begin="1s"/>
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </g>

    {/* Scanning Effect */}
    <line x1="100" y1="300" x2="500" y2="300" stroke="white" strokeWidth="2" opacity="0.5">
      <animate attributeName="y1" values="300;100;300" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="300;100;300" dur="3s" repeatCount="indefinite"/>
    </line>
  </svg>
</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Detection",
                description: "Instant emotion analysis through your webcam",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" strokeWidth="2">
                      <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <path d="M12 4v2M12 18v2M4 12H6M18 12h2" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "High Accuracy",
                description: "Advanced AI models trained on diverse datasets",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3 6.5L22 9l-5 4.5L18 21l-6-3.5L6 21l1-7.5L2 9l7-0.5L12 2z" strokeWidth="2">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                )
              },
              {
                title: "Multiple Emotions",
                description: "Detect 7 different emotional states",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2">
                      <animate attributeName="d" 
                        values="M8 14s1.5 2 4 2 4-2 4-2;M8 14s1.5 1 4 1 4-1 4-1;M8 14s1.5 2 4 2 4-2 4-2" 
                        dur="3s" 
                        repeatCount="indefinite"/>
                    </path>
                    <circle cx="9" cy="9" r="1" fill="currentColor"/>
                    <circle cx="15" cy="9" r="1" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <svg
  viewBox="0 0 500 300"
  className="w-full h-full rounded-lg shadow-lg"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.05 }} />
      <stop offset="100%" style={{ stopColor: '#4338ca', stopOpacity: 0.1 }} />
    </linearGradient>
    
    <filter id="glowFilter">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  {/* Background with subtle pattern */}
  <rect x="0" y="0" width="500" height="300" fill="url(#techGradient)" rx="15"/>
  
  {/* Central Process Visualization */}
  <g transform="translate(250, 150)">
    {/* Rotating outer ring */}
    <circle r="100" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="4,4">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>

    {/* AI Face Recognition Visualization */}
    <g filter="url(#glowFilter)">
      <circle r="60" fill="none" stroke="#4338ca" strokeWidth="2">
        <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Facial points */}
      <circle cx="-20" cy="-15" r="3" fill="#2563eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="20" cy="-15" r="3" fill="#2563eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Emotion detection smile line */}
      <path
        d="M-30,20 Q0,50 30,20"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
      >
        <animate
          attributeName="d"
          values="M-30,20 Q0,50 30,20;M-30,10 Q0,-10 30,10;M-30,20 Q0,50 30,20"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </g>

    {/* Scanning effect */}
    <line x1="-50" y1="0" x2="50" y2="0" stroke="#4338ca" strokeWidth="1.5" opacity="0.5">
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 -50"
        to="0 50"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.5s" repeatCount="indefinite"/>
    </line>
  </g>

  {/* Data points floating around */}
  <g className="data-points">
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <circle
        key={angle}
        cx={250 + Math.cos(angle * Math.PI / 180) * 120}
        cy={150 + Math.sin(angle * Math.PI / 180) * 120}
        r="4"
        fill="#2563eb"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          begin={`${angle / 360}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </g>
</svg>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Face Detection</h3>
                  <p className="text-gray-600">Advanced algorithms locate faces in real-time</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Feature Analysis</h3>
                  <p className="text-gray-600">AI analyzes facial features and expressions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Emotion Classification</h3>
                  <p className="text-gray-600">Real-time emotion detection with confidence scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default  LandingPage;