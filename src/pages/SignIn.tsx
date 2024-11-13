import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "You have successfully signed in.",
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
          <h1 className="text-2xl font-medium tracking-tight text-auth-foreground">Welcome back</h1>
          <p className="text-sm text-auth-muted">Sign in to your account</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full bg-white hover:bg-gray-50 text-auth-foreground border-auth-border"
            disabled={isLoading}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-auth-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-auth-muted">Or continue with</span>
            </div>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-auth-muted hover:text-auth-foreground transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="bg-auth-input border-auth-border pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-auth-muted hover:text-auth-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
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
                  <span>Signing in...</span>
                </motion.div>
              ) : (
                <span className="flex items-center justify-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign in
                </span>
              )}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-auth-muted">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="font-medium text-auth-foreground hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}