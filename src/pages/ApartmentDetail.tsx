import { useState, useRef, useEffect } from "react";
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
  CheckCircle2,
  Phone,
  ChevronRight,
  ChevronLeft,
  Bath,
  Bed,
  Calendar,
  TrendingDown,
  Sofa,
  ChefHat,
  Droplet,
} from "lucide-react";
import floorplan25TowerA from "@/assets/z7222428594440_60c5ddd4181bbda03e5aadfef28774da.jpg";
import floorplan615TowerA from "@/assets/z7222428596061_08a783bf5115c6101c4c3a3fd6d01f15.jpg";
import floorplan25TowerB from "@/assets/z7222428602216_ecf529c05dea20841e6f0458bc3dafbe.jpg";
import floorplan615TowerB from "@/assets/z7222428605561_8a9925ebc644acbf65fcbe7752269cfd.jpg";
import projectAerial from "@/assets/project-aerial.jpg";
import projectTowers from "@/assets/project-towers.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import apartmentImage1 from "@/assets/z7222428305123_0f7a210df6d992327340cd127bb40c36.jpg";
import apartmentImage2 from "@/assets/z7222428307228_4956d81079636766e1dd915c39c2060b.jpg";
import apartmentImage3 from "@/assets/z7222428309008_fcb53277a50b8db3f0b0240725feb29b.jpg";
import apartmentImage4 from "@/assets/z7222428314475_f930a7b5bccf55f2643d2025b30fa704.jpg";
import apartmentImage5 from "@/assets/z7222428318658_d229b18a5e4408cf9617dc36f38109e9.jpg";
import apartmentImage6 from "@/assets/z7222428321462_30a8d122aec13d9ccf9f0c8eb36721f8.jpg";
import apartmentImage7 from "@/assets/z7222428325600_11140b031456c1bafa70287518de7d7c.jpg";
import apartmentImage8 from "@/assets/z7222428327882_934719693d3e3d65a5a4fea206856ef6.jpg";
import apartmentImage9 from "@/assets/z7222428333513_1f22a69f6b068921c2d32ec3e8c43200.jpg";

import apartmentInterior1 from "@/assets/apartment-interior-1.jpg";
import apartmentInterior2 from "@/assets/apartment-interior-2.jpg";
import apartmentInterior4 from "@/assets/apartment-interior-4.jpg";
import apartmentInterior8 from "@/assets/apartment-interior-8.jpg";

const ApartmentDetail = () => {
  const { type } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const apartmentData: Record<string, any> = {
    "1": {
      id: 1,
      name: "Căn hộ 1 phòng ngủ",
      area: "35m²",
      units: 28,
      bedrooms: 1,
      livingRooms: 1,
      kitchens: 1,
      toilets: 1,
      bathrooms: 1,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "577,5 - 612,5 triệu",
      layout: "1 phòng ngủ, 1 phòng khách, 1 bếp, 1 WC",
      description:
        "Căn hộ nhỏ gọn, thiết kế thông minh tối ưu hóa không gian sống. Phù hợp cho cá nhân độc thân hoặc gia đình trẻ mới bắt đầu. Bố cục thông thoáng, đầy đủ công năng sinh hoạt cơ bản.",
      images: [
        apartmentImage1,
      ],
      floorPlan: floorplan25TowerA,
    },
    "2": {
      id: 2,
      name: "Căn hộ 2 phòng ngủ",
      area: "59-60m²",
      units: 252,
      bedrooms: 2,
      livingRooms: 1,
      kitchens: 1,
      toilets: 1,
      bathrooms: 1,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "973,5 triệu - 1,05 tỷ",
      layout: "2 phòng ngủ, 1 phòng khách, 1 bếp, 1 WC",
      description:
        "Lựa chọn phổ biến và được ưa chuộng nhất tại dự án. Không gian sống rộng rãi, thoải mái cho gia đình nhỏ 3-4 người. Thiết kế 2 phòng ngủ riêng biệt đảm bảo sự riêng tư và tiện nghi.",
      images: [
        apartmentImage2
      ],
      floorPlan: floorplan615TowerA,
    },
    "3": {
      id: 3,
      name: "Căn hộ 3 phòng ngủ",
      area: "69-73m²",
      units: 280,
      bedrooms: 3,
      livingRooms: 1,
      kitchens: 1,
      toilets: 2,
      bathrooms: 2,
      price: "16,5 - 17,5 triệu/m²",
      totalPrice: "1,14 - 1,28 tỷ",
      layout: "3 phòng ngủ, 1 phòng khách, 1 bếp, 2 WC",
      description:
        "Không gian sống rộng rãi và thoải mái nhất, lý tưởng cho gia đình đông thành viên hoặc gia đình nhiều thế hệ. Thiết kế 3 phòng ngủ độc lập, phòng khách rộng tạo không gian sinh hoạt chung ấm cúng.",
      images: [
        apartmentImage3,
        apartmentImage4,
        apartmentImage5,
        apartmentImage6,
        apartmentImage7,
        apartmentImage8,
        apartmentImage9,
      ],
      floorPlan: floorplan25TowerB,
    },
  };

  const apartment = apartmentData[type || "1"];

  const amenities = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hoàn thiện toàn bộ",
      description: "Tường sơn, sàn gạch ceramic cao cấp",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Tủ bếp hiện đại",
      description: "Tủ bếp gỗ công nghiệp, bồn rửa inox",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hệ thống điện",
      description: "Điện 3 pha, đầy đủ ổ cắm, công tắc",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Hệ thống nước",
      description: "Nước sạch, bồn cầu, vòi sen đầy đủ",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Cửa nhôm kính",
      description: "Cửa chính, cửa sổ nhôm kính cao cấp",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
      name: "Ban công",
      description: "Ban công riêng, thoáng mát",
    },
  ];

  const paymentStages = [
    {
      stage: "Đợt 1",
      percentage: "20%",
      timing: "Khi ký hợp đồng mua bán",
      amount:
        type === "1"
          ? "115 - 123 triệu"
          : type === "2"
            ? "195 - 210 triệu"
            : "228 - 256 triệu",
    },
    {
      stage: "Đợt 2",
      percentage: "30%",
      timing: "Khi hoàn thiện phần thô",
      amount:
        type === "1"
          ? "173 - 184 triệu"
          : type === "2"
            ? "292 - 315 triệu"
            : "342 - 384 triệu",
    },
    {
      stage: "Đợt 3",
      percentage: "30%",
      timing: "Khi hoàn thiện nội thất",
      amount:
        type === "1"
          ? "173 - 184 triệu"
          : type === "2"
            ? "292 - 315 triệu"
            : "342 - 384 triệu",
    },
    {
      stage: "Đợt 4",
      percentage: "20%",
      timing: "Khi bàn giao nhà",
      amount:
        type === "1"
          ? "115 - 123 triệu"
          : type === "2"
            ? "195 - 210 triệu"
            : "228 - 256 triệu",
    },
  ];

  // Check scroll position
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [apartment?.images]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -120,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 120,
        behavior: "smooth",
      });
    }
  };

  if (!apartment) {
    return <div>Không tìm thấy thông tin căn hộ</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/projects"
                className="hover:text-primary transition-colors"
              >
                Dự án
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">
                {apartment.name}
              </span>
            </div>
            <Link to="/projects">
              <Button variant="default" size="sm" className="gap-2">
                <ChevronRight className="w-4 h-4 rotate-180" />
                Quay lại dự án
              </Button>
            </Link>
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
                <p>
                  Khu nhà ở xã hội Đồng Hới, Phường Đồng Hới, TP. Đồng Hới,
                  Quảng Bình
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Diện tích</p>
                    <p className="font-bold text-foreground">
                      {apartment.area}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Bed className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phòng ngủ</p>
                    <p className="font-bold text-foreground">
                      {apartment.bedrooms}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Sofa className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phòng khách</p>
                    <p className="font-bold text-foreground">
                      {apartment.livingRooms}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <ChefHat className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Bếp</p>
                    <p className="font-bold text-foreground">
                      {apartment.kitchens}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Droplet className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">WC</p>
                    <p className="font-bold text-foreground">
                      {apartment.toilets}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-4 border-primary/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Giá bán
                    </p>
                    <p className="text-3xl font-bold text-primary mb-1">
                      {apartment.totalPrice}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {apartment.price}
                    </p>
                  </div>

                  <Link to="/register" className="block">
                    <Button size="lg" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Đăng ký tư vấn
                    </Button>
                  </Link>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingDown className="w-5 h-5 text-primary mt-0.5" />
                      <p>
                        <strong className="text-foreground">
                          Giá rẻ hơn 2 lần
                        </strong>{" "}
                        so với nhà ở thương mại cùng khu vực
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
            <div className="py-5 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={apartment.images[selectedImage]}
                alt={`${apartment.name} - Hình ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-2 scrollbar-hide h-[100px] items-center"
            >
              {apartment.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`mx-3 relative min-w-[80px] min-h-[80px] w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden transition-all ${selectedImage === index
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

            {/* Left Button */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg z-10 transition-all hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
            )}

            {/* Right Button */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg z-10 transition-all hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="amenities">Tiện ích</TabsTrigger>
              <TabsTrigger value="floorplan">Mặt bằng</TabsTrigger>
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
                          <span className="text-muted-foreground">
                            Chủ đầu tư
                          </span>
                          <span className="text-foreground font-medium text-right text-sm">
                            Liên danh Phúc Thành - Toàn Cầu
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Quy mô</span>
                          <span className="text-foreground font-medium">
                            560 căn hộ
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Số tầng</span>
                          <span className="text-foreground font-medium">
                            2 tòa 15 tầng
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Bàn giao
                          </span>
                          <span className="text-foreground font-medium">
                            Quý 2/2026
                          </span>
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
                          <span className="text-muted-foreground">
                            Diện tích
                          </span>
                          <span className="text-foreground font-medium">
                            {apartment.area}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Thiết kế
                          </span>
                          <span className="text-foreground font-medium text-right text-sm">
                            {apartment.layout}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Hướng</span>
                          <span className="text-foreground font-medium">
                            Đa hướng
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Pháp lý</span>
                          <span className="text-foreground font-medium">
                            Sổ hồng vĩnh viễn
                          </span>
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
                      <strong className="text-foreground">Lưu ý:</strong> Căn hộ
                      được bàn giao hoàn thiện cơ bản, không bao gồm nội thất
                      trang trí (giường, tủ, bàn ghế, điều hòa, tủ lạnh, máy
                      giặt, tivi...). Chủ nhân có thể tự trang trí theo sở
                      thích.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="floorplan">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Mặt bằng căn hộ điển hình
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Mặt bằng căn hộ theo từng tòa nhà và tầng. Diện tích và bố
                    cục có thể thay đổi tùy vị trí căn hộ.
                  </p>

                  <div className="space-y-8">
                    {/* Tòa A */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Tòa A
                      </h3>
                      <div className="grid gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Tầng 2-5
                          </h4>
                          <div className="relative h-[500px] rounded-xl overflow-hidden border border-border bg-background">
                            <img
                              src={floorplan25TowerA}
                              alt="Mặt bằng tầng 2-5 tòa A"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Tầng 6-15
                          </h4>
                          <div className="relative h-[500px] rounded-xl overflow-hidden border border-border bg-background">
                            <img
                              src={floorplan615TowerA}
                              alt="Mặt bằng tầng 6-15 tòa A"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tòa B */}
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Tòa B
                      </h3>
                      <div className="grid gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Tầng 2-5
                          </h4>
                          <div className="relative h-[500px] rounded-xl overflow-hidden border border-border bg-background">
                            <img
                              src={floorplan25TowerB}
                              alt="Mặt bằng tầng 2-5 tòa B"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Tầng 6-15
                          </h4>
                          <div className="relative h-[500px] rounded-xl overflow-hidden border border-border bg-background">
                            <img
                              src={floorplan615TowerB}
                              alt="Mặt bằng tầng 6-15 tòa B"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-6 text-center italic">
                    Mặt bằng thiết kế {apartment.name} - Diện tích{" "}
                    {apartment.area}
                  </p>
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
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
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
