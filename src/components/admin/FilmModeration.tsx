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
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function FilmModeration() {
  const { toast } = useToast();
  const [releaseDate, setReleaseDate] = useState<string>("");

  const { data: films, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("phim")
        .select("*")
        .order("id_phim");

      if (error) throw error;
      return data;
    },
  });

  const handleReleaseDateUpdate = async (filmId: number) => {
    const { error } = await supabase
      .from("phim")
      .update({ ngayphathanh: releaseDate })
      .eq("id_phim", filmId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update release date",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Release date updated successfully",
      });
      setReleaseDate("");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Film Moderation</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Episodes</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {films?.map((film) => (
            <TableRow key={film.id_phim}>
              <TableCell>{film.id_phim}</TableCell>
              <TableCell>{film.tenphim}</TableCell>
              <TableCell>{film.sotap}</TableCell>
              <TableCell>
                {film.ngayphathanh ? 
                  new Date(film.ngayphathanh).toLocaleDateString() : 
                  "Not set"}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Input
                    type="date"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    className="w-40"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReleaseDateUpdate(film.id_phim)}
                  >
                    Set Release
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