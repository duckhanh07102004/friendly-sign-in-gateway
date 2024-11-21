import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Database } from "@/integrations/supabase/types";

type Contract = Database['public']['Tables']['contracts']['Row'];

export default function Contracts() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: contracts, isLoading } = useQuery({
    queryKey: ["contracts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contracts')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      return data as Contract[];
    },
    onSuccess: (data) => {
      if (data.length === 0) {
        toast({
          title: "No Contracts",
          description: "There are no contracts submitted yet.",
        });
      }
    },
  });

  if (isLoading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Contract Management</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate('/movies')}
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Back to Movies
          </Button>
        </div>

        {contracts && contracts.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Movie</TableHead>
                <TableHead className="text-white">Company</TableHead>
                <TableHead className="text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="text-white">
                    {new Date(contract.submitted_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-white">{contract.movie_title}</TableCell>
                  <TableCell className="text-white">{contract.company_name}</TableCell>
                  <TableCell className="text-white">
                    {contract.status_id === 1 ? "Pending" : 
                     contract.status_id === 2 ? "Approved" : "Rejected"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No contracts have been submitted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}