import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in">
              Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Hotline</h3>
              <p className="text-sm text-muted-foreground mb-1">1900 xxxx</p>
              <p className="text-sm text-muted-foreground">0901 234 567</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@nhaoxahoi.vn</p>
              <p className="text-sm text-muted-foreground">support@nhaoxahoi.vn</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Zalo/Facebook</h3>
              <p className="text-sm text-muted-foreground mb-1">Zalo: 0901 234 567</p>
              <p className="text-sm text-muted-foreground">FB: @nhaoxahoi</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Giờ làm việc</h3>
              <p className="text-sm text-muted-foreground mb-1">T2-T7: 8:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">CN: 8:00 - 12:00</p>
            </Card>
          </div>

          {/* Map & Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Văn phòng chính</h2>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Địa chỉ</p>
                  <p className="text-muted-foreground">
                    Số 123, Đường ABC, Phường XYZ, Quận Long Biên, Thành phố Hà Nội
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Phòng kinh doanh</h3>
                  <p className="text-sm text-muted-foreground">
                    📞 Hotline: 1900 xxxx (ext. 101)<br />
                    📧 sales@nhaoxahoi.vn
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phòng chăm sóc khách hàng</h3>
                  <p className="text-sm text-muted-foreground">
                    📞 Hotline: 1900 xxxx (ext. 102)<br />
                    📧 support@nhaoxahoi.vn
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phòng pháp lý</h3>
                  <p className="text-sm text-muted-foreground">
                    📞 Hotline: 1900 xxxx (ext. 103)<br />
                    📧 legal@nhaoxahoi.vn
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="w-full h-full min-h-[400px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810592427!2d105.8829364!3d21.0369868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece6b6b%3A0x6ff9f2bcc2405e08!2sLong%20Bi%C3%AAn%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Chi nhánh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Chi nhánh Hà Đông</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Số 456, Đường DEF, Quận Hà Đông, Hà Nội
              </p>
              <p className="text-sm text-muted-foreground">📞 0901 111 222</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Chi nhánh Thanh Xuân</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Số 789, Đường GHI, Quận Thanh Xuân, Hà Nội
              </p>
              <p className="text-sm text-muted-foreground">📞 0901 333 444</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Chi nhánh Nam Từ Liêm</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Số 321, Đường JKL, Quận Nam Từ Liêm, Hà Nội
              </p>
              <p className="text-sm text-muted-foreground">📞 0901 555 666</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
