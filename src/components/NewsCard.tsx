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
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-md hover:shadow-xl transition-all hover-lift">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{date}</span>
        </div>

        <Link to={`/news/${id}`}>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        <Link 
          to={`/news/${id}`}
          className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-light transition-colors"
        >
          Đọc thêm
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
