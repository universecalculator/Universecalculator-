import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function Terms() {
  return (
    <InfoPageLayout title="Terms and Conditions">
      <p className="mb-4">
        <em>Last Updated: May 2, 2025</em>
      </p>
      
      <p className="mb-4">
        Please read these Terms and Conditions ("Terms") carefully before using the UniverseCalculator website. 
        Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Acceptance of Terms</h2>
      
      <p className="mb-4">
        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of 
        the terms, you may not access the service.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Use of the Service</h2>
      
      <p className="mb-4">
        UniverseCalculator provides various calculation tools for personal and business use. You agree to use our 
        services only for lawful purposes and in accordance with these Terms.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Acceptable Use</h2>
      
      <p className="mb-4">
        You agree not to misuse our services or help anyone else do so. For example, you must not:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our service</li>
        <li>Use our service for any purpose that is illegal or prohibited by these Terms</li>
        <li>Collect or harvest any personally identifiable information from the service</li>
        <li>Use the service for sending unsolicited communications, promotions, or advertisements</li>
        <li>Attempt to decompile or reverse engineer any software contained on the website</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Affiliate Links</h2>
      
      <p className="mb-4">
        Our website may contain affiliate links to products or services. We may receive a commission for purchases 
        made through these links at no additional cost to you. This helps support our service and enables us to 
        continue providing our calculators free of charge.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">No Warranties</h2>
      
      <p className="mb-4">
        UniverseCalculator provides its services on an "as is" and "as available" basis. While we strive for 
        accuracy, we make no guarantees or warranties of any kind, express or implied, about the completeness, 
        accuracy, reliability, suitability, or availability of our calculators or the information provided.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h2>
      
      <p className="mb-4">
        In no event will UniverseCalculator, its owners, employees, or affiliates be liable for any loss or 
        damage including without limitation, indirect or consequential loss or damage, or any loss or damage 
        whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our service.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Changes to Terms</h2>
      
      <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will 
        provide notice of any changes by updating the "Last Updated" date. By continuing to access or use our 
        service after those revisions become effective, you agree to be bound by the revised terms.
      </p>
      
      <p className="italic text-sm text-gray-600 mt-6">
        By using UniverseCalculator, you acknowledge that you have read these Terms and agree to be bound by them.
      </p>
    </InfoPageLayout>
  );
}