import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Award } from "lucide-react";
import heroBackground from "@/assets/project-entrance.jpg";
const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Hero Background with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Main Image */}
        <img
          src={heroBackground}
          alt="Dự án nhà ở xã hội Đồng Hới"
          className="w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay - Bottom heavy to show image on top */}
        <div className="absolute inset-0 bg-gradient-hero z-10" />

        {/* Subtle Light Effects */}
        <div
          className="absolute inset-0 z-5 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, hsl(45 100% 60% / 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(48 100% 65% / 0.15) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl w-full py-10">
          {/* Premium Badge */}
          <div className="inline-block mb-6 px-5 py-2.5 bg-red-600 rounded-full border border-white/30 animate-fade-in shadow-xl">
            <span className="text-white font-bold text-sm tracking-wide">
              ✨ Chương trình ưu đãi đặc biệt 2025
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <div className="flex flex-col gap-2 sm:gap-3 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 animate-fade-in tracking-tight break-words">
            <span className="leading-tight">KHỞI ĐẦU HẠNH PHÚC</span>
            <div className="flex items-center gap-3">
              <span className="text-[#ca8a04]">TỪ&nbsp; TỔ ẤM</span>
              <span className="leading-tight">CỦA BẠN</span>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-base sm:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 animate-fade-in leading-relaxed font-light max-w-2xl">
            Nhà ở xã hội chất lượng cao, giá cả phải chăng. Biến mơ ước sở hữu
            nhà thành hiện thực với nhiều ưu đãi và tư vấn{" "}
            <span className="font-bold text-secondary">miễn phí</span>.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-16 animate-scale-in">
            <Link to="/register" className="group w-full sm:w-auto">
              <Button
                variant="premium"
                size="lg"
                className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 shadow-2xl hover:shadow-primary transition-all duration-500 text-base sm:text-lg hover:scale-105 sm:hover:scale-110"
              >
                Đăng ký ngay
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/projects" className="group w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold hover:scale-105 sm:hover:scale-110 transition-all duration-500 shadow-2xl"
              >
                Xem dự án
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with Glass Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-slide-up">
            <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl hover:shadow-primary">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  560
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-semibold">
                  Căn hộ
                </p>
              </div>
            </div>

            <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl hover:shadow-accent">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/90 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-accent group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">2</p>
                <p className="text-xs sm:text-sm text-white/90 font-semibold">
                  Tòa tháp
                </p>
              </div>
            </div>

            <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/60 bg-white/15 backdrop-blur-md shadow-2xl">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-white">15</p>
                <p className="text-xs sm:text-sm text-white/90 font-semibold">
                  Tầng cao
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow"></div>
    </section>
  );
};
export default HeroSection;
