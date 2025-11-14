import { Link } from "react-router-dom";
import {
  Facebook,
  Mail,
  Phone,
  MapPin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 bg-white h-[150px] w-[150px] rounded-full">
              <img
                src={logo}
                alt="Nhà Ở Xã Hội"
                className="h-full w-auto object-contain scale-[1.5]"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Cung cấp giải pháp nhà ở xã hội chất lượng cao, giá cả phải chăng
              cho người dân.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Dự án
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">
                Tư vấn mua nhà
              </li>
              <li className="text-sm text-primary-foreground/80">
                Hỗ trợ vay vốn
              </li>
              <li className="text-sm text-primary-foreground/80">
                Thủ tục pháp lý
              </li>
              <li className="text-sm text-primary-foreground/80">
                Đặt lịch xem nhà
              </li>
              <li className="text-sm text-primary-foreground/80">
                Chăm sóc sau bán
              </li>
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
                <span className="text-primary-foreground/80">
                  0232 3831 869
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">
                  info@donghoiproject.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Nhà Ở Xã Hội. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
