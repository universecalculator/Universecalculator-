import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Globe, 
  ShoppingCart, 
  Shirt 
} from "lucide-react";
import { 
  FaAmazon, 
  FaShoppingBag, 
  FaEbay 
} from "react-icons/fa";
import { showAlert } from "@/lib/utils";

interface ShoppingButtonProps {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
}

function ShoppingButton({ icon, text, bgColor }: ShoppingButtonProps) {
  return (
    <Button
      onClick={() => showAlert("Affiliate link will be added soon")}
      className={`w-full py-8 px-6 ${bgColor} text-white rounded-lg flex items-center justify-center transition-colors shadow-sm hover:opacity-90`}
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span className="font-medium text-lg">{text}</span>
    </Button>
  );
}

export default function GlobalShopping() {
  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Global Shopping</h2>
        <p className="text-xl text-gray-600 mb-10">Choose your region to explore exclusive deals</p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* India Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <MapPin className="text-orange-500 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">India Specials</h3>
            </div>
            
            <div className="space-y-4">
              <ShoppingButton 
                icon={<FaAmazon />} 
                text="Shop on Amazon India" 
                bgColor="bg-orange-custom" 
              />
              
              <ShoppingButton 
                icon={<ShoppingCart />} 
                text="Shop on Flipkart" 
                bgColor="bg-blue-custom" 
              />
              
              <ShoppingButton 
                icon={<Shirt />} 
                text="Shop on Myntra" 
                bgColor="bg-pink-custom" 
              />
            </div>
          </div>
          
          {/* International Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Globe className="text-green-500 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Worldwide Shopping</h3>
            </div>
            
            <div className="space-y-4">
              <ShoppingButton 
                icon={<FaAmazon />} 
                text="Shop on Amazon Global" 
                bgColor="bg-yellow-custom" 
              />
              
              <ShoppingButton 
                icon={<FaShoppingBag />} 
                text="Shop on AliExpress" 
                bgColor="bg-red-custom" 
              />
              
              <ShoppingButton 
                icon={<FaEbay />} 
                text="Shop on eBay" 
                bgColor="bg-blue-400 hover:bg-blue-500" 
              />
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 mt-10 max-w-xl mx-auto text-sm">
          Note: Affiliate links coming soon. Enjoy seamless global shopping from one platform.
        </p>
      </div>
    </section>
  );
}
