import { useState } from "react";
import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send, Loader2, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <InfoPageLayout title="Contact Us">
      <p className="text-lg text-gray-700 mb-6">
        We value your feedback, suggestions, and questions. Our team is here to help you with any inquiries you may have about UniverseCalculator.
      </p>
      
      <div className="grid grid-cols-1 gap-8 mb-10 max-w-2xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-3">We'd Love To Hear From You About:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Calculator feature suggestions</li>
            <li>Bug reports or technical issues</li>
            <li>Feedback on your experience</li>
            <li>Partnership opportunities</li>
            <li>Any questions about our calculators</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4 text-primary">
            <MessageSquare className="h-5 w-5 mr-2" />
            <h2 className="text-xl font-semibold">Send Us a Message</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                placeholder="What is this regarding?" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
              <Textarea 
                id="message" 
                placeholder="Your message here..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[120px] bg-white"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full mt-2" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-600">
        <p>
          We aim to respond to all inquiries within 48 hours. Thank you for using UniverseCalculator and for your interest in connecting with us!
        </p>
      </div>
    </InfoPageLayout>
  );
}