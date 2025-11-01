import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Award } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Modern Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {/* Base Image */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern housing development" 
          className="w-full h-full object-cover"
        />
        
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        
        {/* Animated Accent Pattern */}
        <div 
          className="absolute inset-0 z-5 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.12) 0%, transparent 50%)`,
            animation: 'pulse-slow 4s ease-in-out infinite'
          }} 
        />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl">
          {/* Premium Promotional Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass-premium rounded-full border border-primary/30 animate-fade-in shadow-primary">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-foreground font-bold text-sm tracking-wide">
              ✨ Chương trình ưu đãi đặc biệt 2024 - Giảm đến 15%
            </span>
          </div>
          
          {/* Hero Heading with Dynamic Gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 animate-fade-in leading-[1.1]">
            <span className="text-foreground drop-shadow-lg">Khởi Đầu Hành Phúc</span>
            <br />
            <span className="text-foreground drop-shadow-lg">Từ </span>
            <span className="gradient-text bg-gradient-primary animate-shimmer bg-[length:200%_auto]">
              Tổ Ấm
            </span>
            <span className="text-foreground drop-shadow-lg"> Của Bạn</span>
          </h1>
          
          {/* Compelling Value Proposition */}
          <p className="text-xl sm:text-2xl mb-12 animate-fade-in leading-relaxed font-light max-w-3xl text-foreground/90 drop-shadow-md">
            Nhà ở xã hội chất lượng cao, giá cả phải chăng. Biến mơ ước sở hữu nhà thành hiện thực với nhiều ưu đãi và hỗ trợ vay vốn lên đến{' '}
            <span className="font-bold text-primary drop-shadow-lg">70%</span>.
          </p>

          {/* Premium CTA Section */}
          <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-scale-in">
            <Link to="/register" className="group">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-16 px-12 bg-primary hover:bg-primary-light text-primary-foreground shadow-primary hover:shadow-xl transition-all duration-500 text-lg font-bold hover:scale-105 hover-shine border-2 border-primary-dark/20"
              >
                Đăng ký ngay
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/projects" className="group">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-16 px-12 border-2 border-foreground/30 backdrop-blur-sm bg-background/20 hover:bg-background/40 text-lg font-semibold hover:scale-105 transition-all duration-500 text-foreground shadow-xl hover:shadow-2xl hover:border-primary"
              >
                Xem dự án
              </Button>
            </Link>
          </div>

          {/* Professional Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
            {/* Card 1 - Căn hộ */}
            <div className="group glass-premium rounded-2xl p-6 hover-lift-sm border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary transition-all duration-500">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:animate-float">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground mb-1">1,200+</p>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Căn hộ</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Cư dân */}
            <div className="group glass-premium rounded-2xl p-6 hover-lift-sm border border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-accent transition-all duration-500">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:animate-float">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground mb-1">5,000+</p>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Cư dân</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Hài lòng */}
            <div className="group glass-premium rounded-2xl p-6 hover-lift-sm border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary transition-all duration-500">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:animate-float">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground mb-1">98%</p>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Hài lòng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow opacity-60">
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-foreground/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;