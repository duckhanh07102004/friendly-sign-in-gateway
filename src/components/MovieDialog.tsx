import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";
import { useNavigate } from "react-router-dom";

interface MovieDialogProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieDialog({ movie, onClose }: MovieDialogProps) {
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (movie) {
      navigate(`/contract/${encodeURIComponent(movie.title)}`);
      onClose();
    }
  };

  return (
    <Dialog open={!!movie} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{movie?.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <img
            src={movie?.imageUrl}
            alt={movie?.title}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="flex items-center space-x-4 text-sm">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">{movie?.rating}</span>
            <span>{movie?.year}</span>
            <span>{movie?.duration}</span>
            <span>{movie?.genre}</span>
          </div>
          <p className="text-gray-300">{movie?.description}</p>
          <Button 
            onClick={handlePurchase}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Đặt mua
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}