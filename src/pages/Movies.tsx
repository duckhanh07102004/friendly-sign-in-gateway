import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";

interface Movie {
  id: number;
  title: string;
  year: string;
  rating: string;
  duration: string;
  genre: string;
  imageUrl: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Spider-Man: No Way Home",
    year: "2021",
    rating: "8.2",
    duration: "1 giờ 55 phút",
    genre: "Sci-fi",
    imageUrl: "/spiderman.jpg"
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    year: "2019",
    rating: "8.4",
    duration: "3 giờ 1 phút",
    genre: "Action",
    imageUrl: "/avengers.jpg"
  },
  // Add more movies as needed
];

export default function Movies() {
  const { toast } = useToast();

  const handlePurchase = (movieTitle: string) => {
    toast({
      title: "Purchase Successful",
      description: `You have successfully purchased a ticket for ${movieTitle}`,
    });
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
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </Button>
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
                  <Card className="bg-gray-800 border-gray-700">
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
                          onClick={() => handlePurchase(movie.title)}
                          className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                        >
                          Đặt mua
                        </Button>
                      </div>
                    </motion.div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </section>
      </main>
    </div>
  );
}