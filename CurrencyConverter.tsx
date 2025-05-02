import { useState, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

interface CurrencyType {
  code: string;
  name: string;
  symbol: string;
}

// Currency data with symbols
const currencies: Record<string, CurrencyType[]> = {
  "A": [
    { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ" },
    { code: "AFN", name: "Afghan Afghani", symbol: "؋" },
    { code: "ALL", name: "Albanian Lek", symbol: "L" },
    { code: "AMD", name: "Armenian Dram", symbol: "֏" },
    { code: "ANG", name: "Netherlands Antillean Guilder", symbol: "ƒ" },
    { code: "AOA", name: "Angolan Kwanza", symbol: "Kz" },
    { code: "ARS", name: "Argentine Peso", symbol: "$" },
    { code: "AUD", name: "Australian Dollar", symbol: "$" },
    { code: "AWG", name: "Aruban Florin", symbol: "ƒ" },
    { code: "AZN", name: "Azerbaijani Manat", symbol: "₼" },
  ],
  "B": [
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM" },
    { code: "BBD", name: "Barbadian Dollar", symbol: "$" },
    { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
    { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
    { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب" },
    { code: "BIF", name: "Burundian Franc", symbol: "FBu" },
    { code: "BMD", name: "Bermudan Dollar", symbol: "$" },
    { code: "BND", name: "Brunei Dollar", symbol: "$" },
    { code: "BOB", name: "Bolivian Boliviano", symbol: "Bs." },
    { code: "BRL", name: "Brazilian Real", symbol: "R$" },
    { code: "BSD", name: "Bahamian Dollar", symbol: "$" },
    { code: "BTN", name: "Bhutanese Ngultrum", symbol: "Nu." },
    { code: "BWP", name: "Botswanan Pula", symbol: "P" },
    { code: "BYN", name: "Belarusian Ruble", symbol: "Br" },
    { code: "BZD", name: "Belize Dollar", symbol: "BZ$" },
  ],
  "C": [
    { code: "CAD", name: "Canadian Dollar", symbol: "$" },
    { code: "CDF", name: "Congolese Franc", symbol: "FC" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
    { code: "CLP", name: "Chilean Peso", symbol: "$" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
    { code: "COP", name: "Colombian Peso", symbol: "$" },
    { code: "CRC", name: "Costa Rican Colón", symbol: "₡" },
    { code: "CUP", name: "Cuban Peso", symbol: "₱" },
    { code: "CVE", name: "Cape Verdean Escudo", symbol: "$" },
    { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
  ],
  "D": [
    { code: "DJF", name: "Djiboutian Franc", symbol: "Fdj" },
    { code: "DKK", name: "Danish Krone", symbol: "kr" },
    { code: "DOP", name: "Dominican Peso", symbol: "RD$" },
    { code: "DZD", name: "Algerian Dinar", symbol: "د.ج" },
  ],
  "E": [
    { code: "EGP", name: "Egyptian Pound", symbol: "E£" },
    { code: "ERN", name: "Eritrean Nakfa", symbol: "Nfk" },
    { code: "ETB", name: "Ethiopian Birr", symbol: "Br" },
    { code: "EUR", name: "Euro", symbol: "€" },
  ],
  "F": [
    { code: "FJD", name: "Fijian Dollar", symbol: "$" },
    { code: "FKP", name: "Falkland Islands Pound", symbol: "£" },
  ],
  "G": [
    { code: "GBP", name: "British Pound Sterling", symbol: "£" },
    { code: "GEL", name: "Georgian Lari", symbol: "₾" },
    { code: "GGP", name: "Guernsey Pound", symbol: "£" },
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
    { code: "GIP", name: "Gibraltar Pound", symbol: "£" },
    { code: "GMD", name: "Gambian Dalasi", symbol: "D" },
    { code: "GNF", name: "Guinean Franc", symbol: "FG" },
    { code: "GTQ", name: "Guatemalan Quetzal", symbol: "Q" },
    { code: "GYD", name: "Guyanaese Dollar", symbol: "$" },
  ],
  "H": [
    { code: "HKD", name: "Hong Kong Dollar", symbol: "$" },
    { code: "HNL", name: "Honduran Lempira", symbol: "L" },
    { code: "HRK", name: "Croatian Kuna", symbol: "kn" },
    { code: "HTG", name: "Haitian Gourde", symbol: "G" },
    { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
  ],
  "I": [
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
    { code: "ILS", name: "Israeli New Shekel", symbol: "₪" },
    { code: "IMP", name: "Manx pound", symbol: "£" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "IQD", name: "Iraqi Dinar", symbol: "ع.د" },
    { code: "IRR", name: "Iranian Rial", symbol: "﷼" },
    { code: "ISK", name: "Icelandic Króna", symbol: "kr" },
  ],
  "J": [
    { code: "JEP", name: "Jersey Pound", symbol: "£" },
    { code: "JMD", name: "Jamaican Dollar", symbol: "J$" },
    { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  ],
  "K": [
    { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
    { code: "KGS", name: "Kyrgystani Som", symbol: "с" },
    { code: "KHR", name: "Cambodian Riel", symbol: "៛" },
    { code: "KMF", name: "Comorian Franc", symbol: "CF" },
    { code: "KPW", name: "North Korean Won", symbol: "₩" },
    { code: "KRW", name: "South Korean Won", symbol: "₩" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
    { code: "KYD", name: "Cayman Islands Dollar", symbol: "$" },
    { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸" },
  ],
  "L": [
    { code: "LAK", name: "Laotian Kip", symbol: "₭" },
    { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل" },
    { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs" },
    { code: "LRD", name: "Liberian Dollar", symbol: "$" },
    { code: "LSL", name: "Lesotho Loti", symbol: "L" },
    { code: "LYD", name: "Libyan Dinar", symbol: "ل.د" },
  ],
  "M": [
    { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
    { code: "MDL", name: "Moldovan Leu", symbol: "L" },
    { code: "MGA", name: "Malagasy Ariary", symbol: "Ar" },
    { code: "MKD", name: "Macedonian Denar", symbol: "ден" },
    { code: "MMK", name: "Myanmar Kyat", symbol: "K" },
    { code: "MNT", name: "Mongolian Tugrik", symbol: "₮" },
    { code: "MOP", name: "Macanese Pataca", symbol: "MOP$" },
    { code: "MRU", name: "Mauritanian Ouguiya", symbol: "UM" },
    { code: "MUR", name: "Mauritian Rupee", symbol: "₨" },
    { code: "MVR", name: "Maldivian Rufiyaa", symbol: ".ރ" },
    { code: "MWK", name: "Malawian Kwacha", symbol: "MK" },
    { code: "MXN", name: "Mexican Peso", symbol: "$" },
    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
    { code: "MZN", name: "Mozambican Metical", symbol: "MT" },
  ],
  "N": [
    { code: "NAD", name: "Namibian Dollar", symbol: "$" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
    { code: "NIO", name: "Nicaraguan Córdoba", symbol: "C$" },
    { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
    { code: "NPR", name: "Nepalese Rupee", symbol: "₨" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "$" },
  ],
  "O": [
    { code: "OMR", name: "Omani Rial", symbol: "ر.ع." },
  ],
  "P": [
    { code: "PAB", name: "Panamanian Balboa", symbol: "B/." },
    { code: "PEN", name: "Peruvian Nuevo Sol", symbol: "S/." },
    { code: "PGK", name: "Papua New Guinean Kina", symbol: "K" },
    { code: "PHP", name: "Philippine Peso", symbol: "₱" },
    { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
    { code: "PLN", name: "Polish Zloty", symbol: "zł" },
    { code: "PYG", name: "Paraguayan Guarani", symbol: "₲" },
  ],
  "Q": [
    { code: "QAR", name: "Qatari Rial", symbol: "ر.ق" },
  ],
  "R": [
    { code: "RON", name: "Romanian Leu", symbol: "lei" },
    { code: "RSD", name: "Serbian Dinar", symbol: "дин." },
    { code: "RUB", name: "Russian Ruble", symbol: "₽" },
    { code: "RWF", name: "Rwandan Franc", symbol: "RF" },
  ],
  "S": [
    { code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
    { code: "SBD", name: "Solomon Islands Dollar", symbol: "$" },
    { code: "SCR", name: "Seychellois Rupee", symbol: "₨" },
    { code: "SDG", name: "Sudanese Pound", symbol: "ج.س." },
    { code: "SEK", name: "Swedish Krona", symbol: "kr" },
    { code: "SGD", name: "Singapore Dollar", symbol: "$" },
    { code: "SHP", name: "Saint Helena Pound", symbol: "£" },
    { code: "SLL", name: "Sierra Leonean Leone", symbol: "Le" },
    { code: "SOS", name: "Somali Shilling", symbol: "S" },
    { code: "SRD", name: "Surinamese Dollar", symbol: "$" },
    { code: "SSP", name: "South Sudanese Pound", symbol: "£" },
    { code: "STN", name: "São Tomé and Príncipe Dobra", symbol: "Db" },
    { code: "SYP", name: "Syrian Pound", symbol: "£" },
    { code: "SZL", name: "Swazi Lilangeni", symbol: "L" },
  ],
  "T": [
    { code: "THB", name: "Thai Baht", symbol: "฿" },
    { code: "TJS", name: "Tajikistani Somoni", symbol: "ЅМ" },
    { code: "TMT", name: "Turkmenistani Manat", symbol: "m" },
    { code: "TND", name: "Tunisian Dinar", symbol: "د.ت" },
    { code: "TOP", name: "Tongan Pa'anga", symbol: "T$" },
    { code: "TRY", name: "Turkish Lira", symbol: "₺" },
    { code: "TTD", name: "Trinidad and Tobago Dollar", symbol: "TT$" },
    { code: "TWD", name: "New Taiwan Dollar", symbol: "NT$" },
    { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
  ],
  "U": [
    { code: "UAH", name: "Ukrainian Hryvnia", symbol: "₴" },
    { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
    { code: "USD", name: "United States Dollar", symbol: "$" },
    { code: "UYU", name: "Uruguayan Peso", symbol: "$U" },
    { code: "UZS", name: "Uzbekistan Som", symbol: "лв" },
  ],
  "V": [
    { code: "VES", name: "Venezuelan Bolívar Soberano", symbol: "Bs.S" },
    { code: "VND", name: "Vietnamese Dong", symbol: "₫" },
    { code: "VUV", name: "Vanuatu Vatu", symbol: "VT" },
  ],
  "W": [
    { code: "WST", name: "Samoan Tala", symbol: "WS$" },
  ],
  "X": [
    { code: "XAF", name: "CFA Franc BEAC", symbol: "FCFA" },
    { code: "XCD", name: "East Caribbean Dollar", symbol: "$" },
    { code: "XOF", name: "CFA Franc BCEAO", symbol: "CFA" },
    { code: "XPF", name: "CFP Franc", symbol: "₣" },
  ],
  "Y": [
    { code: "YER", name: "Yemeni Rial", symbol: "﷼" },
  ],
  "Z": [
    { code: "ZAR", name: "South African Rand", symbol: "R" },
    { code: "ZMW", name: "Zambian Kwacha", symbol: "ZK" },
    { code: "ZWL", name: "Zimbabwean Dollar", symbol: "Z$" },
  ],
};

// Find all available currency codes
const getAllCurrencyCodes = () => {
  let allCurrencies: CurrencyType[] = [];
  Object.keys(currencies).forEach(letter => {
    allCurrencies = [...allCurrencies, ...currencies[letter]];
  });
  return allCurrencies;
};

interface ExchangeRatesResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: Record<string, number>;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastFetchedCurrency, setLastFetchedCurrency] = useState<string | null>(null);
  
  const API_KEY = '79792e2b89e6066b4b161e81';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

  // Fetch exchange rates when the fromCurrency changes
  useEffect(() => {
    if (fromCurrency && fromCurrency !== lastFetchedCurrency) {
      fetchExchangeRates(fromCurrency);
    }
  }, [fromCurrency]);

  // Fetch exchange rates from the API
  const fetchExchangeRates = async (currency: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}${currency}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch exchange rates. Status: ${response.status}`);
      }
      
      const data: ExchangeRatesResponse = await response.json();
      
      if (data.result === 'success') {
        setExchangeRates(data.conversion_rates);
        setLastFetchedCurrency(currency);
      } else {
        throw new Error('Failed to fetch exchange rates');
      }
    } catch (err) {
      console.error('Error fetching exchange rates:', err);
      setError('Failed to fetch exchange rates. Please try again later.');
      setExchangeRates(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount greater than zero.');
      setResult(null);
      return;
    }
    
    if (!fromCurrency || !toCurrency) {
      setError('Please select both currencies.');
      setResult(null);
      return;
    }
    
    if (!exchangeRates) {
      setError('Exchange rates are not available. Please try again.');
      setResult(null);
      return;
    }
    
    // Calculate conversion
    calculateConversion();
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Calculate and format the conversion result
  const calculateConversion = () => {
    if (!exchangeRates || !amount || !toCurrency) return;
    
    const rate = exchangeRates[toCurrency];
    if (!rate) {
      setError(`Exchange rate for ${toCurrency} is not available.`);
      setResult(null);
      return;
    }
    
    const amountValue = parseFloat(amount);
    const convertedAmount = amountValue * rate;
    
    // Find currency details
    const allCurrencies = getAllCurrencyCodes();
    const fromCurrencyDetails = allCurrencies.find(c => c.code === fromCurrency);
    const toCurrencyDetails = allCurrencies.find(c => c.code === toCurrency);
    
    // Format result string
    const formattedResult = `${amountValue.toLocaleString()} ${fromCurrency} ${fromCurrencyDetails?.symbol || ''} = ${convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${toCurrency} ${toCurrencyDetails?.symbol || ''}`;
    
    setResult(formattedResult);
    setError(null);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <ArrowLeftRight className="text-red-500 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Global Currency Converter</h2>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Input */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                id="amount"
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>

            {/* Currency Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-2">
                <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-1">From Currency</label>
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(currencies).map((letter) => (
                      <SelectGroup key={letter}>
                        <SelectLabel>{letter}</SelectLabel>
                        {currencies[letter].map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code} - {currency.name} ({currency.symbol})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <Button 
                  type="button" 
                  onClick={handleSwapCurrencies}
                  className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
                >
                  <ArrowLeftRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-1">To Currency</label>
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(currencies).map((letter) => (
                      <SelectGroup key={letter}>
                        <SelectLabel>{letter}</SelectLabel>
                        {currencies[letter].map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code} - {currency.name} ({currency.symbol})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Convert Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
                disabled={loading}
              >
                {loading ? 'Converting...' : 'Convert'}
              </Button>
            </div>
          </form>

          {/* Result Section */}
          {result && (
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
              <h3 className="text-lg font-medium text-green-800 mb-2">Conversion Result</h3>
              <p className="text-2xl font-bold text-gray-800">{result}</p>
              <p className="text-sm text-gray-500 mt-2">Exchange rates are updated regularly</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
