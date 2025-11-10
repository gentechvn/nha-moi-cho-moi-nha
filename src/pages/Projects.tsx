import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, Building2, CheckCircle2, TrendingDown, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import projectAerial from "@/assets/project-aerial.jpg";
import projectTowers from "@/assets/project-towers.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectEntrance from "@/assets/project-entrance.jpg";

const Projects = () => {
  const apartmentTypes = [
    {
      id: 1,
      name: "Căn hộ 1 phòng ngủ",
      area: "35m²",
      units: 28,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "577,5 - 612,5 triệu",
      layout: "1 phòng ngủ, 1 phòng khách, 1 bếp, 1 WC",
      image: projectTowers,
      description: "Căn hộ nhỏ gọn, phù hợp cho cá nhân độc thân hoặc gia đình trẻ"
    },
    {
      id: 2,
      name: "Căn hộ 2 phòng ngủ",
      area: "59-60m²",
      units: 252,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "973,5 triệu - 1,05 tỷ",
      layout: "2 phòng ngủ, 1 phòng khách, 1 bếp, 2 WC",
      image: projectFacade,
      description: "Lựa chọn phổ biến nhất, phù hợp với gia đình nhỏ 3-4 người"
    },
    {
      id: 3,
      name: "Căn hộ 3 phòng ngủ",
      area: "69-73m²",
      units: 280,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "1,14 - 1,28 tỷ",
      layout: "3 phòng ngủ, 1 phòng khách, 1 bếp, 2 WC",
      image: projectAerial,
      description: "Không gian rộng rãi, lý tưởng cho gia đình đông thành viên"
    }
  ];

  const projectAdvantages = [
    {
      icon: <TrendingDown className="w-6 h-6 text-primary" />,
      title: "Giá rẻ hơn 3-4 lần",
      description: "So với nhà ở thương mại cùng khu vực"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Sổ hồng vĩnh viễn",
      description: "Quyền sở hữu lâu dài, trao tay ngay"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Bán lại sau 5 năm",
      description: "Được phép chuyển nhượng theo giá thị trường"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Khu nhà ở xã hội trung tâm thành phố Đồng Hới"
        description="Dự án nhà ở xã hội hiện đại, giá cả phải chăng tại trung tâm thành phố Đồng Hới, tỉnh Quảng Trị"
        icon={<Home className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Project Overview */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 text-sm font-semibold">Đang bán</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dự án nhà ở xã hội Đồng Hới
              </h2>
              <div className="flex items-start gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p className="text-base">Phường Đồng Hới, thành phố Đồng Hới, tỉnh Quảng Trị</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
                  <Building2 className="w-8 h-8 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">560</p>
                  <p className="text-sm text-muted-foreground">Tổng số căn hộ</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
                  <Home className="w-8 h-8 text-accent mb-2" />
                  <p className="text-2xl font-bold text-foreground">2 tòa</p>
                  <p className="text-sm text-muted-foreground">15 tầng cao</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Dự án được xây dựng bởi <strong>Liên danh Công ty Cổ phần Phúc Thành Quảng Bình – Công ty TNHH Thương mại và Xây dựng Toàn Cầu</strong>, 
                hoàn thiện toàn bộ hệ thống cây xanh, cảnh quan và hạ tầng kỹ thuật hiện đại.
              </p>

              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Đăng ký ngay
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={projectEntrance}
                alt="Dự án nhà ở xã hội Đồng Hới"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Advantages */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ưu điểm vượt trội
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sở hữu nhà ở xã hội với những lợi thế tuyệt vời
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectAdvantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Các loại căn hộ
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lựa chọn căn hộ phù hợp với nhu cầu của gia đình bạn
            </p>
          </div>

          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="1">1 Phòng ngủ</TabsTrigger>
              <TabsTrigger value="2">2 Phòng ngủ</TabsTrigger>
              <TabsTrigger value="3">3 Phòng ngủ</TabsTrigger>
            </TabsList>

            {apartmentTypes.map((apartment) => (
              <TabsContent key={apartment.id} value={apartment.id.toString()} className="mt-0">
                <Card className="max-w-5xl mx-auto overflow-hidden border-border/50 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={apartment.image}
                        alt={apartment.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground font-bold">
                          Còn {apartment.units} căn
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        {apartment.name}
                      </h3>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">Diện tích</span>
                          <span className="text-lg font-bold text-foreground">{apartment.area}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">Số lượng căn</span>
                          <span className="text-lg font-bold text-foreground">{apartment.units} căn</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">Giá/m²</span>
                          <span className="text-lg font-bold text-primary">{apartment.price}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">Tổng giá dự kiến</span>
                          <span className="text-lg font-bold text-primary">{apartment.totalPrice}</span>
                        </div>
                        <div className="flex items-start justify-between py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">Thiết kế</span>
                          <span className="text-right text-foreground font-medium">{apartment.layout}</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4 mb-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Hoàn thiện & Tiện ích
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Hoàn thiện toàn bộ nội thất cơ bản</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Lắp đặt tủ bếp hiện đại</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Hệ thống điện nước đầy đủ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Không bao gồm nội thất trang trí</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-muted-foreground mb-6 italic">
                        {apartment.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <Link to={`/apartments/${apartment.id}`}>
                          <Button size="lg" variant="outline" className="w-full">
                            Xem chi tiết
                          </Button>
                        </Link>
                        <Link to="/register">
                          <Button size="lg" className="w-full">
                            Đăng ký ngay
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng sở hữu căn hộ mơ ước?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để được tư vấn chi tiết và hỗ trợ thủ tục mua nhà nhanh chóng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Đăng ký ngay
              </Button>
            </Link>
            <Link to="/buying-guide">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Xem hướng dẫn mua
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
