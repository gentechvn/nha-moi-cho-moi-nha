import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dự án", href: "/projects" },
    { name: "Tin tức", href: "/news" },
    { name: "Hướng dẫn", href: "/buying-guide" },
    { name: "Liên hệ", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">NH</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-foreground">Nhà Ở Xã Hội</p>
              <p className="text-xs text-muted-foreground">Mơ ước có thật</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-2 border-2 hover:border-primary">
              <Phone className="w-4 h-4" />
              <span className="font-bold">0232 3831 869</span>
            </Button>
            <Link to="/register">
              <Button variant="premium" size="sm" className="gap-2 shadow-2xl">
                Đăng ký ngay
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2 px-4">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                <span>0232 3831 869</span>
              </Button>
              <Link to="/register" className="block" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-primary">
                  Đăng ký ngay
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
