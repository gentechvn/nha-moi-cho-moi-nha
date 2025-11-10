import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">NH</span>
              </div>
              <div>
                <p className="font-bold text-lg">Nhà Ở Xã Hội</p>
                <p className="text-xs text-primary-foreground/80">Mơ ước có thật</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Cung cấp giải pháp nhà ở xã hội chất lượng cao, giá cả phải chăng cho người dân.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Dự án
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Tư vấn mua nhà</li>
              <li className="text-sm text-primary-foreground/80">Hỗ trợ vay vốn</li>
              <li className="text-sm text-primary-foreground/80">Thủ tục pháp lý</li>
              <li className="text-sm text-primary-foreground/80">Đặt lịch xem nhà</li>
              <li className="text-sm text-primary-foreground/80">Chăm sóc sau bán</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">
                  Phường Đồng Hới, TP. Đồng Hới, Quảng Bình
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">0232 3831 869</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">info@donghoiproject.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Nhà Ở Xã Hội. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
