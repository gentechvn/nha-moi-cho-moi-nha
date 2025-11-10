import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/HeroSection";
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
import projectAerial from "@/assets/project-aerial.jpg";
import projectTowers from "@/assets/project-towers.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import projectNightView from "@/assets/project-night-view.jpg";
import projectOverview from "@/assets/project-overview.jpg";
import projectLandscape from "@/assets/project-landscape.jpg";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Căn hộ 1 phòng ngủ - Dự án Đồng Hới",
      location: "Phường Đồng Hới, TP. Đồng Hới, Quảng Bình",
      image: projectTowers,
      units: 28,
      price: "577,5 - 612,5 triệu",
      status: "selling" as const,
      area: "35m²",
    },
    {
      id: 2,
      title: "Căn hộ 2 phòng ngủ - Dự án Đồng Hới",
      location: "Phường Đồng Hới, TP. Đồng Hới, Quảng Bình",
      image: projectFacade,
      units: 252,
      price: "973,5 triệu - 1,05 tỷ",
      status: "selling" as const,
      area: "59-60m²",
    },
    {
      id: 3,
      title: "Căn hộ 3 phòng ngủ - Dự án Đồng Hới",
      location: "Phường Đồng Hới, TP. Đồng Hới, Quảng Bình",
      image: projectAerial,
      units: 280,
      price: "1,14 - 1,28 tỷ",
      status: "selling" as const,
      area: "69-73m²",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "Chính sách mới hỗ trợ mua nhà ở xã hội 2024",
      excerpt: "Chính phủ công bố gói hỗ trợ vay vốn ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu...",
      image: projectNightView,
      date: "15/01/2024",
      category: "Chính sách",
    },
    {
      id: 2,
      title: "Dự án Green City đạt tiến độ vượt kế hoạch",
      excerpt: "Sau 18 tháng thi công, dự án Green City đã hoàn thành 85% khối lượng và dự kiến bàn giao vào quý 2/2024...",
      image: projectOverview,
      date: "12/01/2024",
      category: "Dự án",
    },
    {
      id: 3,
      title: "Hướng dẫn thủ tục đăng ký mua nhà ở xã hội",
      excerpt: "Quy trình đăng ký mua nhà ở xã hội đơn giản với 5 bước cơ bản. Người dân có thể đăng ký trực tuyến...",
      image: projectLandscape,
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
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">✨ Ưu điểm vượt trội</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Vì sao chọn <span className="gradient-text">Nhà Ở Xã Hội</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Chúng tôi cam kết mang đến cho bạn những giá trị tốt nhất với chất lượng và dịch vụ hoàn hảo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-border/50 hover:border-primary/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-3">{benefit.title}</h3>
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
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 animate-fade-in gap-4">
            <div>
              <div className="inline-block mb-4 px-5 py-2.5 bg-accent/15 rounded-full border border-accent/20">
                <span className="text-accent font-bold text-sm">🏘️ Dự án nổi bật</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-3">
                Dự Án <span className="gradient-text">Đang Mở Bán</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Khám phá các dự án nhà ở xã hội chất lượng cao với giá tốt nhất</p>
            </div>
            <Link to="/projects" className="hidden sm:block">
              <Button variant="outline" className="gap-2 border-2 hover:border-primary h-12">
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
      <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-3 bg-primary-foreground/20 backdrop-blur-md rounded-full border border-primary-foreground/30 shadow-lg">
            <span className="text-primary-foreground font-bold text-sm">🎉 Ưu đãi đặc biệt - Giảm ngay 15%</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            Sẵn Sàng Sở Hữu<br />Ngôi Nhà <span className="text-secondary drop-shadow-lg">Mơ Ước</span>?
          </h2>
          <p className="text-xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt dành cho <span className="font-bold text-secondary">100 khách hàng</span> đăng ký sớm nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto h-16 bg-card hover:bg-card/90 text-foreground shadow-2xl px-12 group font-bold text-lg">
                Đăng ký tư vấn miễn phí
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 border-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12 font-bold text-lg">
                Liên hệ hotline
              </Button>
            </Link>
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: MapPin, text: "50+ Dự án trên toàn quốc" },
              { icon: Calendar, text: "Bàn giao đúng tiến độ" },
              { icon: Trophy, text: "Top 10 nhà phát triển BĐS" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-primary-foreground/15 backdrop-blur-md rounded-2xl p-5 border border-primary-foreground/20 hover:scale-105 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
                <span className="text-sm text-primary-foreground font-bold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Latest News Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 animate-fade-in gap-4">
            <div>
              <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
                <span className="text-primary font-bold text-sm">📰 Tin tức & cập nhật</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-3">
                Tin Tức <span className="gradient-text">Mới Nhất</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Cập nhật thông tin và chính sách mới nhất về nhà ở xã hội</p>
            </div>
            <Link to="/news" className="hidden sm:block">
              <Button variant="outline" className="gap-2 border-2 hover:border-primary h-12">
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
