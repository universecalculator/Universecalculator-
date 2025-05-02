import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

type CalcHistoryItem = {
  expression: string;
  result: string;
  timestamp: Date;
};

export default function BasicCalculator() {
  const [display, setDisplay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [history, setHistory] = useState<CalcHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  // Handle number button clicks
  const handleNumberClick = (num: string) => {
    setDisplay(prev => prev + num);
  };

  // Handle operator button clicks
  const handleOperatorClick = (operator: string) => {
    setDisplay(prev => prev + operator);
  };

  // Handle clear button click
  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  // Handle bracket button click
  const handleBracket = () => {
    const openBrackets = (display.match(/\(/g) || []).length;
    const closeBrackets = (display.match(/\)/g) || []).length;
    
    if (openBrackets > closeBrackets) {
      setDisplay(prev => prev + ")");
    } else {
      setDisplay(prev => prev + "(");
    }
  };

  // Handle decimal point
  const handleDecimal = () => {
    // Check if the last part of the expression already has a decimal point
    const parts = display.split(/[+\-×÷]/);
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes(".")) {
      setDisplay(prev => prev + ".");
    }
  };

  // Handle percentage
  const handlePercentage = () => {
    try {
      const currentValue = parseFloat(display);
      const percentValue = currentValue / 100;
      setDisplay(percentValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Handle delete button (delete last character)
  const handleDelete = () => {
    if (display.length > 0) {
      setDisplay(display.slice(0, -1));
    }
  };
  
  // This is a placeholder to avoid errors
  const handlePlusMinus = () => {
    // This function is no longer used
  };

  // Calculate result
  const calculateResult = () => {
    try {
      // Replace the display symbols with JavaScript operators
      let expression = display.replace(/×/g, "*").replace(/÷/g, "/");
      
      // Evaluate the expression
      let calculatedResult = eval(expression).toString();
      
      // Handle infinity or very large numbers
      if (calculatedResult === "Infinity" || calculatedResult === "-Infinity") {
        setResult("Error: Division by zero");
        return;
      }
      
      // Round to 8 decimal places if it's a decimal number
      if (calculatedResult.includes(".")) {
        const parts = calculatedResult.split(".");
        if (parts[1].length > 8) {
          calculatedResult = parseFloat(calculatedResult).toFixed(8);
        }
      }
      
      setResult(calculatedResult);
      
      // Add to history
      const newHistoryItem: CalcHistoryItem = {
        expression: display,
        result: calculatedResult,
        timestamp: new Date()
      };
      
      // Update history with most recent at the top, keeping only the last 5 items
      setHistory(prev => [newHistoryItem, ...prev].slice(0, 5));
      
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <section className="py-6 md:py-10 bg-[#121212] min-h-screen text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-3">
              <Calculator className="text-blue-300 text-lg" />
            </div>
            <h2 className="text-2xl font-bold text-blue-300">Basic Calculator</h2>
          </div>

          {/* Calculator Display */}
          <div className="bg-[#1c1c1c] rounded-lg p-4 mb-4">
            <div className="min-h-16 flex flex-col items-end justify-end">
              <div className="text-right text-lg text-gray-400 break-all">{display}</div>
              <div className="text-right text-3xl font-semibold break-all">{result}</div>
            </div>
          </div>

          {/* History Toggle Button */}
          <div className="flex justify-center mb-4">
            <Button 
              onClick={() => setShowHistory(!showHistory)}
              className="bg-blue-800 hover:bg-blue-700 text-blue-100 rounded-full"
            >
              {showHistory ? "Hide History" : "Show History"}
            </Button>
          </div>

          {/* Calculation History */}
          {showHistory && (
            <div className="bg-[#1c1c1c] rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">History</h3>
              {history.length === 0 ? (
                <p className="text-gray-500 text-center">No calculation history yet</p>
              ) : (
                <ul className="space-y-2">
                  {history.map((item, index) => (
                    <li key={index} className="border-b border-gray-800 pb-2">
                      <div className="text-sm text-gray-400">{item.expression}</div>
                      <div className="text-lg">{item.result}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Calculator Buttons */}
          <div className="grid grid-cols-4 gap-3">
            {/* First Row */}
            <Button
              onClick={handleClear}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-blue-300 rounded-full aspect-square text-lg font-bold"
            >
              AC
            </Button>
            <Button
              onClick={handleBracket}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-blue-300 rounded-full aspect-square text-lg"
            >
              ( )
            </Button>
            <Button
              onClick={handleDelete}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-red-500 rounded-full aspect-square text-lg font-bold"
            >
              Del
            </Button>
            <Button
              onClick={() => handleOperatorClick(" ÷ ")}
              className="bg-[#212f45] hover:bg-[#213f65] text-blue-300 rounded-full aspect-square text-xl"
            >
              ÷
            </Button>

            {/* Second Row */}
            <Button
              onClick={() => handleNumberClick("7")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              7
            </Button>
            <Button
              onClick={() => handleNumberClick("8")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              8
            </Button>
            <Button
              onClick={() => handleNumberClick("9")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              9
            </Button>
            <Button
              onClick={() => handleOperatorClick(" × ")}
              className="bg-[#212f45] hover:bg-[#213f65] text-blue-300 rounded-full aspect-square text-xl"
            >
              ×
            </Button>

            {/* Third Row */}
            <Button
              onClick={() => handleNumberClick("4")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              4
            </Button>
            <Button
              onClick={() => handleNumberClick("5")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              5
            </Button>
            <Button
              onClick={() => handleNumberClick("6")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              6
            </Button>
            <Button
              onClick={() => handleOperatorClick(" - ")}
              className="bg-[#212f45] hover:bg-[#213f65] text-blue-300 rounded-full aspect-square text-xl"
            >
              -
            </Button>

            {/* Fourth Row */}
            <Button
              onClick={() => handleNumberClick("1")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              1
            </Button>
            <Button
              onClick={() => handleNumberClick("2")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              2
            </Button>
            <Button
              onClick={() => handleNumberClick("3")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              3
            </Button>
            <Button
              onClick={() => handleOperatorClick(" + ")}
              className="bg-[#212f45] hover:bg-[#213f65] text-blue-300 rounded-full aspect-square text-xl"
            >
              +
            </Button>

            {/* Fifth Row */}
            <Button
              onClick={handlePercentage}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              %
            </Button>
            <Button
              onClick={() => handleNumberClick("0")}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              0
            </Button>
            <Button
              onClick={handleDecimal}
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white rounded-full aspect-square text-xl"
            >
              .
            </Button>
            <Button
              onClick={calculateResult}
              className="bg-[#4361ee] hover:bg-[#3a56f0] text-white rounded-full aspect-square text-xl"
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
