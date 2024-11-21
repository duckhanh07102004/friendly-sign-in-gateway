import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MovieHeaderProps {
  isAdmin: boolean;
  onSignOut: () => void;
  handleContractsClick: (e: React.MouseEvent) => void;
}

export default function MovieHeader({ isAdmin, onSignOut, handleContractsClick }: MovieHeaderProps) {
  return (
    <header className="max-w-7xl mx-auto mb-8">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">NEW MOVIE</h1>
          <div className="space-x-6">
            <a href="#new" className="hover:text-yellow-400">Phim mới</a>
            <a href="#categories" className="hover:text-yellow-400">Thể loại</a>
            {isAdmin && (
              <Button 
                variant="ghost" 
                onClick={handleContractsClick}
                className="hover:text-yellow-400"
              >
                Hợp đồng
              </Button>
            )}
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
            onClick={onSignOut}
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Sign Out
          </Button>
        </div>
      </nav>
    </header>
  );
}