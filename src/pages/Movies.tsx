import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/MovieCard";
import MovieDialog from "@/components/MovieDialog";
import { Movie } from "@/types/movie";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const movies: Movie[] = [
  {
    id: 1,
    title: "Spider-Man: No Way Home",
    year: "2021",
    rating: "8.2",
    duration: "1 giờ 55 phút",
    genre: "Sci-fi",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "Lần đầu tiên trong lịch sử điện ảnh của Người Nhện, danh tính của người anh hùng hàng xóm thân thiện của chúng ta được tiết lộ. Khi yêu cầu Doctor Strange giúp đỡ, những rủi ro càng trở nên nguy hiểm hơn, buộc Peter phải khám phá ra ý nghĩa thực sự của việc trở thành Người Nhện."
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    year: "2019",
    rating: "8.4",
    duration: "3 giờ 1 phút",
    genre: "Action",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Sau các sự kiện tàn khốc của Avengers: Infinity War, vũ trụ đang trong tình trạng đổ nát. Với sự giúp đỡ của các đồng minh còn lại, các Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại sự cân bằng cho vũ trụ."
  },
  {
    id: 3,
    title: "The Matrix Resurrections",
    year: "2021",
    rating: "7.5",
    duration: "2 giờ 28 phút",
    genre: "Sci-fi",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Inception",
    year: "2010",
    rating: "8.8",
    duration: "2 giờ 28 phút",
    genre: "Sci-fi",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "Come back soon!",
      });
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">NEW MOVIE</h1>
            <div className="space-x-6">
              <a href="#new" className="hover:text-yellow-400">Phim mới</a>
              <a href="#categories" className="hover:text-yellow-400">Thể loại</a>
              <a href="#deals" className="hover:text-yellow-400">Hợp đồng</a>
              <a href="#promos" className="hover:text-yellow-400">Ưu đãi</a>
              <a href="#support" className="hover:text-yellow-400">Hỗ trợ</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Sign Out
            </Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <img
              src="/spiderman-hero.jpg"
              alt="Featured Movie"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
              <h2 className="text-5xl font-bold mb-4">Spider man No Way Home</h2>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">8.2</span>
                <span>2021</span>
                <span>1 giờ 55 phút</span>
                <span>Sci-fi</span>
              </div>
              <p className="mb-6 text-gray-200">
                Lần đầu tiên trong lịch sử điện ảnh của Người Nhện, danh tính của người anh
                hùng hàng xóm thân thiện của chúng ta được tiết lộ...
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                  Xem trailer
                </Button>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Đặt mua
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Popular Movies</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {movies.map((movie) => (
                <CarouselItem key={movie.id} className="md:basis-1/3 lg:basis-1/4">
                  <MovieCard movie={movie} onSelect={setSelectedMovie} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </section>
      </main>

      <MovieDialog movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}