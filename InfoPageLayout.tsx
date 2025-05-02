import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-64px-56px)] py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2 border-b border-gray-200">{title}</h1>
            </div>
            
            <div className="prose max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}