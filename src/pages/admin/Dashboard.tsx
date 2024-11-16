import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContractManagement from "@/components/admin/ContractManagement";
import FilmModeration from "@/components/admin/FilmModeration";
import { useToast } from "@/components/ui/use-toast";

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
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (!adminProfile) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges",
        variant: "destructive",
      });
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="contracts" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contracts">Contract Management</TabsTrigger>
          <TabsTrigger value="films">Film Moderation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contracts">
          <ContractManagement />
        </TabsContent>
        
        <TabsContent value="films">
          <FilmModeration />
        </TabsContent>
      </Tabs>
    </div>
  );
}