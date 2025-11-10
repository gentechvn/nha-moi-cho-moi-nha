import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Home,
  MapPin,
  Building2,
  Maximize2,
  Users,
  CheckCircle2,
  Phone,
  FileText,
  Share2,
  ChevronRight,
  Bath,
  Bed,
  Calendar,
  TrendingDown
} from "lucide-react";

const ApartmentDetail = () => {
  const { type } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const apartmentData: Record<string, any> = {
    "1": {
      id: 1,
      name: "Căn hộ 1 phòng ngủ",
      area: "35m²",
      units: 28,
      bedrooms: 1,
      bathrooms: 1,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "577,5 - 612,5 triệu",
      layout: "1 phòng ngủ, 1 phòng khách, 1 bếp, 1 WC",
      description: "Căn hộ nhỏ gọn, thiết kế thông minh tối ưu hóa không gian sống. Phù hợp cho cá nhân độc thân hoặc gia đình trẻ mới bắt đầu. Bố cục thông thoáng, đầy đủ công năng sinh hoạt cơ bản.",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
      ],
      floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80&w=800"
    },
    "2": {
      id: 2,
      name: "Căn hộ 2 phòng ngủ",
      area: "59-60m²",
      units: 252,
      bedrooms: 2,
      bathrooms: 2,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "973,5 triệu - 1,05 tỷ",
      layout: "2 phòng ngủ, 1 phòng khách, 1 bếp, 2 WC",
      description: "Lựa chọn phổ biến và được ưa chuộng nhất tại dự án. Không gian sống rộng rãi, thoải mái cho gia đình nhỏ 3-4 người. Thiết kế 2 phòng ngủ riêng biệt đảm bảo sự riêng tư và tiện nghi.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
      ],
      floorPlan: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
    },
    "3": {
      id: 3,
      name: "Căn hộ 3 phòng ngủ",
      area: "69-73m²",
      units: 280,
      bedrooms: 3,
      bathrooms: 2,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "1,14 - 1,28 tỷ",
      layout: "3 phòng ngủ, 1 phòng khách, 1 bếp, 2 WC",
      description: "Không gian sống rộng rãi và thoải mái nhất, lý tưởng cho gia đình đông thành viên hoặc gia đình nhiều thế hệ. Thiết kế 3 phòng ngủ độc lập, phòng khách rộng tạo không gian sinh hoạt chung ấm cúng.",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=1200"
      ],
      floorPlan: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
    }
  };

  const apartment = apartmentData[type || "1"];

  const amenities = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hoàn thiện toàn bộ",
      description: "Tường sơn, sàn gạch ceramic cao cấp"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Tủ bếp hiện đại",
      description: "Tủ bếp gỗ công nghiệp, bồn rửa inox"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hệ thống điện",
      description: "Điện 3 pha, đầy đủ ổ cắm, công tắc"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hệ thống nước",
      description: "Nước sạch, bồn cầu, vòi sen đầy đủ"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Cửa nhôm kính",
      description: "Cửa chính, cửa sổ nhôm kính cao cấp"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Ban công",
      description: "Ban công riêng, thoáng mát"
    }
  ];

  const paymentStages = [
    {
      stage: "Đợt 1",
      percentage: "20%",
      timing: "Khi ký hợp đồng mua bán",
      amount: type === "1" ? "115 - 123 triệu" : type === "2" ? "195 - 210 triệu" : "228 - 256 triệu"
    },
    {
      stage: "Đợt 2",
      percentage: "30%",
      timing: "Khi hoàn thiện phần thô",
      amount: type === "1" ? "173 - 184 triệu" : type === "2" ? "292 - 315 triệu" : "342 - 384 triệu"
    },
    {
      stage: "Đợt 3",
      percentage: "30%",
      timing: "Khi hoàn thiện nội thất",
      amount: type === "1" ? "173 - 184 triệu" : type === "2" ? "292 - 315 triệu" : "342 - 384 triệu"
    },
    {
      stage: "Đợt 4",
      percentage: "20%",
      timing: "Khi bàn giao nhà",
      amount: type === "1" ? "115 - 123 triệu" : type === "2" ? "195 - 210 triệu" : "228 - 256 triệu"
    }
  ];

  if (!apartment) {
    return <div>Không tìm thấy thông tin căn hộ</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/projects" className="hover:text-primary transition-colors">
              Dự án
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{apartment.name}</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-3">Đang bán</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {apartment.name}
              </h1>
              <div className="flex items-start gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <p>Khu nhà ở xã hội Đồng Hới, Phường Đồng Hới, TP. Đồng Hới, Quảng Bình</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Diện tích</p>
                    <p className="font-bold text-foreground">{apartment.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Bed className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phòng ngủ</p>
                    <p className="font-bold text-foreground">{apartment.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Bath className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phòng tắm</p>
                    <p className="font-bold text-foreground">{apartment.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Home className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Còn lại</p>
                    <p className="font-bold text-foreground">{apartment.units} căn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-primary/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Giá bán</p>
                    <p className="text-3xl font-bold text-primary mb-1">
                      {apartment.totalPrice}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {apartment.price}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link to="/register">
                      <Button size="lg" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Đăng ký tư vấn
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Tải bảng giá
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Chia sẻ
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingDown className="w-5 h-5 text-primary mt-0.5" />
                      <p>
                        <strong className="text-foreground">Giá rẻ hơn 3-4 lần</strong> so với nhà ở thương mại cùng khu vực
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={apartment.images[selectedImage]}
                alt={`${apartment.name} - Hình ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {apartment.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                  selectedImage === index
                    ? "ring-4 ring-primary shadow-lg scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="amenities">Tiện ích</TabsTrigger>
              <TabsTrigger value="floorplan">Mặt bằng</TabsTrigger>
              <TabsTrigger value="payment">Thanh toán</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Mô tả chi tiết
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {apartment.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Thông tin dự án
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Chủ đầu tư</span>
                          <span className="text-foreground font-medium text-right text-sm">
                            Liên danh Phúc Thành - Toàn Cầu
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Quy mô</span>
                          <span className="text-foreground font-medium">560 căn hộ</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Số tầng</span>
                          <span className="text-foreground font-medium">2 tòa 15 tầng</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Bàn giao</span>
                          <span className="text-foreground font-medium">Quý 2/2026</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" />
                        Thông tin căn hộ
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Diện tích</span>
                          <span className="text-foreground font-medium">{apartment.area}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Thiết kế</span>
                          <span className="text-foreground font-medium text-right text-sm">{apartment.layout}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Hướng</span>
                          <span className="text-foreground font-medium">Đa hướng</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Pháp lý</span>
                          <span className="text-foreground font-medium">Sổ hồng vĩnh viễn</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="amenities">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Hoàn thiện & Tiện ích căn hộ
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {amenity.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            {amenity.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Lưu ý:</strong> Căn hộ được bàn giao hoàn thiện cơ bản, không bao gồm nội thất trang trí (giường, tủ, bàn ghế, điều hòa, tủ lạnh, máy giặt, tivi...). Chủ nhân có thể tự trang trí theo sở thích.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="floorplan">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Mặt bằng căn hộ
                  </h2>
                  <div className="relative h-[600px] rounded-xl overflow-hidden border border-border">
                    <img
                      src={apartment.floorPlan}
                      alt="Mặt bằng căn hộ"
                      className="w-full h-full object-contain bg-muted"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center italic">
                    Mặt bằng thiết kế {apartment.name} - Diện tích {apartment.area}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Phương thức thanh toán
                  </h2>
                  <div className="space-y-4 mb-8">
                    {paymentStages.map((stage, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border"
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold text-primary">
                            {stage.percentage}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1">
                            {stage.stage} - {stage.timing}
                          </h3>
                          <p className="text-lg font-bold text-primary">
                            {stage.amount}
                          </p>
                        </div>
                        <Calendar className="w-6 h-6 text-muted-foreground" />
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Chính sách ưu đãi
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ với lãi suất ưu đãi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Miễn phí phí bảo trì và quản lý 2 năm đầu tiên</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Hỗ trợ làm thủ tục pháp lý, sổ hồng nhanh chóng</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quan tâm đến căn hộ này?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Đăng ký ngay để được tư vấn chi tiết và hỗ trợ thủ tục mua nhà
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Đăng ký tư vấn
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

export default ApartmentDetail;
