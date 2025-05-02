import { useState } from "react";
import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
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
      setMessage("");
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We'll review it soon.",
      });
    }, 1500);
  };

  return (
    <InfoPageLayout title="Feedback">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6 text-primary">
          <MessageSquare className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-semibold">Share Your Thoughts</h2>
        </div>
        
        <p className="mb-6 text-gray-700">
          We value your feedback! Please share your thoughts, suggestions, or report any issues you've 
          encountered while using our calculators. Your input helps us improve UniverseCalculator for everyone.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Feedback</Label>
            <Textarea 
              id="message" 
              placeholder="Share your thoughts, suggestions, or report an issue..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[150px] bg-white"
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full md:w-auto flex items-center justify-center" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Feedback
                </>
              )}
            </Button>
          </div>
        </form>
        
        <div className="mt-10 p-4 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-600">
          <p>
            Your feedback is submitted anonymously unless you provide contact information. We may use your 
            feedback to improve our services but will not share your personal information with third parties.
          </p>
        </div>
      </div>
    </InfoPageLayout>
  );
}