import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LineChart } from "lucide-react";

interface CurrencyType {
  country: string;
  currency: string;
  symbol: string;
  value: string;
}

export default function ProfitLossCalculator() {
  const [costPrice, setCostPrice] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<string>("");
  const [profit, setProfit] = useState<number | null>(null);
  const [loss, setLoss] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>({
    country: "India",
    currency: "Indian Rupee",
    symbol: "₹",
    value: "INR"
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Group currencies alphabetically
  const currencies: Record<string, CurrencyType[]> = {
    "A": [
      { country: "Afghanistan", currency: "Afghan Afghani", symbol: "₮", value: "AFA" },
      { country: "Albania", currency: "Albanian Lek", symbol: "L", value: "ALL" },
      { country: "Algeria", currency: "Algerian Dinar", symbol: "د.ج", value: "DZD" },
      { country: "Andorra", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Angola", currency: "Kwanza", symbol: "Kz", value: "AOA" },
    ],
    "B": [
      { country: "Bahamas", currency: "Bahamian Dollar", symbol: "$", value: "BSD" },
      { country: "Bangladesh", currency: "Taka", symbol: "৳", value: "BDT" },
      { country: "Barbados", currency: "Barbadian Dollar", symbol: "$", value: "BBD" },
      { country: "Belgium", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Belarus", currency: "Belarusian Ruble", symbol: "Br", value: "BYN" },
    ],
    "C": [
      { country: "Canada", currency: "Canadian Dollar", symbol: "$", value: "CAD" },
      { country: "China", currency: "Renminbi", symbol: "¥", value: "CNY" },
      { country: "Colombia", currency: "Colombian Peso", symbol: "$", value: "COP" },
      { country: "Costa Rica", currency: "Costa Rican Colón", symbol: "₡", value: "CRC" },
      { country: "Cuba", currency: "Cuban Peso", symbol: "₱", value: "CUP" },
    ],
    "D": [
      { country: "Denmark", currency: "Danish Krone", symbol: "kr", value: "DKK" },
      { country: "Dominican Republic", currency: "Dominican Peso", symbol: "RD$", value: "DOP" },
      { country: "Djibouti", currency: "Djiboutian Franc", symbol: "Fdj", value: "DJF" },
      { country: "Dominica", currency: "East Caribbean Dollar", symbol: "$", value: "XCD" },
    ],
    "E": [
      { country: "Egypt", currency: "Egyptian Pound", symbol: "ج.م", value: "EGP" },
      { country: "El Salvador", currency: "El Salvadoran Colón", symbol: "₡", value: "SVC" },
      { country: "Estonia", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Ethiopia", currency: "Ethiopian Birr", symbol: "Br", value: "ETB" },
    ],
    "F": [
      { country: "Finland", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Fiji", currency: "Fijian Dollar", symbol: "$", value: "FJD" },
      { country: "France", currency: "Euro", symbol: "€", value: "EUR" },
    ],
    "G": [
      { country: "Germany", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Greece", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Ghana", currency: "Ghanaian Cedi", symbol: "GH₵", value: "GHS" },
    ],
    "H": [
      { country: "Honduras", currency: "Honduran Lempira", symbol: "L", value: "HNL" },
      { country: "Haiti", currency: "Haitian Gourde", symbol: "G", value: "HTG" },
    ],
    "I": [
      { country: "India", currency: "Indian Rupee", symbol: "₹", value: "INR" },
      { country: "Indonesia", currency: "Indonesian Rupiah", symbol: "Rp", value: "IDR" },
      { country: "Ireland", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Iceland", currency: "Icelandic Króna", symbol: "kr", value: "ISK" },
    ],
    "J": [
      { country: "Japan", currency: "Yen", symbol: "¥", value: "JPY" },
      { country: "Jordan", currency: "Jordanian Dinar", symbol: "د.ا", value: "JOD" },
      { country: "Jamaica", currency: "Jamaican Dollar", symbol: "$", value: "JMD" },
    ],
    "K": [
      { country: "Kenya", currency: "Kenyan Shilling", symbol: "KSh", value: "KES" },
      { country: "Kuwait", currency: "Kuwaiti Dinar", symbol: "د.ك", value: "KWD" },
      { country: "Kazakhstan", currency: "Kazakhstani Tenge", symbol: "₸", value: "KZT" },
    ],
    "L": [
      { country: "Latvia", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Lebanon", currency: "Lebanese Pound", symbol: "ل.ل", value: "LBP" },
      { country: "Lithuania", currency: "Lithuanian Litas", symbol: "Lt", value: "LTL" },
    ],
    "M": [
      { country: "Mexico", currency: "Mexican Peso", symbol: "$", value: "MXN" },
      { country: "Malaysia", currency: "Ringgit", symbol: "RM", value: "MYR" },
      { country: "Morocco", currency: "Moroccan Dirham", symbol: "د.م", value: "MAD" },
      { country: "Malta", currency: "Euro", symbol: "€", value: "EUR" },
    ],
    "N": [
      { country: "Nepal", currency: "Nepalese Rupee", symbol: "रू", value: "NPR" },
      { country: "Netherlands", currency: "Euro", symbol: "€", value: "EUR" },
      { country: "Norway", currency: "Norwegian Krone", symbol: "kr", value: "NOK" },
    ],
    "O": [
      { country: "Oman", currency: "Omani Rial", symbol: "ر.ع", value: "OMR" },
    ],
    "P": [
      { country: "Pakistan", currency: "Pakistani Rupee", symbol: "₨", value: "PKR" },
      { country: "Philippines", currency: "Philippine Peso", symbol: "₱", value: "PHP" },
      { country: "Poland", currency: "Polish Zloty", symbol: "zł", value: "PLN" },
    ],
    "Q": [
      { country: "Qatar", currency: "Qatari Rial", symbol: "ر.ق", value: "QAR" },
    ],
    "R": [
      { country: "Russia", currency: "Russian Ruble", symbol: "₽", value: "RUB" },
      { country: "Romania", currency: "Romanian Leu", symbol: "lei", value: "RON" },
    ],
    "S": [
      { country: "Saudi Arabia", currency: "Saudi Riyal", symbol: "ر.س", value: "SAR" },
      { country: "Singapore", currency: "Singapore Dollar", symbol: "$", value: "SGD" },
      { country: "South Africa", currency: "South African Rand", symbol: "R", value: "ZAR" },
      { country: "Sweden", currency: "Swedish Krona", symbol: "kr", value: "SEK" },
    ],
    "T": [
      { country: "Turkey", currency: "Turkish Lira", symbol: "₺", value: "TRY" },
      { country: "Thailand", currency: "Thai Baht", symbol: "฿", value: "THB" },
      { country: "Tunisia", currency: "Tunisian Dinar", symbol: "د.ت", value: "TND" },
      { country: "Tanzania", currency: "Tanzanian Shilling", symbol: "TSh", value: "TZS" },
    ],
    "U": [
      { country: "United States", currency: "US Dollar", symbol: "$", value: "USD" },
      { country: "Uganda", currency: "Ugandan Shilling", symbol: "USh", value: "UGX" },
      { country: "Ukraine", currency: "Ukrainian Hryvnia", symbol: "₴", value: "UAH" },
    ],
    "V": [
      { country: "Vietnam", currency: "Vietnamese Dong", symbol: "₫", value: "VND" },
      { country: "Venezuela", currency: "Venezuelan Bolívar", symbol: "Bs", value: "VEF" },
    ],
    "W": [
      { country: "Western Sahara", currency: "Sahrawi Peseta", symbol: "Pts", value: "ESH" },
    ],
    "X": [],
    "Y": [
      { country: "Yemen", currency: "Yemeni Rial", symbol: "﷼", value: "YER" },
    ],
    "Z": [
      { country: "Zimbabwe", currency: "Zimbabwean Dollar", symbol: "$", value: "ZWL" },
    ],
  };

  // Function to calculate profit/loss
  const calculateProfitLoss = () => {
    // Input validation
    if (!costPrice || !sellingPrice) {
      setMessage("Please enter both cost price and selling price.");
      setProfit(null);
      setLoss(null);
      setPercentage(null);
      return;
    }

    const cp = parseFloat(costPrice);
    const sp = parseFloat(sellingPrice);

    // Validate for negative values
    if (cp < 0 || sp < 0) {
      setMessage("Please enter positive values only.");
      setProfit(null);
      setLoss(null);
      setPercentage(null);
      return;
    }

    if (sp > cp) {
      // Profit calculation
      const profitAmount = sp - cp;
      const profitPercentage = (profitAmount / cp) * 100;
      setProfit(profitAmount);
      setLoss(null);
      setPercentage(profitPercentage);
      setMessage("Profit");
    } else if (cp > sp) {
      // Loss calculation
      const lossAmount = cp - sp;
      const lossPercentage = (lossAmount / cp) * 100;
      setLoss(lossAmount);
      setProfit(null);
      setPercentage(lossPercentage);
      setMessage("Loss");
    } else {
      // No profit, no loss
      setProfit(0);
      setLoss(0);
      setPercentage(0);
      setMessage("No Profit, No Loss");
    }
  };

  // Function to reset all fields
  const resetCalculator = () => {
    setCostPrice("");
    setSellingPrice("");
    setProfit(null);
    setLoss(null);
    setPercentage(null);
    setMessage("");
  };

  // Filter currencies based on search term
  const getFilteredCurrencies = () => {
    if (!searchTerm) return currencies;
    
    const filtered: Record<string, CurrencyType[]> = {};
    
    Object.keys(currencies).forEach(letter => {
      const matchingCurrencies = currencies[letter].filter(curr => 
        curr.country.toLowerCase().includes(searchTerm.toLowerCase()) || 
        curr.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curr.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (matchingCurrencies.length > 0) {
        filtered[letter] = matchingCurrencies;
      }
    });
    
    return filtered;
  };

  // Handle currency selection
  const handleCurrencySelect = (currency: CurrencyType) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".currency-dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCurrencies = getFilteredCurrencies();

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <LineChart className="text-purple-500 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Profit and Loss Calculator</h2>
          </div>

          <div className="mb-8">
            {/* Currency Selector */}
            <div className="mb-6 relative currency-dropdown">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Currency</label>
              <button
                type="button"
                className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md py-2 px-3 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedCurrency.country} ({selectedCurrency.currency} - {selectedCurrency.value} {selectedCurrency.symbol})</span>
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md overflow-auto">
                  <div className="sticky top-0 z-10 bg-white p-2 border-b">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="Search countries or currencies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="py-1">
                    {Object.keys(filteredCurrencies).map(letter => {
                      const currenciesInGroup = filteredCurrencies[letter];
                      if (currenciesInGroup.length === 0) return null;
                      
                      return (
                        <div key={letter}>
                          <div className="px-4 py-2 bg-gray-100 font-medium text-gray-900">{letter}</div>
                          {currenciesInGroup.map((currency, idx) => (
                            <button
                              key={`${currency.country}-${idx}`}
                              type="button"
                              className="w-full text-left px-4 py-2 text-sm hover:bg-purple-50 cursor-pointer"
                              onClick={() => handleCurrencySelect(currency)}
                            >
                              {currency.country} ({currency.currency} - {currency.value} {currency.symbol})
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cost Price ({selectedCurrency.symbol})</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                  placeholder={`Cost Price in ${selectedCurrency.symbol}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price ({selectedCurrency.symbol})</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder={`Selling Price in ${selectedCurrency.symbol}`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                onClick={calculateProfitLoss}
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-md py-2 w-full"
              >
                Calculate
              </Button>
              <Button
                onClick={resetCalculator}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md py-2 w-full"
              >
                Reset
              </Button>
            </div>

            {/* Results */}
            {message && (
              <div className={`mt-6 p-4 rounded-md ${message === "Profit" ? "bg-green-50 border border-green-200" : message === "Loss" ? "bg-red-50 border border-red-200" : "bg-blue-50 border border-blue-200"}`}>
                <h3 className="text-lg font-medium mb-2 text-center">{message}</h3>
                
                {profit !== null && (
                  <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <span>Profit Amount:</span>
                    <span className="font-semibold text-green-600">{selectedCurrency.symbol} {profit.toFixed(2)}</span>
                  </div>
                )}
                
                {loss !== null && (
                  <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <span>Loss Amount:</span>
                    <span className="font-semibold text-red-600">{selectedCurrency.symbol} {loss.toFixed(2)}</span>
                  </div>
                )}
                
                {percentage !== null && (
                  <div className="flex justify-between items-center">
                    <span>{message === "Profit" ? "Profit" : "Loss"} Percentage:</span>
                    <span className={`font-semibold ${message === "Profit" ? "text-green-600" : message === "Loss" ? "text-red-600" : "text-blue-600"}`}>
                      {percentage.toFixed(2)}%
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 text-center">
            This calculator helps you determine profit or loss from your transactions.
            <br />
            Enter the cost price and selling price to calculate the results.
          </p>
        </div>
      </div>
    </section>
  );
}
