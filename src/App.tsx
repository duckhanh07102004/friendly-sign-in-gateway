import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Movies from "./pages/Movies";
import ContractForm from "./components/ContractForm";
import AdminDashboard from "./pages/admin/Dashboard";
import React from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route
                path="/sign-in"
                element={
                  !session ? <SignIn /> : <Navigate to="/movies" replace />
                }
              />
              <Route
                path="/sign-up"
                element={
                  !session ? <SignUp /> : <Navigate to="/movies" replace />
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/movies"
                element={
                  session ? <Movies /> : <Navigate to="/sign-in" replace />
                }
              />
              <Route
                path="/contract/:movieTitle"
                element={
                  session ? <ContractForm /> : <Navigate to="/sign-in" replace />
                }
              />
              <Route
                path="/admin"
                element={
                  session ? <AdminDashboard /> : <Navigate to="/sign-in" replace />
                }
              />
              <Route
                path="/"
                element={
                  session ? (
                    <Navigate to="/movies" replace />
                  ) : (
                    <Navigate to="/sign-in" replace />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;