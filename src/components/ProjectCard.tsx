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
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-md hover:shadow-xl transition-all hover-lift">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 ${statusLabels[status].color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
          {statusLabels[status].text}
        </div>

        {/* View Details Button - appears on hover */}
        <Link to={`/projects/${id}`}>
          <Button
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
            size="sm"
          >
            Xem chi tiết
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link to={`/projects/${id}`}>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-start space-x-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
          <p className="text-sm line-clamp-2">{location}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Số căn</p>
              <p className="text-sm font-semibold">{units} căn</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Diện tích</p>
              <p className="text-sm font-semibold">{area}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-1">Giá từ</p>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
