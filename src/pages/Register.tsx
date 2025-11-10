import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, ClipboardList } from "lucide-react";

const Register = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Đăng ký tư vấn"
        description="Điền thông tin bên dưới để nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi về các dự án nhà ở xã hội phù hợp với nhu cầu của bạn"
        icon={<ClipboardList className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Thông tin đăng ký</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullname">Họ và tên *</Label>
                      <Input
                        id="fullname"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0901 234 567"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Địa chỉ hiện tại</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Số nhà, đường, quận/huyện, thành phố"
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="project">Dự án quan tâm</Label>
                      <select
                        id="project"
                        className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Chọn dự án</option>
                        <option value="dong-hoi-center">Khu nhà ở xã hội trung tâm thành phố Đồng Hới</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="area">Diện tích quan tâm</Label>
                      <select
                        id="area"
                        className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Chọn diện tích</option>
                        <option value="36-45m2">36,1m² - 45m²</option>
                        <option value="45-55m2">45m² - 55m²</option>
                        <option value="55-65m2">55m² - 65m²</option>
                        <option value="65-74m2">65m² - 74,3m²</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung cần tư vấn</Label>
                    <Textarea
                      id="message"
                      placeholder="Chia sẻ thêm về nhu cầu và mong muốn của bạn..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary shadow-primary" size="lg">
                    Đăng ký ngay
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Bằng việc đăng ký, bạn đồng ý với{" "}
                    <a href="#" className="text-primary hover:underline">
                      điều khoản sử dụng
                    </a>{" "}
                    của chúng tôi
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card shadow-lg">
                <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Hotline</p>
                      <p className="text-sm text-muted-foreground">0982.437.434</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">nhaoxahoidonghoi@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Văn phòng Ban QLDA</p>
                      <p className="text-sm text-muted-foreground">
                        PG08A – Đường Lê Trực – Phường Đồng Hới – Tỉnh Quảng Trị
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Giờ làm việc</p>
                      <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Chủ nhật: 8:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary text-secondary-foreground shadow-lg">
                <h3 className="text-lg font-bold mb-2">Thông tin dự án</h3>
                <p className="text-sm mb-4">
                  <strong>Khu nhà ở xã hội trung tâm thành phố Đồng Hới</strong>
                </p>
                <ul className="text-sm space-y-2">
                  <li>✓ 2 khối chung cư cao 15 tầng</li>
                  <li>✓ Tổng 560 căn hộ</li>
                  <li>✓ Diện tích: 36,1m² - 74,3m²</li>
                  <li>✓ Hệ thống cây xanh & tiện ích đầy đủ</li>
                  <li>✓ Hỗ trợ vay vốn ưu đãi</li>
                  <li>✓ Tư vấn pháp lý miễn phí</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
