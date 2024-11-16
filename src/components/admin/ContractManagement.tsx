import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

export default function ContractManagement() {
  const { toast } = useToast();

  const { data: contracts, isLoading } = useQuery({
    queryKey: ["contracts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contracts")
        .select(`
          *,
          contract_status(status_name)
        `)
        .order("submitted_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleStatusUpdate = async (contractId: number, newStatusId: number) => {
    const { error } = await supabase
      .from("contracts")
      .update({ status_id: newStatusId })
      .eq("id", contractId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update contract status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Contract status updated successfully",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contract Management</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Movie</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts?.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell>
                {new Date(contract.submitted_at).toLocaleDateString()}
              </TableCell>
              <TableCell>{contract.movie_title}</TableCell>
              <TableCell>{contract.company_name}</TableCell>
              <TableCell>
                <Badge>{contract.contract_status.status_name}</Badge>
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusUpdate(contract.id, 2)}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusUpdate(contract.id, 3)}
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}