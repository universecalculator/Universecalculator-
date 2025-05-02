import { useState } from "react";
import { Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PercentageCalculator() {
  const [part, setPart] = useState<string>("");
  const [total, setTotal] = useState<string>("");
  const [percentage, setPercentage] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatePercentage = () => {
    setError(null);

    // Validate inputs are numbers
    const partValue = part ? parseFloat(part) : null;
    const totalValue = total ? parseFloat(total) : null;
    const percentageValue = percentage ? parseFloat(percentage) : null;

    if (partValue !== null && isNaN(partValue) || 
        totalValue !== null && isNaN(totalValue) || 
        percentageValue !== null && isNaN(percentageValue)) {
      setError("Please enter valid numbers");
      return;
    }

    // Case 1: Calculate percentage when part and total are provided
    if (partValue !== null && totalValue !== null && percentageValue === null) {
      if (totalValue === 0) {
        setError("Total cannot be zero when calculating percentage");
        return;
      }
      const calculatedPercentage = (partValue / totalValue) * 100;
      setResult(`Percentage: ${calculatedPercentage.toFixed(2)}%`);
    }
    // Case 2: Calculate total when part and percentage are provided
    else if (partValue !== null && totalValue === null && percentageValue !== null) {
      if (percentageValue === 0) {
        setError("Percentage cannot be zero when calculating total");
        return;
      }
      const calculatedTotal = (partValue * 100) / percentageValue;
      setResult(`Total: ${calculatedTotal.toFixed(2)}`);
    }
    // Case 3: Calculate part when total and percentage are provided
    else if (partValue === null && totalValue !== null && percentageValue !== null) {
      const calculatedPart = (totalValue * percentageValue) / 100;
      setResult(`Part: ${calculatedPart.toFixed(2)}`);
    }
    // Case 4: Invalid combination of inputs
    else {
      setError("Please provide exactly two values to calculate the third.");
    }
  };

  const clearFields = () => {
    setPart("");
    setTotal("");
    setPercentage("");
    setResult(null);
    setError(null);
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <Percent className="text-yellow-600 text-xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Percentage Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="part" className="text-gray-700 font-medium">Part (or Value)</Label>
                <Input 
                  id="part" 
                  type="number" 
                  placeholder="Enter the part value"
                  value={part}
                  onChange={(e) => setPart(e.target.value)}
                  className="mt-1 w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md"
                />
              </div>

              <div>
                <Label htmlFor="total" className="text-gray-700 font-medium">Total (or Whole Value)</Label>
                <Input 
                  id="total" 
                  type="number" 
                  placeholder="Enter the total value"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="mt-1 w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md"
                />
              </div>

              <div>
                <Label htmlFor="percentage" className="text-gray-700 font-medium">Percentage</Label>
                <Input 
                  id="percentage" 
                  type="number" 
                  placeholder="Enter the percentage value"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="mt-1 w-full border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 rounded-md"
                />
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={calculatePercentage}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Calculate
                </Button>
                <Button 
                  onClick={clearFields}
                  variant="destructive"
                  className="px-6 py-2 rounded-md transition-colors"
                >
                  Clear
                </Button>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                  {error}
                </div>
              )}

              {result && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-xl font-semibold text-green-800">{result}</p>
                </div>
              )}

              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How to Use</h3>
                <p className="text-center font-medium text-yellow-600 italic mb-3">
                  <span className="border-2 border-yellow-400 px-4 py-1 rounded-full inline-block bg-yellow-50">
                    (Just enter any two values, and get the third instantly!)
                  </span>
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>To find a percentage: Enter the Part and Total values</li>
                  <li>To find the Total: Enter the Part and Percentage values</li>
                  <li>To find the Part: Enter the Total and Percentage values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}