import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anh Nguyễn Văn A",
      role: "Kỹ sư IT",
      location: "Đồng Hới, Quảng Bình",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Tôi rất hài lòng với chất lượng căn hộ và dịch vụ hỗ trợ. Quy trình mua nhà rất nhanh chóng, chỉ sau 3 tháng là đã nhận được nhà. Đội ngũ tư vấn rất nhiệt tình và chuyên nghiệp.",
      rating: 5
    },
    {
      name: "Chị Trần Thị B",
      role: "Giáo viên",
      location: "Đồng Hới, Quảng Bình",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "Giá cả phải chăng, chất lượng tốt, vị trí thuận tiện. Đặc biệt là khu vực xung quanh rất yên tĩnh, an toàn cho gia đình có trẻ nhỏ. Tôi rất khuyến khích mọi người nên đến xem.",
      rating: 5
    },
    {
      name: "Anh Lê Văn C",
      role: "Nhân viên văn phòng",
      location: "Đồng Hới, Quảng Bình",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "Đây là quyết định đúng đắn nhất của tôi. Từ một người thuê trở thành chủ nhà chỉ với số vốn ban đầu rất nhỏ. Cảm ơn chương trình hỗ trợ vay vốn và đội ngũ tư vấn tận tâm.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">💬 Chia sẻ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Khách Hàng <span className="text-primary">Nói Gì</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hơn 10,000 gia đình đã tin tưởng và lựa chọn chúng tôi để hiện thực hóa giấc mơ an cư
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { number: "98%", label: "Khách hàng hài lòng" },
            { number: "10K+", label: "Gia đình tin tưởng" },
            { number: "4.9/5", label: "Đánh giá trung bình" },
            { number: "50+", label: "Dự án thành công" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl shadow-md">
              <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
