import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import Home from "@/pages/Home";
import GlobalShopping from "@/pages/GlobalShopping";
import ProfitLossCalculator from "@/pages/ProfitLossCalculator";
import BasicCalculator from "@/pages/BasicCalculator";
import CurrencyConverter from "@/pages/CurrencyConverter";
import PercentageCalculator from "@/pages/PercentageCalculator";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import Contact from "@/pages/Contact";
import Feedback from "@/pages/Feedback";

function MainContent() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add event listener for tab changes from calculator cards
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeTab', handleTabChange as EventListener);
    return () => {
      window.removeEventListener('changeTab', handleTabChange as EventListener);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-1 overflow-x-auto" role="tablist">
            <li>
              <button 
                onClick={() => setActiveTab("calculator")}
                className={`px-4 py-3 text-sm font-medium focus:outline-none whitespace-nowrap ${activeTab === "calculator" ? "tab-active" : "tab-inactive"}`}
                role="tab"
                aria-selected={activeTab === "calculator"}
              >
                Calculator Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("shopping")}
                className={`px-4 py-3 text-sm font-medium focus:outline-none whitespace-nowrap ${activeTab === "shopping" ? "tab-active" : "tab-inactive"}`}
                role="tab"
                aria-selected={activeTab === "shopping"}
              >
                Global Shopping
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <main className="flex-grow">
        {activeTab === "calculator" && <Home />}
        {activeTab === "profit-loss" && <ProfitLossCalculator />}
        {activeTab === "basic-calc" && <BasicCalculator />}
        {activeTab === "currency-converter" && <CurrencyConverter />}
        {activeTab === "percentage-calc" && <PercentageCalculator />}
        {activeTab === "shopping" && <GlobalShopping />}
      </main>
      
      <Footer />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  
  // Check if the current route is a special page
  const isSpecialPage = [
    "/about", "/privacy", "/terms", "/disclaimer", "/contact", "/feedback"
  ].includes(location);

  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/contact" component={Contact} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/" component={MainContent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
