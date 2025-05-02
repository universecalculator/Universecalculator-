import { X, MessageSquare, Mail } from "lucide-react";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  // Function to handle navigation and close menu
  const handleNavClick = (tab: string) => {
    // Create custom event to change the tab
    const event = new CustomEvent('changeTab', { detail: tab });
    window.dispatchEvent(event);
    // Close the menu
    toggleMenu();
  };

  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => handleNavClick("calculator")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Home
              </button>
            </li>
            <li>
              <Link 
                href="/feedback" 
                className="flex items-center py-2 text-gray-700 hover:text-primary border-b border-gray-100"
                onClick={toggleMenu}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span className="font-medium">Feedback</span>
              </Link>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick("basic-calc")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Basic Calculator
              </button>
            </li>
            <li>
              <button 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
                onClick={() => {
                  alert("Scientific Calculator will be available soon!");
                  toggleMenu();
                }}
              >
                Scientific Calculator
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick("percentage-calc")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Percentage Calculator
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick("profit-loss")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Profit & Loss Calculator
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick("currency-converter")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Currency Converter
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick("shopping")} 
                className="w-full text-left block py-2 text-gray-700 hover:text-primary border-b border-gray-100"
              >
                Global Shopping
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
