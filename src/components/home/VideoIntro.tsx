import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <div className="relative group animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
                alt="Video giới thiệu"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-primary hover:bg-primary-light shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">📹 Giới thiệu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Hành Trình Đến <span className="text-primary">Tổ Ấm</span> Mới
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Chúng tôi không chỉ xây dựng nhà ở, mà xây dựng cả niềm tin và hạnh phúc cho hàng nghìn gia đình Việt Nam. 
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào mang đến những dự án nhà ở xã hội chất lượng cao nhất.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { number: "15+", label: "Năm kinh nghiệm", color: "primary" },
                { number: "50+", label: "Dự án hoàn thành", color: "accent" },
                { number: "10,000+", label: "Gia đình hạnh phúc", color: "secondary" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-${stat.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl font-bold text-primary">{stat.number}</span>
                  </div>
                  <p className="text-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-xl">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
