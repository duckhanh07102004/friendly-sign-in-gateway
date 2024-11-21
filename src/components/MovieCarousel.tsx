import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

interface MovieCarouselProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieCarousel({ movies, onSelectMovie }: MovieCarouselProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-6">Popular Movies</h3>
      <Carousel className="w-full">
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/3 lg:basis-1/4">
              <MovieCard movie={movie} onSelect={onSelectMovie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
    </section>
  );
}