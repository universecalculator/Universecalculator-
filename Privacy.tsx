import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function Privacy() {
  return (
    <InfoPageLayout title="Privacy Policy">
      <p className="mb-4">
        <em>Last Updated: May 2, 2025</em>
      </p>
      
      <p className="mb-4">
        At UniverseCalculator, we respect your privacy and are committed to protecting it. This Privacy Policy 
        explains our practices regarding your information when you use our calculator services.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Information We Do Not Collect</h2>
      
      <p className="mb-4">
        UniverseCalculator is designed with privacy in mind. We do not collect, store, or process any personal 
        data from our users. All calculations are performed locally in your browser, and no information is 
        transmitted to our servers.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Cookies and Tracking</h2>
      
      <p className="mb-4">
        We do not use cookies or any other tracking technologies to monitor your activity. Your usage of our 
        calculators remains private and is not tracked in any way.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Third-Party Links</h2>
      
      <p className="mb-4">
        Our website may contain links to third-party websites, including affiliate links. Please note that these 
        external sites are not operated by us and may have their own privacy policies. We have no responsibility 
        or liability for the content and activities of these linked sites. We encourage you to review the privacy 
        policies of any third-party sites you visit.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Changes to This Privacy Policy</h2>
      
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
        Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
        Policy periodically for any changes.
      </p>
      
      <h2 className="text-xl font-bold mt-6 mb-3">Contact Us</h2>
      
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us via the information provided on our 
        Contact page.
      </p>
      
      <p className="italic text-sm text-gray-600 mt-6">
        By using UniverseCalculator, you agree to the terms outlined in this Privacy Policy.
      </p>
    </InfoPageLayout>
  );
}