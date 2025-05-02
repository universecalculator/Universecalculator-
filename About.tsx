import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function About() {
  return (
    <InfoPageLayout title="About Us">
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <strong>UniverseCalculator</strong>, your one-stop destination for all calculation needs!
      </p>
      
      <p className="mb-4">
        At UniverseCalculator, we believe that powerful calculating tools should be accessible to everyone, everywhere. 
        What started as a simple calculator project has evolved into a comprehensive platform serving students, 
        professionals, businesses, and everyday users across the globe.
      </p>
      
      <p className="mb-4">
        Our mission is simple: to provide accurate, user-friendly calculators that make your academic, business, 
        and everyday calculations effortless and reliable.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">What We Offer</h2>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Basic Calculator</strong>: For quick everyday calculations</li>
        <li><strong>Profit-Loss Calculator</strong>: Perfect for businesses to track financial performance</li>
        <li><strong>Percentage Calculator</strong>: Easily calculate percentages, increases, and decreases</li>
        <li><strong>Currency Converter</strong>: Stay updated with live exchange rates for global transactions</li>
      </ul>
      
      <p className="mb-4">
        Our dedicated team constantly works to improve existing tools and add new calculators to meet the 
        evolving needs of our diverse user base. We prioritize accuracy, simplicity, and accessibility in 
        everything we build.
      </p>
      
      <p className="mb-4">
        Whether you're a student solving math problems, a business owner calculating profits, or a traveler 
        converting currencies, UniverseCalculator is designed with you in mind.
      </p>
      
      <p className="font-medium">
        Thank you for choosing UniverseCalculator. We're excited to be part of your calculation journey!
      </p>
    </InfoPageLayout>
  );
}