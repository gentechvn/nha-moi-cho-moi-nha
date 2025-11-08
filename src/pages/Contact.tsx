import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Liên hệ với chúng tôi"
        description="Đội ngũ chuyên viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7"
        icon={<Headphones className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Contact Info */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Kết nối với chúng tôi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Đội ngũ chuyên viên giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hotline</h3>
                <a href="tel:1900xxxx" className="block text-primary font-semibold hover:underline mb-1">1900 xxxx</a>
                <a href="tel:0901234567" className="block text-muted-foreground hover:text-primary transition-colors">0901 234 567</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <a href="mailto:info@nhaoxahoi.vn" className="block text-primary font-semibold hover:underline mb-1">info@nhaoxahoi.vn</a>
                <a href="mailto:support@nhaoxahoi.vn" className="block text-muted-foreground hover:text-primary transition-colors">support@nhaoxahoi.vn</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zalo/Facebook</h3>
                <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer" className="block text-primary font-semibold hover:underline mb-1">Zalo: 0901 234 567</a>
                <a href="https://facebook.com/nhaoxahoi" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">FB: @nhaoxahoi</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Giờ làm việc</h3>
                <p className="text-muted-foreground mb-1">T2-T7: 8:00 - 18:00</p>
                <p className="text-muted-foreground">CN: 8:00 - 12:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Map & Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-black mb-6 gradient-text">Văn phòng chính</h2>
                <div className="flex items-start space-x-4 mb-8 p-4 bg-primary/5 rounded-xl">
                  <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-2">Địa chỉ</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Số 123, Đường ABC, Phường XYZ, Quận Long Biên, Thành phố Hà Nội
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Phòng kinh doanh
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      📞 Hotline: <a href="tel:1900xxxx" className="text-primary hover:underline font-semibold">1900 xxxx (ext. 101)</a><br />
                      📧 Email: <a href="mailto:sales@nhaoxahoi.vn" className="text-primary hover:underline font-semibold">sales@nhaoxahoi.vn</a>
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-colors">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      Phòng chăm sóc khách hàng
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      📞 Hotline: <a href="tel:1900xxxx" className="text-primary hover:underline font-semibold">1900 xxxx (ext. 102)</a><br />
                      📧 Email: <a href="mailto:support@nhaoxahoi.vn" className="text-primary hover:underline font-semibold">support@nhaoxahoi.vn</a>
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Phòng pháp lý
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      📞 Hotline: <a href="tel:1900xxxx" className="text-primary hover:underline font-semibold">1900 xxxx (ext. 103)</a><br />
                      📧 Email: <a href="mailto:legal@nhaoxahoi.vn" className="text-primary hover:underline font-semibold">legal@nhaoxahoi.vn</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-xl">
              <div className="w-full h-full min-h-[500px] bg-muted relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810592427!2d105.8829364!3d21.0369868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece6b6b%3A0x6ff9f2bcc2405e08!2sLong%20Bi%C3%AAn%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="group-hover:saturate-150 transition-all duration-300"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Chi nhánh</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hệ thống chi nhánh rộng khắp Hà Nội, sẵn sàng phục vụ bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Chi nhánh Hà Đông</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Số 456, Đường DEF, Quận Hà Đông, Hà Nội
                </p>
                <a href="tel:0901111222" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  0901 111 222
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Chi nhánh Thanh Xuân</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Số 789, Đường GHI, Quận Thanh Xuân, Hà Nội
                </p>
                <a href="tel:0901333444" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  0901 333 444
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Chi nhánh Nam Từ Liêm</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Số 321, Đường JKL, Quận Nam Từ Liêm, Hà Nội
                </p>
                <a href="tel:0901555666" className="flex items-center gap-2 text-primary font-semibold hover:underline">
                  <Phone className="w-4 h-4" />
                  0901 555 666
                </a>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
                Sẵn sàng tìm ngôi nhà mơ ước?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Để lại thông tin hoặc liên hệ ngay với chúng tôi để được tư vấn miễn phí
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2 font-bold shadow-lg hover:shadow-xl transition-all">
                  <Send className="w-5 h-5" />
                  Gửi yêu cầu tư vấn
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 font-bold bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 shadow-lg">
                  <Phone className="w-5 h-5" />
                  Gọi ngay: 1900 xxxx
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
