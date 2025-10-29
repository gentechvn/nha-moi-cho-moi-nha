import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="animate-fade-in space-y-2">
          <a
            href="tel:1900xxxx"
            className="flex items-center justify-end space-x-2 bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span className="font-medium text-sm">Gọi điện</span>
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://zalo.me/1900xxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span className="font-medium text-sm">Chat Zalo</span>
            <MessageCircle className="w-5 h-5" />
          </a>
          <Link to="/register">
            <Button className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-lg">
              Đăng ký tư vấn
            </Button>
          </Link>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full shadow-primary hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingCTA;
