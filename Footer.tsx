import { Calculator } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Calculator className="mr-2" />
              UniverseCalculator
            </h2>
            <p className="text-gray-400 max-w-xs">Your all-in-one platform for solving everyday calculations with ease.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/feedback" className="text-gray-300 hover:text-white transition-colors font-semibold text-white">Feedback</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; 2025 UniverseCalculator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
