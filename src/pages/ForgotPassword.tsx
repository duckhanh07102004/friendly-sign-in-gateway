import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Check your email",
      description: "If an account exists with this email, you will receive password reset instructions.",
    });
    
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-auth-border"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-medium tracking-tight text-auth-foreground">Reset your password</h1>
          <p className="text-sm text-auth-muted">Enter your email address and we'll send you instructions to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="bg-auth-input border-auth-border"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-auth-foreground hover:bg-black text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending instructions...</span>
              </motion.div>
            ) : (
              <span className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Send instructions
              </span>
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-auth-muted">
          Remember your password?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-auth-foreground hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}