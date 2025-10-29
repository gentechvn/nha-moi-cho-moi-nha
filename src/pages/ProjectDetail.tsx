import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Home,
  Calendar,
  TrendingUp,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Download,
  Share2,
  School,
  ShoppingCart,
  Hospital,
  Trees,
  Dumbbell,
  Car,
} from "lucide-react";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - trong thực tế sẽ fetch từ API
  const project = {
    id: 1,
    title: "Khu đô thị Green City",
    location: "Số 123, Đường Nguyễn Văn Cừ, Phường Gia Thụy, Quận Long Biên, Hà Nội",
    price: "1.2 tỷ",
    pricePerM2: "25 triệu",
    area: "55-75m²",
    units: 450,
    availableUnits: 280,
    floors: 25,
    apartments: "1PN, 2PN, 3PN",
    status: "selling",
    handover: "Quý 2/2025",
    legalStatus: "Đã có sổ đỏ, pháp lý đầy đủ",
    investor: "Công ty Cổ phần Đầu tư Phát triển Nhà",
    constructor: "Công ty TNHH Xây dựng ABC",
    description:
      "Khu đô thị Green City là dự án nhà ở xã hội cao cấp với quy mô 450 căn hộ, tọa lạc tại vị trí đắc địa quận Long Biên. Dự án được thiết kế hiện đại, đầy đủ tiện ích phục vụ nhu cầu sinh hoạt của cư dân.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    amenities: [
      { icon: School, name: "Trường học", description: "Trường mầm non, tiểu học trong khu" },
      { icon: ShoppingCart, name: "Siêu thị", description: "Siêu thị, chợ, cửa hàng tiện lợi" },
      { icon: Hospital, name: "Y tế", description: "Trạm y tế, phòng khám đa khoa" },
      { icon: Trees, name: "Công viên", description: "Công viên cây xanh, khu vui chơi" },
      { icon: Dumbbell, name: "Thể thao", description: "Phòng gym, sân tennis, bể bơi" },
      { icon: Car, name: "Đỗ xe", description: "Hầm đỗ xe rộng rãi, an toàn" },
    ],
    progress: [
      { phase: "Khởi công", date: "Q1/2023", status: "completed" },
      { phase: "Hoàn thành móng", date: "Q2/2023", status: "completed" },
      { phase: "Xây dựng thân", date: "Q3/2023 - Q2/2024", status: "completed" },
      { phase: "Hoàn thiện ngoại thất", date: "Q3/2024", status: "in-progress" },
      { phase: "Hoàn thiện nội thất", date: "Q4/2024 - Q1/2025", status: "upcoming" },
      { phase: "Bàn giao", date: "Q2/2025", status: "upcoming" },
    ],
    floorPlans: [
      {
        type: "1 Phòng ngủ",
        area: "55m²",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
      },
      {
        type: "2 Phòng ngủ",
        area: "68m²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
      },
      {
        type: "3 Phòng ngủ",
        area: "75m²",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
      },
    ],
    paymentPlans: [
      { stage: "Đặt cọc", percent: "5%", amount: "60 triệu", timing: "Khi ký hợp đồng" },
      { stage: "Đợt 1", percent: "30%", amount: "360 triệu", timing: "Hoàn thành móng" },
      { stage: "Đợt 2", percent: "30%", amount: "360 triệu", timing: "Hoàn thành thân" },
      { stage: "Đợt 3", percent: "30%", amount: "360 triệu", timing: "Hoàn thiện" },
      { stage: "Nhận nhà", percent: "5%", amount: "60 triệu", timing: "Khi bàn giao" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-primary">
              Dự án
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block mb-3 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                Đang mở bán
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex items-start space-x-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>{project.location}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-sm">
                    <strong>{project.availableUnits}</strong>/{project.units} căn còn lại
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">Bàn giao: {project.handover}</span>
                </div>
              </div>
            </div>

            <Card className="lg:w-80 p-6 shadow-lg">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Giá từ</p>
                <p className="text-3xl font-bold text-primary">{project.price}</p>
                <p className="text-sm text-muted-foreground">{project.pricePerM2}/m²</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Diện tích:</span>
                  <span className="font-semibold">{project.area}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Loại căn:</span>
                  <span className="font-semibold">{project.apartments}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Link to="/register">
                  <Button className="w-full bg-gradient-primary shadow-primary">
                    Đăng ký tư vấn
                  </Button>
                </Link>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Gọi: 1900 xxxx
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2" size="sm">
                    <Download className="w-4 h-4" />
                    Tải brochure
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" size="sm">
                    <Share2 className="w-4 h-4" />
                    Chia sẻ
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <img
                src={project.images[selectedImage]}
                alt={project.title}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
              {project.images.slice(0, 4).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-all ${
                    selectedImage === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-8">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="amenities">Tiện ích</TabsTrigger>
              <TabsTrigger value="floorplans">Mặt bằng</TabsTrigger>
              <TabsTrigger value="progress">Tiến độ</TabsTrigger>
              <TabsTrigger value="payment">Thanh toán</TabsTrigger>
              <TabsTrigger value="location">Vị trí</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4">Giới thiệu dự án</h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Chủ đầu tư</p>
                        <p className="font-semibold">{project.investor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Tổng thầu</p>
                        <p className="font-semibold">{project.constructor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Quy mô</p>
                        <p className="font-semibold">{project.units} căn hộ, {project.floors} tầng</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Pháp lý</p>
                        <p className="font-semibold text-secondary">{project.legalStatus}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Video */}
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Video giới thiệu</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.video}
                        title="Video giới thiệu dự án"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </Card>
                </div>

                <div>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Thông tin nổi bật</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Vị trí đắc địa</p>
                          <p className="text-sm text-muted-foreground">
                            Gần trung tâm, kết nối thuận tiện
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Hỗ trợ vay 70%</p>
                          <p className="text-sm text-muted-foreground">
                            Lãi suất ưu đãi, thời gian vay dài
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Đầy đủ tiện ích</p>
                          <p className="text-sm text-muted-foreground">
                            Trường học, siêu thị, công viên...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Bàn giao sớm</p>
                          <p className="text-sm text-muted-foreground">
                            Dự kiến quý 2/2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Amenities Tab */}
            <TabsContent value="amenities">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Tiện ích nội khu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{amenity.name}</h3>
                        <p className="text-sm text-muted-foreground">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Floor Plans Tab */}
            <TabsContent value="floorplans">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.floorPlans.map((plan, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img src={plan.image} alt={plan.type} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{plan.type}</h3>
                      <p className="text-sm text-muted-foreground">Diện tích: {plan.area}</p>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        Xem chi tiết
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Tiến độ thi công</h2>
                <div className="space-y-6">
                  {project.progress.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            item.status === "completed"
                              ? "bg-secondary"
                              : item.status === "in-progress"
                              ? "bg-primary"
                              : "bg-muted"
                          }`}
                        />
                        {index < project.progress.length - 1 && (
                          <div className="w-0.5 h-12 bg-muted mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{item.phase}</h3>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            item.status === "completed"
                              ? "bg-secondary/20 text-secondary"
                              : item.status === "in-progress"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.status === "completed"
                            ? "Hoàn thành"
                            : item.status === "in-progress"
                            ? "Đang thực hiện"
                            : "Sắp tới"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Payment Tab */}
            <TabsContent value="payment">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Phương thức thanh toán</h2>
                <div className="space-y-4">
                  {project.paymentPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{plan.stage}</h3>
                        <p className="text-sm text-muted-foreground">{plan.timing}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{plan.percent}</p>
                        <p className="text-sm text-muted-foreground">{plan.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Lưu ý:</strong> Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ với lãi suất
                    ưu đãi. Liên hệ với chúng tôi để được tư vấn chi tiết về các gói vay.
                  </p>
                </div>
              </Card>
            </TabsContent>

            {/* Location Tab */}
            <TabsContent value="location">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Vị trí dự án</h2>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810592427!2d105.8829364!3d21.0369868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece6b6b%3A0x6ff9f2bcc2405e08!2sLong%20Bi%C3%AAn%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location"
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-4">Kết nối giao thông</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">3 phút</p>
                        <p className="text-sm text-muted-foreground">Đến trục đường Nguyễn Văn Cừ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">10 phút</p>
                        <p className="text-sm text-muted-foreground">Đến trung tâm Hoàn Kiếm</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">25 phút</p>
                        <p className="text-sm text-muted-foreground">Đến sân bay Nội Bài</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quan tâm đến dự án này?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-xl">
                Đăng ký tư vấn
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Gọi: 1900 xxxx
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
