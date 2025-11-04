import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, TrendingUp, Shield, Building2, ArrowRight, CheckCircle2, Calendar, Home, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Minh bạch",
      description: "Đảm bảo tính minh bạch trong mọi giao dịch và thông tin",
    },
    {
      icon: Users,
      title: "Con người là trung tâm",
      description: "Đặt lợi ích của khách hàng lên hàng đầu",
    },
    {
      icon: Award,
      title: "Chất lượng",
      description: "Cam kết chất lượng cao trong từng sản phẩm",
    },
    {
      icon: TrendingUp,
      title: "Phát triển bền vững",
      description: "Xây dựng cộng đồng sống xanh, văn minh",
    },
  ];

  const achievements = [
    { number: "10+", label: "Năm kinh nghiệm", icon: Calendar },
    { number: "15", label: "Dự án hoàn thành", icon: Building2 },
    { number: "5,000+", label: "Cư dân hài lòng", icon: Users },
    { number: "98%", label: "Tỷ lệ hài lòng", icon: Trophy },
  ];

  const timeline = [
    { year: "2014", title: "Thành lập công ty", description: "Khởi đầu hành trình phát triển nhà ở xã hội" },
    { year: "2016", title: "Dự án đầu tiên", description: "Hoàn thành 300 căn hộ tại Hà Nội" },
    { year: "2019", title: "Mở rộng quy mô", description: "Triển khai dự án tại TP. HCM và Đà Nẵng" },
    { year: "2024", title: "Đạt mốc 5,000+", description: "Phục vụ hơn 5,000 gia đình trên toàn quốc" },
  ];

  const team = [
    {
      name: "Nguyễn Văn Minh",
      position: "Giám đốc điều hành",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Mỗi ngôi nhà không chỉ là tài sản, mà là nơi gửi gắm ước mơ và tương lai"
    },
    {
      name: "Trần Thị Hương",
      position: "Giám đốc Vận hành",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Chất lượng và sự hài lòng của khách hàng là ưu tiên hàng đầu"
    },
    {
      name: "Phạm Quốc Anh",
      position: "Giám đốc Phát triển",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      quote: "Đổi mới và phát triển bền vững là chìa khóa thành công"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Về chúng tôi"
        description="Đồng hành cùng hàng nghìn gia đình Việt trong hành trình sở hữu tổ ấm, xây dựng cộng đồng sống hiện đại và bền vững"
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
                <span className="text-primary font-bold text-sm">📖 Câu chuyện của chúng tôi</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                Hành Trình <span className="gradient-text">Phát Triển</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Được thành lập từ năm <span className="font-bold text-foreground">2014</span>, chúng tôi tự hào là một trong những đơn vị tiên phong trong lĩnh vực phát triển nhà ở xã hội tại Việt Nam.
                </p>
                <p>
                  Với sứ mệnh mang đến cho mọi người dân cơ hội sở hữu một ngôi nhà với giá cả phải chăng, chúng tôi đã không ngừng nỗ lực và phát triển, hoàn thành <span className="font-bold text-foreground">15 dự án lớn</span> khắp cả nước.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Mỗi dự án không chỉ là công trình xây dựng, mà là cộng đồng sống văn minh với đầy đủ tiện ích hiện đại.</span>
                </p>
              </div>
              <div className="mt-8">
                <Link to="/projects">
                  <Button size="lg" className="gap-2 h-14 px-8">
                    Xem dự án nổi bật
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern housing development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-2xl border-4 border-background">
                <p className="text-5xl font-black mb-1">10+</p>
                <p className="text-sm font-bold">Năm kinh nghiệm</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-5 py-2.5 bg-accent/15 rounded-full border border-accent/20">
                <span className="text-accent font-bold text-sm">🏆 Các mốc quan trọng</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-foreground">
                Hành Trình <span className="gradient-text">Phát Triển</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card border-2 border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl h-full">
                    <div className="absolute -top-4 left-6 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-black text-sm shadow-lg">
                      {item.year}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-black text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">🎯 Định hướng phát triển</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground">
              Sứ Mệnh & <span className="gradient-text">Tầm Nhìn</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group p-8 bg-gradient-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-border/50 hover:border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">Sứ mệnh</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cung cấp nhà ở chất lượng cao với giá cả phải chăng</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Xây dựng cộng đồng sống văn minh, hiện đại</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Góp phần phát triển bền vững của xã hội</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="group p-8 bg-gradient-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-border/50 hover:border-accent/50 relative overflow-hidden" style={{ animationDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">Tầm nhìn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Đơn vị phát triển nhà ở xã hội hàng đầu Việt Nam</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Được khách hàng tin tưởng và lựa chọn</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Đóng góp vào sự phát triển bền vững đất nước</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-accent/15 rounded-full border border-accent/20">
              <span className="text-accent font-bold text-sm">💎 Giá trị cốt lõi</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Nguyên Tắc <span className="gradient-text">Hoạt Động</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Những giá trị mà chúng tôi luôn tuân thủ và phát huy trong mọi hoạt động
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-border/50 hover:border-primary/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6 px-6 py-3 bg-primary-foreground/20 backdrop-blur-md rounded-full border border-primary-foreground/30 shadow-lg">
              <span className="text-primary-foreground font-bold text-sm">📊 Thành tựu đạt được</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-6">
              Những Con Số <span className="text-secondary drop-shadow-lg">Ấn Tượng</span>
            </h2>
            <p className="text-xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed font-medium">
              Minh chứng cho sự <span className="font-bold text-secondary">nỗ lực</span> và <span className="font-bold text-secondary">cam kết</span> của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-foreground/15 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <achievement.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <p className="text-4xl sm:text-5xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </p>
                  <p className="text-sm sm:text-base text-primary-foreground font-bold">
                    {achievement.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="h-16 bg-card hover:bg-card/90 text-foreground shadow-2xl px-12 group font-bold text-lg">
                Khám phá dự án của chúng tôi
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-5 py-2.5 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">👥 Đội ngũ lãnh đạo</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Lãnh Đạo <span className="gradient-text">Tâm Huyết</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Những con người dày dặn kinh nghiệm, dẫn dắt chúng tôi đến thành công
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-black text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-bold mb-4">{member.position}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2 h-14 px-8">
                Liên hệ với chúng tôi
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-card shadow-2xl border-2 border-border/50 text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-primary/15 rounded-full border border-primary/20">
              <span className="text-primary font-bold text-sm">🏡 Cam kết của chúng tôi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6">
              Đồng Hành Cùng <span className="gradient-text">Ước Mơ</span> Của Bạn
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho bạn những giải pháp nhà ở tốt nhất với chất lượng và dịch vụ hoàn hảo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="gap-2 h-14 px-8 w-full sm:w-auto">
                  Đăng ký tư vấn miễn phí
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="gap-2 border-2 h-14 px-8 w-full sm:w-auto">
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
