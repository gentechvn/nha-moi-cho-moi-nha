import { Link } from "react-router-dom";
import { MapPin, Home, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  id: number;
  title: string;
  location: string;
  image: string;
  units: number;
  price: string;
  status: "selling" | "upcoming" | "completed";
  area: string;
}

const ProjectCard = ({ id, title, location, image, units, price, status, area }: ProjectCardProps) => {
  const statusLabels = {
    selling: { text: "Đang bán", color: "bg-secondary" },
    upcoming: { text: "Sắp mở bán", color: "bg-accent" },
    completed: { text: "Đã bàn giao", color: "bg-muted-foreground" },
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-primary/30">
      {/* Image with Enhanced Effects */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Status Badge */}
        <div className={`absolute top-5 left-5 ${statusLabels[status].color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
          {statusLabels[status].text}
        </div>

        {/* Premium View Details Button */}
        <Link to={`/projects/${id}`} className="absolute bottom-5 right-5 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
          <Button
            className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-2xl font-bold"
            size="sm"
          >
            Xem chi tiết
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            animation: 'shimmer 2s ease-in-out'
          }}
        />
      </div>

      {/* Enhanced Content */}
      <div className="p-7">
        <Link to={`/projects/${id}`}>
          <h3 className="text-2xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-start space-x-2 text-muted-foreground mb-5">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary group-hover:animate-bounce-slow" />
          <p className="text-sm leading-relaxed line-clamp-2">{location}</p>
        </div>

        {/* Info Grid with Icons */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="flex items-center space-x-3 bg-primary/5 rounded-xl p-3 group-hover:bg-primary/10 transition-colors duration-300">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Số căn</p>
              <p className="text-base font-bold text-foreground">{units} căn</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-accent/5 rounded-xl p-3 group-hover:bg-accent/10 transition-colors duration-300">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Diện tích</p>
              <p className="text-base font-bold text-foreground">{area}</p>
            </div>
          </div>
        </div>

        {/* Price Section with Premium Styling */}
        <div className="pt-5 border-t-2 border-border/50">
          <p className="text-sm text-muted-foreground mb-2 font-medium">Giá từ</p>
          <p className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">{price}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
