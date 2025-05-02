import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  SquareRadical, 
  LineChart, 
  Percent,
  ArrowLeftRight,
  Star,
  Sparkles,
  Zap,
  ArrowDown,
  RotateCw
} from "lucide-react";
import { showAlert } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface CalculatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  route?: string;
}

function CalculatorCard({ icon, title, description, color, route }: CalculatorCardProps) {
  // Use hooks for animation effects
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Handle card click
  const handleCalculatorClick = () => {
    if (route) {
      // If a route is specified, we update the parent's state through a global event
      const event = new CustomEvent('changeTab', { detail: route });
      window.dispatchEvent(event);
    } else {
      // Otherwise, show an alert for calculators not yet implemented
      showAlert("This calculator will be available soon!");
    }
  };

  // Trigger bounce animation on first render
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set bouncing effect with random delay for each card
    timeoutRef.current = setTimeout(() => {
      setIsBouncing(true);
      
      // Turn off the bouncing after the animation completes
      timeoutRef.current = setTimeout(() => {
        setIsBouncing(false);
      }, 800);
    }, Math.random() * 1500);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Get color styles based on the color prop
  const getGradientBackground = () => {
    switch(color) {
      case 'primary':
        return 'bg-gradient-to-br from-blue-500 to-indigo-600';
      case 'secondary':
        return 'bg-gradient-to-br from-green-400 to-emerald-500';
      case 'accent':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'yellow':
        return 'bg-gradient-to-br from-yellow-400 to-amber-500';
      case 'red':
        return 'bg-gradient-to-br from-red-500 to-rose-500';
      default:
        return 'bg-gradient-to-br from-blue-500 to-indigo-600';
    }
  };

  const getIconBackground = () => {
    switch(color) {
      case 'primary':
        return 'bg-blue-100 text-blue-500';
      case 'secondary':
        return 'bg-green-100 text-green-500';
      case 'accent':
        return 'bg-purple-100 text-purple-500';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-500';
      case 'red':
        return 'bg-red-100 text-red-500';
      default:
        return 'bg-blue-100 text-blue-500';
    }
  };

  return (
    <div 
      className={`rounded-2xl overflow-hidden transform transition-all duration-300 
        ${isHovered ? 'scale-105 shadow-xl' : 'shadow-lg'}
        ${isBouncing ? 'animate-bounce' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Colored header */}
        <div className={`h-4 ${getGradientBackground()}`}></div>
        
        {/* Card content */}
        <div className="bg-white p-6 border border-gray-100 flex flex-col items-center text-center">
          {/* Icon with floating animation */}
          <div className={`w-20 h-20 ${getIconBackground()} rounded-full flex items-center justify-center mb-5 transform transition-transform duration-700 ${isHovered ? 'animate-pulse' : ''}`}>
            {icon}
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <Button 
            onClick={handleCalculatorClick}
            className={`mt-auto ${getGradientBackground()} text-white rounded-full hover:brightness-110 transform transition-all duration-300 ${isHovered ? 'scale-105 shadow-md' : ''} py-2 px-6 font-medium`}
          >
            <span className="flex items-center gap-2">
              <span>Open Calculator</span>
              {isHovered && <Zap className="w-4 h-4 animate-pulse" />}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Animation state for hero section
  const [showHeroElements, setShowHeroElements] = useState(false);
  
  // Star animation for the hero section
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  
  // Generate stars for the hero background
  useEffect(() => {
    const newStars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 0.5 + 0.5}rem`,
      delay: `${Math.random() * 5}s`
    }));
    
    setStars(newStars);
    
    // Trigger entrance animations after a short delay
    const timer = setTimeout(() => {
      setShowHeroElements(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const calculators = [
    {
      icon: <Calculator className="text-primary text-2xl" />,
      title: "Basic Calculator",
      description: "Perform simple arithmetic operations quickly and easily.",
      color: "primary",
      route: "basic-calc"
    },
    {
      icon: <SquareRadical className="text-green-500 text-2xl" />,
      title: "Scientific Calculator",
      description: "Advanced functions for complex mathematical calculations.",
      color: "secondary"
    },
    {
      icon: <LineChart className="text-purple-500 text-2xl" />,
      title: "Profit/Loss Calculator",
      description: "Track business performance with detailed profit analysis.",
      color: "accent",
      route: "profit-loss"
    },
    {
      icon: <Percent className="text-yellow-500 text-2xl" />,
      title: "Percentage Calculator",
      description: "Calculate percentages, increases, decreases, and more.",
      color: "yellow",
      route: "percentage-calc"
    },
    {
      icon: <ArrowLeftRight className="text-red-500 text-2xl" />,
      title: "Currency Converter",
      description: "Convert between different currencies with live exchange rates.",
      color: "red",
      route: "currency-converter"
    }
  ];

  return (
    <>
      {/* Hero/Intro Section with animated background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 py-16 md:py-24">
        {/* Animated stars in background */}
        {stars.map(star => (
          <div 
            key={star.id}
            className="absolute animate-pulse opacity-70"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
        
        {/* Animated calculator icon */}
        <div className="absolute -top-6 -right-6 opacity-10 text-white">
          <Calculator className="w-48 h-48 animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
        
        <div className="absolute -bottom-6 -left-6 opacity-10 text-white">
          <LineChart className="w-48 h-48 animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Logo-like element with glow effect */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-xl transform scale-150 animate-pulse"></div>
              <div className="bg-white rounded-full p-4 shadow-2xl relative">
                <Calculator className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Animated title entrance */}
          <h1 
            className={`text-4xl md:text-6xl font-extrabold text-white mb-8 transition-all duration-1000 ${showHeroElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Universe</span>
            <span className="text-yellow-300">Calculator</span>
          </h1>
          
          {/* Animated subtitle entrance */}
          <h2 
            className={`text-xl md:text-2xl font-medium text-blue-100 mb-8 transition-all duration-1000 delay-300 ${showHeroElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Your complete calculation toolbox for everyday needs
          </h2>
          
          {/* Description with animated entrance */}
          <div 
            className={`max-w-3xl mx-auto mb-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-1000 delay-500 ${showHeroElements ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <p className="text-lg text-blue-50 leading-relaxed">
              Your all-in-one platform for solving everyday calculations with ease. Whether you're a student, business professional, or anyone needing quick calculations, UniverseCalculator delivers fast, accurate results. From basic arithmetic to currency conversions, we make calculation tasks simpler and more efficient.
            </p>
          </div>
          
          {/* CTA button with animated entrance */}
          <div className={`transition-all duration-1000 delay-700 ${showHeroElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              onClick={() => document.getElementById('calculators-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
            >
              <span className="flex items-center gap-2">
                <span>Explore Calculators</span>
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculators Section with fancy header */}
      <section id="calculators-section" className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section header with decoration */}
          <div className="text-center mb-12 relative">
            <div className="inline-block">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-2">Our Calculators</h2>
                <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mx-auto"></div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-30">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-5">
              Powerful tools designed to make your calculations quick, easy and accurate
            </p>
          </div>
          
          {/* Background decoration elements */}
          <div className="relative">
            <div className="absolute top-1/4 -left-4 opacity-5 hidden md:block">
              <Calculator className="w-32 h-32 text-blue-800" />
            </div>
            <div className="absolute bottom-0 -right-4 opacity-5 hidden md:block">
              <Percent className="w-32 h-32 text-blue-800" />
            </div>
          
            {/* Calculator cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
              {calculators.map((calc, index) => (
                <CalculatorCard
                  key={index}
                  icon={calc.icon}
                  title={calc.title}
                  description={calc.description}
                  color={calc.color}
                  route={calc.route}
                />
              ))}
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="flex justify-center mt-12">
            <Star className="text-yellow-400 w-6 h-6 animate-pulse" />
            <Star className="text-yellow-400 w-8 h-8 mx-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Star className="text-yellow-400 w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-14 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose UniverseCalculator?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-6 rounded-xl hover:bg-blue-800/70 transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-blue-100">Get results instantly with our optimized calculation engines</p>
              </div>
              
              <div className="bg-blue-800/50 p-6 rounded-xl hover:bg-blue-800/70 transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
                <p className="text-blue-100">Intuitive interface with pleasant aesthetics for the best user experience</p>
              </div>
              
              <div className="bg-blue-800/50 p-6 rounded-xl hover:bg-blue-800/70 transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Always Updated</h3>
                <p className="text-blue-100">Continuously improving with new features and calculation types</p>
              </div>
            </div>
            
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-10 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>Get Started Now</span>
                <ArrowDown className="w-4 h-4 rotate-180" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
