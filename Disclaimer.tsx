import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function Disclaimer() {
  return (
    <InfoPageLayout title="Disclaimer">
      <p className="mb-4">
        <em>Last Updated: May 2, 2025</em>
      </p>
      
      <p className="mb-4">
        The information provided by UniverseCalculator ("we," "us," or "our") on our website is for general 
        informational and calculation purposes only. While we strive to maintain accurate and up-to-date 
        information, we make no representations or warranties of any kind, express or implied, about the 
        completeness, accuracy, reliability, suitability, or availability of our calculators or the information 
        provided.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Calculation Accuracy</h2>
      
      <p className="mb-4">
        Our calculators are designed to provide reasonably accurate results based on the information you input. 
        However, they are tools for convenience and should not replace professional advice or judgment. We 
        recommend that you verify any critical calculations through alternative methods or with qualified professionals.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">No Liability</h2>
      
      <p className="mb-4">
        In no event will UniverseCalculator be liable for any loss or damage including without limitation, 
        indirect or consequential loss or damage, or any loss or damage whatsoever arising from the use of our 
        calculators. This includes but is not limited to:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Financial losses resulting from calculations used for investment or business decisions</li>
        <li>Academic consequences resulting from reliance on our calculators for academic work</li>
        <li>Any personal or business decisions made based on the results provided by our calculators</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Exchange Rates and Financial Data</h2>
      
      <p className="mb-4">
        For our Currency Converter and financial calculators, we use data from third-party sources that we believe 
        to be reliable. However, exchange rates and financial data can change rapidly, and we cannot guarantee that 
        the information provided is always current or accurate. For critical financial decisions, we recommend 
        consulting official financial institutions or professional advisors.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">User Responsibility</h2>
      
      <p className="mb-4">
        By using UniverseCalculator, you acknowledge and agree that you are responsible for:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Verifying the accuracy of any calculation results before relying on them</li>
        <li>Using appropriate judgment when applying calculation results to real-world situations</li>
        <li>Seeking professional advice for important financial, academic, or business decisions</li>
      </ul>
      
      <p className="italic text-sm text-gray-600 mt-6">
        This disclaimer is subject to change without notice. By using UniverseCalculator, you acknowledge that you 
        have read, understood, and agree to be bound by this disclaimer.
      </p>
    </InfoPageLayout>
  );
}