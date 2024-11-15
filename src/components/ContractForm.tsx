import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface ContractFormData {
  // Bên A
  tenCongTyA: string;
  diaChiA: string;
  nguoiDaiDienA: string;
  chucVuA: string;
  soDienThoaiA: string;
  emailA: string;
  // Bên B
  tenCongTyB: string;
  diaChiB: string;
  nguoiDaiDienB: string;
  chucVuB: string;
  soDienThoaiB: string;
  emailB: string;
  // Nội dung hợp đồng
  tenPhim: string;
  hinhThucPhatHanh: string;
  thoiGianPhatHanh: string;
  phiDichVu: number;
  phuongThucThanhToan: string;
}

export default function ContractForm({ movieTitle }: { movieTitle: string }) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<ContractFormData>({
    defaultValues: {
      tenPhim: movieTitle,
      tenCongTyB: "NEW MOVIE Cinema",
      diaChiB: "123 Nguyễn Huệ, Quận 1, TP.HCM",
      nguoiDaiDienB: "Nguyễn Văn A",
      chucVuB: "Giám đốc",
      soDienThoaiB: "0123456789",
      emailB: "contact@newmovie.com"
    }
  });

  const onSubmit = (data: ContractFormData) => {
    toast({
      title: "Hợp đồng đã được gửi",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất",
    });
    navigate("/movies");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-8">Hợp Đồng Phát Hành Phim</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Bên A */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Thông tin Bên A (Khách hàng thuê phim)</h3>
              <FormField
                control={form.control}
                name="tenCongTyA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên công ty/tổ chức</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-700" />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* ... Similar FormFields for other Bên A fields */}
            </div>

            {/* Bên B - Read only fields */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Thông tin Bên B (Trung tâm phát hành phim)</h3>
              <FormField
                control={form.control}
                name="tenCongTyB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên công ty/tổ chức</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className="bg-gray-700 opacity-50" />
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* ... Similar FormFields for other Bên B fields */}
            </div>

            {/* Contract Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Nội dung hợp đồng</h3>
              <FormField
                control={form.control}
                name="tenPhim"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên phim</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className="bg-gray-700 opacity-50" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hinhThucPhatHanh"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hình thức phát hành</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-700">
                          <SelectValue placeholder="Chọn hình thức phát hành" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="chieuRap">Chiếu rạp</SelectItem>
                        <SelectItem value="truyenHinh">Truyền hình</SelectItem>
                        <SelectItem value="trucTuyen">Trực tuyến</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {/* ... Similar FormFields for other contract details */}
            </div>

            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Gửi Hợp Đồng
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}