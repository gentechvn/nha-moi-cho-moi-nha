import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Giá cả phải chăng",
      social: true,
      commercial: false
    },
    {
      feature: "Hỗ trợ vay vốn ưu đãi",
      social: true,
      commercial: false
    },
    {
      feature: "Đầy đủ pháp lý",
      social: true,
      commercial: true
    },
    {
      feature: "Chất lượng xây dựng cao",
      social: true,
      commercial: true
    },
    {
      feature: "Vị trí thuận tiện",
      social: true,
      commercial: true
    },
    {
      feature: "Hỗ trợ từ chính phủ",
      social: true,
      commercial: false
    },
    {
      feature: "Cộng đồng an toàn",
      social: true,
      commercial: true
    },
    {
      feature: "Giá dưới 25 triệu/m²",
      social: true,
      commercial: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-semibold text-sm">🔍 So sánh</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Tại Sao Chọn <span className="text-primary">Nhà Ở Xã Hội</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            So sánh chi tiết giữa nhà ở xã hội và nhà ở thương mại
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/30">
              <div className="p-6">
                <h3 className="font-bold text-foreground">Tiêu chí</h3>
              </div>
              <div className="p-6 bg-gradient-primary text-center">
                <h3 className="font-bold text-primary-foreground">Nhà Ở Xã Hội</h3>
                <p className="text-xs text-primary-foreground/80 mt-1">Lựa chọn tốt nhất</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-foreground">Nhà Thương Mại</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border/50">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 hover:bg-muted/20 transition-colors"
                >
                  <div className="p-6 flex items-center">
                    <span className="text-foreground font-medium">{item.feature}</span>
                  </div>
                  <div className="p-6 flex items-center justify-center bg-primary/5">
                    {item.social ? (
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    {item.commercial ? (
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
              <h4 className="text-xl font-bold text-foreground mb-2">
                Sẵn sàng để bắt đầu?
              </h4>
              <p className="text-muted-foreground mb-6">
                Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt
              </p>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-xl">
                Đăng ký tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
