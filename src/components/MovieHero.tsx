import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MovieHero() {
  return (
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
  );
}