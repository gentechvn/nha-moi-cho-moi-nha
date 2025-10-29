import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Modern housing development"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full">
            <span className="text-secondary font-semibold text-sm">✨ Chương trình ưu đãi đặc biệt 2024</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Khởi Đầu Hành Phúc<br />
            Từ <span className="text-secondary">Tổ Ấm</span> Của Bạn
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 animate-fade-in">
            Nhà ở xã hội chất lượng cao, giá cả phải chăng. Biến mơ ước sở hữu nhà thành hiện thực với nhiều ưu đãi và hỗ trợ vay vốn lên đến 70%.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-xl group">
                Đăng ký ngay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Xem dự án
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">1,200+</p>
                <p className="text-sm text-primary-foreground/80">Căn hộ</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">5,000+</p>
                <p className="text-sm text-primary-foreground/80">Cư dân</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">98%</p>
                <p className="text-sm text-primary-foreground/80">Hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
