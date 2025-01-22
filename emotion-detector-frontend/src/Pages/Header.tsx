import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          <span className="text-xl font-bold text-gray-800">EmotionAI</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/detector" className="text-gray-600 hover:text-gray-900">Try Demo</Link>
        </div>
      </nav>
    </header>
    )
  };  
    export default Header;