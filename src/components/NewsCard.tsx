import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const NewsCard = ({ id, title, excerpt, image, date, category }: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-primary/30">
      {/* Image with Enhanced Effects */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Premium Category Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
          {category}
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            animation: 'shimmer 2s ease-in-out'
          }}
        />
      </div>

      {/* Enhanced Content */}
      <div className="p-7">
        {/* Date with Icon */}
        <div className="flex items-center space-x-2 text-muted-foreground mb-4 bg-muted/30 rounded-lg px-3 py-2 w-fit">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{date}</span>
        </div>

        <Link to={`/news/${id}`}>
          <h3 className="text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Premium Read More Link */}
        <Link 
          to={`/news/${id}`}
          className="inline-flex items-center text-base font-bold text-primary group-hover:text-primary-light transition-all duration-300 group-hover:gap-3"
        >
          Đọc thêm
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
