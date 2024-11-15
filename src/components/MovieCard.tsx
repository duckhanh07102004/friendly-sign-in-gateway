import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Movie } from "@/types/movie";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export default function MovieCard({ movie, onSelect }: MovieCardProps) {
  const navigate = useNavigate();

  const handlePurchase = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/contract/${encodeURIComponent(movie.title)}`);
  };

  return (
    <Card className="bg-gray-800 border-gray-700 cursor-pointer" onClick={() => onSelect(movie)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-[400px] object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h4 className="font-bold mb-2">{movie.title}</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
            <span>•</span>
            <span>{movie.genre}</span>
          </div>
          <Button
            onClick={handlePurchase}
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Đặt mua
          </Button>
        </div>
      </motion.div>
    </Card>
  );
}