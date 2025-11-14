import { Shield, Award, Building2, Heart } from "lucide-react";

const PartnersSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Chứng nhận ISO 9001",
      description: "Quản lý chất lượng",
    },
    {
      icon: Award,
      title: "Giải thưởng BĐS",
      description: "Dự án xuất sắc 2023",
    },
    {
      icon: Building2,
      title: "Chứng chỉ xây dựng",
      description: "Hạng I toàn quốc",
    },
    {
      icon: Heart,
      title: "Top 10 Uy tín",
      description: "Bình chọn 2024",
    },
  ];

  const partners = [
    { name: "Ngân hàng Vietcombank", logo: "🏦" },
    { name: "Ngân hàng BIDV", logo: "🏦" },
    { name: "Tập đoàn Vingroup", logo: "🏢" },
    { name: "Bộ Xây dựng", logo: "🏛️" },
    { name: "UBND Hà Nội", logo: "🏛️" },
    { name: "Tập đoàn FLC", logo: "🏢" },
  ];

  return (
    <section className="pt-20 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">
                🏆 Chứng nhận
              </span>
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
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
