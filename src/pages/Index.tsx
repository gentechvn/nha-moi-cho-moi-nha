import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Khu đô thị Green City",
      location: "Quận Long Biên, Hà Nội",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      units: 450,
      price: "1.2 tỷ",
      status: "selling" as const,
      area: "55-75m²",
    },
    {
      id: 2,
      title: "Chung cư Sunrise Tower",
      location: "Quận Thanh Xuân, Hà Nội",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      units: 320,
      price: "980 triệu",
      status: "selling" as const,
      area: "50-68m²",
    },
    {
      id: 3,
      title: "Khu nhà ở An Phú",
      location: "Quận Hà Đông, Hà Nội",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      units: 280,
      price: "1.5 tỷ",
      status: "upcoming" as const,
      area: "60-80m²",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "Chính sách mới hỗ trợ mua nhà ở xã hội 2024",
      excerpt: "Chính phủ công bố gói hỗ trợ vay vốn ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu...",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      date: "15/01/2024",
      category: "Chính sách",
    },
    {
      id: 2,
      title: "Dự án Green City đạt tiến độ vượt kế hoạch",
      excerpt: "Sau 18 tháng thi công, dự án Green City đã hoàn thành 85% khối lượng và dự kiến bàn giao vào quý 2/2024...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      date: "12/01/2024",
      category: "Dự án",
    },
    {
      id: 3,
      title: "Hướng dẫn thủ tục đăng ký mua nhà ở xã hội",
      excerpt: "Quy trình đăng ký mua nhà ở xã hội đơn giản với 5 bước cơ bản. Người dân có thể đăng ký trực tuyến...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      date: "10/01/2024",
      category: "Hướng dẫn",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Minh bạch pháp lý",
      description: "100% dự án có đầy đủ giấy tờ pháp lý, đảm bảo quyền lợi người mua",
    },
    {
      icon: TrendingUp,
      title: "Giá cả phải chăng",
      description: "Giá bán thấp hơn thị trường 20-30%, phù hợp túi tiền người dân",
    },
    {
      icon: CheckCircle2,
      title: "Chất lượng cam kết",
      description: "Thi công theo tiêu chuẩn cao, bảo hành trọn đời kết cấu",
    },
    {
      icon: Users,
      title: "Hỗ trợ tận tâm",
      description: "Đội ngũ tư vấn chuyên nghiệp, hỗ trợ 24/7 mọi thắc mắc",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Vì sao chọn <span className="text-primary">Nhà Ở Xã Hội</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những giá trị tốt nhất với chất lượng và dịch vụ hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Dự án nổi bật
              </h2>
              <p className="text-muted-foreground">Khám phá các dự án nhà ở xã hội chất lượng cao</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="hidden sm:flex items-center gap-2">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <Link to="/projects" className="sm:hidden">
            <Button className="w-full" variant="outline">
              Xem tất cả dự án
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sẵn sàng sở hữu ngôi nhà mơ ước?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt dành cho khách hàng đăng ký sớm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-xl">
                Đăng ký tư vấn
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Liên hệ ngay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Tin tức mới nhất
              </h2>
              <p className="text-muted-foreground">Cập nhật thông tin và chính sách mới nhất</p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="hidden sm:flex items-center gap-2">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>

          <Link to="/news" className="sm:hidden">
            <Button className="w-full" variant="outline">
              Xem tất cả tin tức
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
