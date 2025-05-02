import { useState } from "react";
import { Calculator, X, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<string>("algebra");

  // Handle number and operator input
  const handleInput = (value: string) => {
    setDisplay(prev => prev + value);
  };

  // Handle clear button (AC)
  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  // Handle delete button (×)
  const handleDelete = () => {
    setDisplay(prev => prev.slice(0, -1));
  };

  // Handle equals button (=)
  const handleEquals = () => {
    try {
      // This is a simplified version - in a real calculator, we would need a proper math expression parser
      // For basic operations, we can use eval but it's not recommended for production
      // For scientific functions, we would need a more sophisticated approach
      let expression = display;
      
      // Replace scientific notation
      expression = expression
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/arcsin\(/g, "Math.asin(")
        .replace(/arccos\(/g, "Math.acos(")
        .replace(/arctan\(/g, "Math.atan(")
        .replace(/csc\(/g, "1/Math.sin(")
        .replace(/sec\(/g, "1/Math.cos(")
        .replace(/cot\(/g, "1/Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/\^/g, "**");

      // Calculate the result
      const calculatedResult = eval(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  interface ButtonProps {
    label: string | React.ReactNode;
    value: string;
    dark?: boolean;
    specialBg?: string;
  }

  // Generate button components for each category
  const generateButtons = (category: string): ButtonProps[] => {
    let buttons: ButtonProps[] = [];
    
    switch (category) {
      case "algebra":
        buttons = [
          { label: "[ ]\n[ ]", value: "[]", dark: true },
          { label: "[ ]\n[ ]=", value: "[]=[", dark: true },
          { label: "|[ ]|", value: "abs(", dark: true },
          { label: "[ ]!", value: "factorial(", dark: true },
          { label: "log[ ]", value: "log(", dark: true },
          { label: "=", value: "=", dark: true },
          
          { label: "√[ ]", value: "sqrt(", dark: true },
          { label: "\u221B[ ]", value: "cbrt(", dark: true },  // cube root
          { label: "<", value: "<", dark: true },
          { label: "≤", value: "<=", dark: true },
          { label: ">", value: ">", dark: true },
          { label: "≥", value: ">=", dark: true },
          
          { label: "[ ]^[ ]", value: "^", dark: true },
          { label: "[ ]²", value: "^2", dark: true },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" },
          { label: "÷", value: "/", dark: true },
          
          { label: "f(x)", value: "f(x)", dark: true },
          { label: "i", value: "i", dark: true },
          { label: "4", value: "4" },
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "×", value: "*", dark: true },
          
          { label: "(", value: "(", dark: true },
          { label: ")", value: ")", dark: true },
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "-", value: "-", dark: true },
          
          { label: "x", value: "x", dark: true },
          { label: "y", value: "y", dark: true },
          { label: "0", value: "0" },
          { label: ".", value: "." },
          { label: "%", value: "%" },
          { label: "+", value: "+", dark: true },
        ];
        break;
        
      case "trigonometry":
        buttons = [
          { label: "[ ]\n[ ]", value: "[]", dark: true },
          { label: "sin", value: "sin(", dark: true },
          { label: "cos", value: "cos(", dark: true },
          { label: "tan", value: "tan(", dark: true },
          { label: "arcsin", value: "arcsin(", dark: true },
          { label: "=", value: "=", dark: true },
          
          { label: "√[ ]", value: "sqrt(", dark: true },
          { label: "csc", value: "csc(", dark: true },
          { label: "sec", value: "sec(", dark: true },
          { label: "cot", value: "cot(", dark: true },
          { label: "arctan", value: "arctan(", dark: true },
          { label: "arccos", value: "arccos(", dark: true },
          
          { label: "[ ]^[ ]", value: "^", dark: true },
          { label: "[ ]²", value: "^2", dark: true },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" },
          { label: "÷", value: "/", dark: true },
          
          { label: "π", value: "π", dark: true },
          { label: "[ ]°", value: "°", dark: true },
          { label: "4", value: "4" },
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "×", value: "*", dark: true },
          
          { label: "(", value: "(", dark: true },
          { label: ")", value: ")", dark: true },
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "-", value: "-", dark: true },
          
          { label: "x", value: "x", dark: true },
          { label: "y", value: "y", dark: true },
          { label: "0", value: "0" },
          { label: ".", value: "." },
          { label: "%", value: "%" },
          { label: "+", value: "+", dark: true },
        ];
        break;
        
      case "calculus":
        buttons = [
          { label: "d/d[ ]", value: "d/d", dark: true },
          { label: "C(n,k)", value: "C(", dark: true },
          { label: "P(n,k)", value: "P(", dark: true },
          { label: "ln", value: "ln(", dark: true },
          { label: "log[ ]", value: "log(", dark: true },
          { label: "=", value: "=", dark: true },
          
          { label: "√[ ]", value: "sqrt(", dark: true },
          { label: "∫[ ]", value: "∫(", dark: true },
          { label: "∫[ ][ ]", value: "∫(", dark: true },
          { label: "lim", value: "lim(", dark: true },
          { label: "lim[ ]→+", value: "lim→+", dark: true },
          { label: "lim[ ]→-", value: "lim→-", dark: true },
          
          { label: "Σ", value: "Σ", dark: true },
          { label: "∞", value: "∞", dark: true },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" },
          { label: "÷", value: "/", dark: true },
          
          { label: "f(x)", value: "f(x)", dark: true },
          { label: "e", value: "e", dark: true },
          { label: "4", value: "4" },
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "×", value: "*", dark: true },
          
          { label: "(", value: "(", dark: true },
          { label: ")", value: ")", dark: true },
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "-", value: "-", dark: true },
          
          { label: "x", value: "x", dark: true },
          { label: "y", value: "y", dark: true },
          { label: "0", value: "0" },
          { label: ".", value: "." },
          { label: "%", value: "%" },
          { label: "+", value: "+", dark: true },
        ];
        break;
        
      case "alphabet":
        buttons = [
          { label: "a", value: "a", dark: true },
          { label: "b", value: "b", dark: true },
          { label: "c", value: "c", dark: true },
          { label: "d", value: "d", dark: true },
          { label: "e", value: "e", dark: true },
          { label: "f", value: "f", dark: true },
          
          { label: "g", value: "g", dark: true },
          { label: "h", value: "h", dark: true },
          { label: "i", value: "i", dark: true },
          { label: "j", value: "j", dark: true },
          { label: "k", value: "k", dark: true },
          { label: "l", value: "l", dark: true },
          
          { label: "m", value: "m", dark: true },
          { label: "n", value: "n", dark: true },
          { label: "o", value: "o", dark: true },
          { label: "p", value: "p", dark: true },
          { label: "q", value: "q", dark: true },
          { label: "r", value: "r", dark: true },
          
          { label: "s", value: "s", dark: true },
          { label: "t", value: "t", dark: true },
          { label: "u", value: "u", dark: true },
          { label: "v", value: "v", dark: true },
          { label: "w", value: "w", dark: true },
          { label: "x", value: "x", dark: true },
          
          { label: "y", value: "y", dark: true },
          { label: "z", value: "z", dark: true },
          { label: "α", value: "α", dark: true },
          { label: "β", value: "β", dark: true },
          { label: "γ", value: "γ", dark: true },
          { label: "ε", value: "ε", dark: true },
          
          { label: "θ", value: "θ", dark: true },
          { label: "λ", value: "λ", dark: true },
          { label: "μ", value: "μ", dark: true },
          { label: "π", value: "π", dark: true },
          { label: "ρ", value: "ρ", dark: true },
          { label: "φ", value: "φ", dark: true },
        ];
        break;
    }

    // Add navigation and utility buttons
    buttons.push(
      { label: <ArrowLeft className="h-5 w-5" />, value: "←", specialBg: "bg-gray-700" },
      { label: <ArrowRight className="h-5 w-5" />, value: "→", specialBg: "bg-gray-700" },
      { label: <X className="h-5 w-5" />, value: "del", specialBg: "bg-gray-700" },
      { label: "AC", value: "clear", specialBg: "bg-gray-700" },
      { label: <Play className="h-5 w-5 rotate-90" />, value: "=", specialBg: getSubmitButtonColor() }
    );

    return buttons;
  };

  // Function to determine the submit button color based on the tab
  const getSubmitButtonColor = () => {
    switch (currentTab) {
      case "algebra":
        return "bg-purple-400";
      case "trigonometry":
        return "bg-green-400";
      case "calculus":
        return "bg-pink-400";
      case "alphabet":
        return "bg-pink-400";
      default:
        return "bg-blue-500";
    }
  };

  // Handle button clicks
  const handleButtonClick = (btnValue: string) => {
    switch (btnValue) {
      case "=":
        handleEquals();
        break;
      case "clear":
        handleClear();
        break;
      case "del":
        handleDelete();
        break;
      case "←":
      case "→":
        // Cursor movement would be implemented here
        break;
      default:
        handleInput(btnValue);
        break;
    }
  };

  return (
    <section className="py-6 md:py-10 bg-[#121212] min-h-screen text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-3">
              <Calculator className="text-blue-300 text-lg" />
            </div>
            <h2 className="text-2xl font-bold text-blue-300">Scientific Calculator</h2>
          </div>

          {/* Calculator Display */}
          <div className="bg-[#1c1c1c] rounded-lg p-4 mb-4 border border-gray-700">
            <div className="min-h-[70px] flex flex-col items-end justify-end">
              <div className="text-right text-lg text-gray-400 break-all min-h-[28px]">{display}</div>
              <div className="text-right text-3xl font-semibold break-all min-h-[40px]">{result}</div>
            </div>
          </div>

          {/* Calculator Tab Buttons */}
          <Tabs
            value={currentTab}
            onValueChange={(value) => setCurrentTab(value)}
            className="mb-4"
          >
            <TabsList className="w-full bg-[#1c1c1c] border-b border-gray-700 rounded-none grid grid-cols-4 p-0">
              <TabsTrigger
                value="algebra"
                className={`rounded-none border-b-2 ${currentTab === 'algebra' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'} py-2`}
              >
                Algebra
              </TabsTrigger>
              <TabsTrigger
                value="trigonometry"
                className={`rounded-none border-b-2 ${currentTab === 'trigonometry' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'} py-2`}
              >
                Trigonometry
              </TabsTrigger>
              <TabsTrigger
                value="calculus"
                className={`rounded-none border-b-2 ${currentTab === 'calculus' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'} py-2`}
              >
                Calculus
              </TabsTrigger>
              <TabsTrigger
                value="alphabet"
                className={`rounded-none border-b-2 ${currentTab === 'alphabet' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400'} py-2`}
              >
                Alphabet
              </TabsTrigger>
            </TabsList>

            {/* Calculator Button Grid */}
            <div className="grid grid-cols-6 gap-2 mt-4">
              {generateButtons(currentTab).map((btn, index) => {
                // Determine if it's a special bottom row button
                const isBottomRowButton = index >= generateButtons(currentTab).length - 5;
                const colSpan = btn.value === "=" ? "col-span-2" : "";
                
                return (
                  <Button
                    key={index}
                    onClick={() => handleButtonClick(btn.value)}
                    className={`
                      ${isBottomRowButton ? btn.specialBg : btn.dark ? 'bg-[#2d2d2d]' : 'bg-[#3a3a3a]'} 
                      hover:opacity-80 text-white rounded-full aspect-square flex items-center justify-center
                      ${colSpan} ${isBottomRowButton && btn.value === "=" ? 'aspect-auto' : ''}
                    `}
                  >
                    {typeof btn.label === 'string' ? (
                      <span dangerouslySetInnerHTML={{ __html: btn.label.replace(/\n/g, '<br/>') }} />
                    ) : (
                      btn.label
                    )}
                  </Button>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}