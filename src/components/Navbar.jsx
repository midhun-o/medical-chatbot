"use client";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { push, pathname } = useRouter();

  const handleNavigation = (path) => {
    push(path);
  };

  return (
    <nav className="w-full bg-black shadow-lg z-50 hidden md:block">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button 
          className="text-2xl font-bold text-white bg-transparent border-0 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          MedChat<span className="text-gray-300">Bot</span>
        </button>

        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => handleNavigation('/')}
              className={`text-white ${pathname === '/' ? 'border-b-2 border-gray-300' : ''} py-1 px-2 bg-transparent border-0 cursor-pointer`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/about')}
              className={`text-white ${pathname === '/about' ? 'border-b-2 border-gray-300' : ''} py-1 px-2 bg-transparent border-0 cursor-pointer`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/services')}
              className={`text-white ${pathname === '/services' ? 'border-b-2 border-gray-300' : ''} py-1 px-2 bg-transparent border-0 cursor-pointer`}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/contact')}
              className={`text-white ${pathname === '/contact' ? 'border-b-2 border-gray-300' : ''} py-1 px-2 bg-transparent border-0 cursor-pointer`}
            >
              Contact
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('/chat')}
              className="bg-gray-700 text-white px-4 py-2 rounded-full shadow hover:bg-gray-600 bg-transparent border-0 cursor-pointer"
            >
              Chat Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
