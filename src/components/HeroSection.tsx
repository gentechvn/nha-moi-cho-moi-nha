import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Award } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div className="absolute inset-0 z-5" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(45 100% 60% / 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(48 100% 65% / 0.1) 0%, transparent 50%)',
        animation: 'pulse-slow 4s ease-in-out infinite'
      }} />
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" alt="Modern housing development" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-block mb-6 px-5 py-2.5 bg-red-600 rounded-full border border-white/30 animate-fade-in shadow-xl">
            <span className="text-white font-bold text-sm tracking-wide">✨ Chương trình ưu đãi đặc biệt 2024 - Giảm đến 15%</span>
          </div>
          
          {/* Main Heading with Gradient */}
          <h1 className="font-be-vietnam text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 animate-fade-in leading-tight tracking-tight">
            Khởi Đầu Hành Phúc<br />
            Từ <span className="gradient-text bg-gradient-to-r from-secondary via-primary-light to-secondary animate-shimmer bg-[length:200%_auto]">Tổ Ấm</span> Của Bạn
          </h1>
          
          {/* Enhanced Description */}
          <p className="text-xl sm:text-2xl text-white/95 mb-10 animate-fade-in leading-relaxed font-light max-w-2xl">
            Nhà ở xã hội chất lượng cao, giá cả phải chăng. Biến mơ ước sở hữu nhà thành hiện thực với nhiều ưu đãi và hỗ trợ vay vốn lên đến <span className="font-bold text-secondary">70%</span>.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-scale-in">
            <Link to="/register" className="group">
              <Button variant="premium" size="lg" className="w-full sm:w-auto h-16 px-12 shadow-2xl hover:shadow-primary transition-all duration-500 text-lg hover:scale-110">
                Đăng ký ngay
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/projects" className="group">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-16 px-12 text-lg font-bold hover:scale-110 transition-all duration-500 shadow-2xl">
                Xem dự án
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with Glass Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up">
            <div className="group flex items-center space-x-4 rounded-2xl p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl hover:shadow-primary">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-4xl font-black text-white">1,200+</p>
                <p className="text-sm text-white/90 font-semibold">Căn hộ</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 rounded-2xl p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl hover:shadow-accent">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/90 rounded-xl flex items-center justify-center flex-shrink-0 shadow-accent group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <p className="text-4xl font-black text-white">10,000+</p>
                <p className="text-sm text-white/90 font-semibold">Gia đình</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 rounded-2xl p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-4xl font-black text-white">98%</p>
                <p className="text-sm text-white/90 font-semibold">Hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        
      </div>
    </section>;
};
export default HeroSection;