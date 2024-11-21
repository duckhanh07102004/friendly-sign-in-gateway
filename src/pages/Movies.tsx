import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/types/movie";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import MovieDialog from "@/components/MovieDialog";
import MovieHeader from "@/components/MovieHeader";
import MovieHero from "@/components/MovieHero";
import MovieCarousel from "@/components/MovieCarousel";

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
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/sign-in");
        return;
      }

      // Check admin status
      const { data: adminProfiles, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error && error.code !== 'PGRST116') {
        console.error("Admin check error:", error);
        return;
      }

      if (adminProfiles) {
        setIsAdmin(true);
        toast({
          title: "Admin Access Granted",
          description: "You have administrator privileges",
        });
      }
      
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/sign-in");
    }
  };

  const handleContractsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdmin) {
      navigate('/admin');
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
        toast({
          variant: "destructive",
          title: "Error signing out",
          description: "Please try again",
        });
      } else {
        toast({
          title: "Signed out successfully",
          description: "Come back soon!",
        });
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Sign out error:", error);
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <MovieHeader 
        isAdmin={isAdmin} 
        onSignOut={handleSignOut}
        handleContractsClick={handleContractsClick}
      />
      <main className="max-w-7xl mx-auto">
        <MovieHero />
        <MovieCarousel movies={movies} onSelectMovie={setSelectedMovie} />
      </main>
      <MovieDialog movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}