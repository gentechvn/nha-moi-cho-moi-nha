import { FileText, Search, CheckCircle, Key } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Search,
      title: "Tìm kiếm & Chọn lựa",
      description: "Khám phá các dự án phù hợp với nhu cầu và túi tiền của bạn",
      number: "01"
    },
    {
      icon: FileText,
      title: "Đăng ký & Thẩm định",
      description: "Hoàn thiện hồ sơ và chờ phê duyệt từ cơ quan có thẩm quyền",
      number: "02"
    },
    {
      icon: CheckCircle,
      title: "Ký hợp đồng & Thanh toán",
      description: "Ký kết hợp đồng mua bán và tiến hành thanh toán theo tiến độ",
      number: "03"
    },
    {
      icon: Key,
      title: "Nhận nhà & Bàn giao",
      description: "Kiểm tra và nhận bàn giao căn hộ hoàn thiện đầy đủ",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">📋 Quy trình</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            4 Bước <span className="text-[#ca8a04]">Đơn Giản</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quy trình mua nhà ở xã hội được đơn giản hóa tối đa, giúp bạn dễ dàng sở hữu ngôi nhà mơ ước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-4">Cần hỗ trợ thêm?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Liên hệ tư vấn miễn phí
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
