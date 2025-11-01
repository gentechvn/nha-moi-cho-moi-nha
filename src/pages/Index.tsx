import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/HeroSection";
import VideoIntro from "@/components/home/VideoIntro";
import ProcessSteps from "@/components/home/ProcessSteps";
import Testimonials from "@/components/home/Testimonials";
import ComparisonSection from "@/components/home/ComparisonSection";
import PartnersSection from "@/components/home/PartnersSection";
import FAQPreview from "@/components/home/FAQPreview";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, TrendingUp, Users, ArrowRight, MapPin, Calendar, Trophy } from "lucide-react";

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

      {/* Video Intro Section */}
      <VideoIntro />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">✨ Ưu điểm</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Vì sao chọn <span className="text-primary">Nhà Ở Xã Hội</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những giá trị tốt nhất với chất lượng và dịch vụ hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in border border-border/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16 animate-fade-in">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">🏘️ Dự án</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-2">
                Dự Án <span className="text-primary">Nổi Bật</span>
              </h2>
              <p className="text-muted-foreground text-lg">Khám phá các dự án nhà ở xã hội chất lượng cao</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="hidden sm:flex items-center gap-2">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
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

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full">
            <span className="text-primary-foreground font-semibold text-sm">🎉 Ưu đãi đặc biệt</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Sẵn Sàng Sở Hữu<br />Ngôi Nhà <span className="text-secondary">Mơ Ước</span>?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt dành cho 100 khách hàng đăng ký sớm nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto bg-card hover:bg-card/90 text-foreground shadow-2xl px-10 group">
                Đăng ký tư vấn miễn phí
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10">
                Liên hệ hotline
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { icon: MapPin, text: "50+ Dự án trên toàn quốc" },
              { icon: Calendar, text: "Bàn giao đúng tiến độ" },
              { icon: Trophy, text: "Top 10 nhà phát triển BĐS" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                <item.icon className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm text-primary-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Latest News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16 animate-fade-in">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold text-sm">📰 Tin tức</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-2">
                Tin Tức <span className="text-primary">Mới Nhất</span>
              </h2>
              <p className="text-muted-foreground text-lg">Cập nhật thông tin và chính sách mới nhất</p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="hidden sm:flex items-center gap-2">
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {latestNews.map((news, index) => (
              <div
                key={news.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NewsCard {...news} />
              </div>
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

      {/* FAQ Preview */}
      <FAQPreview />

      <Footer />
    </div>
  );
};

export default Index;
