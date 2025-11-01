import { Shield, Award, Building2, Heart } from "lucide-react";

const PartnersSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Chứng nhận ISO 9001",
      description: "Quản lý chất lượng"
    },
    {
      icon: Award,
      title: "Giải thưởng BĐS",
      description: "Dự án xuất sắc 2023"
    },
    {
      icon: Building2,
      title: "Chứng chỉ xây dựng",
      description: "Hạng I toàn quốc"
    },
    {
      icon: Heart,
      title: "Top 10 Uy tín",
      description: "Bình chọn 2024"
    }
  ];

  const partners = [
    { name: "Ngân hàng Vietcombank", logo: "🏦" },
    { name: "Ngân hàng BIDV", logo: "🏦" },
    { name: "Tập đoàn Vingroup", logo: "🏢" },
    { name: "Bộ Xây dựng", logo: "🏛️" },
    { name: "UBND Hà Nội", logo: "🏛️" },
    { name: "Tập đoàn FLC", logo: "🏢" }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🏆 Chứng nhận</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Uy Tín & <span className="text-primary">Chất Lượng</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Được công nhận bởi các tổ chức uy tín trong và ngoài nước
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full">
              <span className="text-secondary-foreground font-semibold text-sm">🤝 Đối tác</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Đồng Hành Cùng <span className="text-primary">Các Đối Tác</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hợp tác với các tổ chức tài chính và doanh nghiệp hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <p className="text-xs text-center text-muted-foreground font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-8 py-4 rounded-full">
              <Shield className="w-6 h-6 text-primary" />
              <p className="text-foreground font-semibold">
                Được <span className="text-primary">10,000+</span> khách hàng tin tưởng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
