import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContractManagement from "@/components/admin/ContractManagement";
import FilmModeration from "@/components/admin/FilmModeration";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/sign-in");
      return;
    }

    const { data: adminProfile } = await supabase
      .from('admin_profiles')
      .select()
      .eq('id', session.user.id);

    if (!adminProfile || adminProfile.length === 0) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges",
        variant: "destructive",
      });
      navigate("/");
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      navigate("/sign-in");
    }
  };

  const handleMoviesClick = () => {
    navigate("/movies");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                onClick={handleMoviesClick}
                className="text-white border-white hover:bg-white hover:text-black"
              >
                Movies
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="text-white border-white hover:bg-white hover:text-black"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="contracts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="contracts">Contract Management</TabsTrigger>
            <TabsTrigger value="films">Film Moderation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contracts" className="bg-gray-800 p-6 rounded-lg">
            <ContractManagement />
          </TabsContent>
          
          <TabsContent value="films" className="bg-gray-800 p-6 rounded-lg">
            <FilmModeration />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}