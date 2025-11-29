import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import apartmentInterior2 from "@/assets/apartment-interior-2.jpg";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Home,
  MapPin,
  PencilRuler,
  Phone,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Về chúng tôi"
        description="Nhà ở xã hội Trung tâm Đồng Hới – Nơi an cư lý tưởng, kiến tạo tương lai bền vững"
        icon={<Building2 className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
                <span className="text-primary font-bold text-sm">
                  📖 Giới thiệu dự án
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                Tổng Quan <span className="gradient-text">Dự Án</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-foreground">Nhà ở xã hội Trung tâm Đồng Hới</span> – là tổ hợp khu căn hộ chung cư cao cấp và hiện đại bậc nhất tại tỉnh Quảng Trị - có vị trí tại trung tâm phường Đồng Hới, tỉnh Quảng Trị (Thành phố Đồng Hới cũ).
                </p>
                <p>
                  Dự án do Liên danh <span className="font-bold text-foreground">Công ty cổ phần Phúc Thành Quảng Bình</span> và <span className="font-bold text-foreground">Công ty TNHH Thương mại và Xây dựng Toàn Cầu</span> làm chủ đầu tư. Đây là những đơn vị có uy tín top đầu tại tỉnh Quảng Trị với tiềm lực tài chính vững mạnh.
                </p>
                <p>
                  Dự án mang tới cơ hội sở hữu Căn Hộ đẹp, giá cả phù hợp tại trung tâm hành chính mới của tỉnh Quảng Trị với hạ tầng giao thông hiện đại, tiện ích đồng bộ.
                </p>
                <div className="flex items-center gap-3 mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-bold text-foreground">Hỗ trợ tư vấn/làm hồ sơ miễn phí: <a href="tel:0982437434" className="text-primary hover:underline">0982.437.434</a></span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/projects">
                  <Button size="lg" className="gap-2 h-14 px-8">
                    Xem chi tiết dự án
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
                alt="Nhà ở xã hội Trung tâm Đồng Hới"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-2xl border-4 border-background">
                <p className="text-5xl font-black mb-1">Top 1</p>
                <p className="text-sm font-bold">Uy tín & Chất lượng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative animate-fade-in order-2 lg:order-1"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={apartmentInterior2}
                alt="Vị trí dự án"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 bg-accent text-accent-foreground p-6 rounded-2xl shadow-2xl border-4 border-background">
                <MapPin className="w-12 h-12 mb-2" />
                <p className="font-bold">Vị trí đắc địa</p>
              </div>
            </div>

            <div className="animate-fade-in order-1 lg:order-2">
              <div className="inline-block mb-4 px-5 py-2.5 bg-accent/15 rounded-full border border-accent/20">
                <span className="text-accent font-bold text-sm">
                  📍 Vị trí vàng
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                Vị Trí <span className="gradient-text">Tuyệt Vời</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nhà ở xã hội Trung tâm Đồng Hới có vị trí tọa lạc tại <span className="font-bold text-foreground">trung tâm tỉnh lỵ Quảng Trị</span>, thuận lợi về giao thông, gần trường học, gần bệnh viện.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    Dự án nằm đối diện <span className="font-bold text-foreground">Trung tâm Văn Hóa Thể thao thành phố Đồng Hới (cũ)</span>.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    Thuận lợi cho công nhân, viên chức, lao động tại các cơ quan, xí nghiệp và người dân trên địa bàn an cư lạc nghiệp.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">
                🎨 Kiến trúc độc đáo
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Thiết Kế <span className="gradient-text">Hợp Lý</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Sự kết hợp hoàn hảo giữa công năng và thẩm mỹ, mang đến không gian sống lý tưởng.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-card shadow-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <PencilRuler className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">Kiến trúc sư Võ Trọng Nghĩa</h3>
                  <p className="text-sm text-muted-foreground">Đơn vị thiết kế hàng đầu</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nhà thầu lập thiết kế bản vẽ kiến trúc: <span className="font-bold text-foreground">Công ty TNHH Võ Trọng Nghĩa</span>. Đây là đơn vị hành nghề kiến trúc hàng đầu tại Việt Nam có văn phòng tại Thành phố Hồ Chí Minh và Hà Nội.
                </p>
                <p>
                  Võ Trọng Nghĩa là người con của quê hương Quảng Bình, có nhiều sản phẩm kiến trúc nổi tiếng trong nước và trên thế giới, anh đã đạt nhiều giải thưởng lớn nhất và danh giá nhất dành cho những kiến trúc sư nổi bật trên toàn thế giới.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card shadow-xl border-2 border-border/50 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">Quy mô & Tiện ích</h3>
                  <p className="text-sm text-muted-foreground">Không gian sống xanh</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Quy mô quỹ đất xây dựng công trình kiến trúc là <span className="font-bold text-foreground">8.750 m2</span>, trong đó 3.460 m2 dành xây dựng chung cư.
                </p>
                <p>
                  Dự án dành <span className="font-bold text-foreground">5.290 m2 (64,46%)</span> để xây dựng hạ tầng giao thông, cây xanh, bãi đổ xe,... tạo nên không gian thoáng đãng.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 bg-card p-8 rounded-2xl border-2 border-border/50 shadow-lg">
            <h3 className="text-2xl font-black text-foreground mb-6 text-center">Chi tiết Căn hộ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-xl">
                <div className="text-4xl font-black text-primary mb-2">28</div>
                <div className="font-bold text-foreground">Căn hộ 1 PN</div>
                <div className="text-sm text-muted-foreground">Diện tích ~34 m2</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-xl">
                <div className="text-4xl font-black text-primary mb-2">252</div>
                <div className="font-bold text-foreground">Căn hộ 2 PN</div>
                <div className="text-sm text-muted-foreground">Diện tích ~56 m2</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-xl">
                <div className="text-4xl font-black text-primary mb-2">280</div>
                <div className="font-bold text-foreground">Căn hộ 3 PN</div>
                <div className="text-sm text-muted-foreground">Diện tích 68-72.7 m2</div>
              </div>
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              Dự án có ưu điểm vượt trội về thiết kế, các căn hộ có cấu trúc phù hợp, hứng khí trời và có không gian bố trí tiểu cảnh cây xanh phù hợp.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-card shadow-2xl border-2 border-border/50 text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">
                🏡 Cam kết của chúng tôi
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Đồng Hành Cùng <span className="gradient-text">Ước Mơ</span> Của
              Bạn
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những giải pháp nhà ở tốt nhất
              với chất lượng và dịch vụ hoàn hảo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="gap-2 h-14 px-8 w-full sm:w-auto">
                  Đăng ký tư vấn miễn phí
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 h-14 px-8 w-full sm:w-auto"
                >
                  Xem dự án
                  <Home className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
