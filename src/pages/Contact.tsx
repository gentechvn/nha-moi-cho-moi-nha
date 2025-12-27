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
              <span className="text-[#ca8a04]">Kết nối với chúng tôi</span>
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
                <a href="tel:02323831869" className="block text-primary font-semibold hover:underline mb-1 text-lg">0982 437 434</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <a href="mailto:duannhaoxahoidonghoi@gmail.com" className="block text-primary font-semibold hover:underline mb-1">duannhaoxahoidonghoi@gmail.com</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zalo</h3>
                <a href="https://zalo.me/0232383186" target="_blank" rel="noopener noreferrer" className="block text-primary font-semibold hover:underline mb-1">0982 437 434</a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Giờ làm việc</h3>
                <p className="text-muted-foreground mb-1">T2-T7: 8:00 - 17:00</p>
                <p className="text-muted-foreground">CN: Nghỉ</p>
              </CardContent>
            </Card>
          </div>

          {/* Map & Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-black mb-6 gradient-text">Thông tin liên hệ</h2>
                <div className="flex items-start space-x-4 mb-8 p-4 bg-primary/5 rounded-xl">
                  <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg mb-2">Địa chỉ</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Phường Đồng Hới, TP. Đồng Hới, Quảng Bình
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
                      📞 Hotline: <a href="tel:02323831869" className="text-primary hover:underline font-semibold">0982 437 434</a><br />
                      📧 Email: <a href="mailto:duannhaoxahoidonghoi@gmail.com" className="text-primary hover:underline font-semibold">duannhaoxahoidonghoi@gmail.com</a>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-colors">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      Phòng chăm sóc khách hàng
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      📞 Hotline: <a href="tel:02323831869" className="text-primary hover:underline font-semibold">0982 437 434</a><br />
                      📧 Email: <a href="mailto:duannhaoxahoidonghoi@gmail.com" className="text-primary hover:underline font-semibold">duannhaoxahoidonghoi@gmail.com</a>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Phòng pháp lý
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      📞 Hotline: <a href="tel:02323831869" className="text-primary hover:underline font-semibold">0982 437 434</a><br />
                      📧 Email: <a href="mailto:duannhaoxahoidonghoi@gmail.com" className="text-primary hover:underline font-semibold">duannhaoxahoidonghoi@gmail.com</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-xl">
              <div className="w-full h-full min-h-[500px] bg-muted relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15360.994756716!2d106.6141!3d17.4769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169a3f6ee488a47%3A0xf1e7d5f9c0e9b8a1!2zxJDhu5NuZyBI4bubaSwgUXXhuqNuZyBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890"
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Gọi ngay: 0982 437 434
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
