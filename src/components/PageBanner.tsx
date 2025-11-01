import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const PageBanner = ({ title, description, icon }: PageBannerProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {icon && (
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl animate-scale-in">
              {icon}
            </div>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground animate-fade-in">
            {title}
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl animate-fade-in">
            {description}
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center gap-3 animate-fade-in">
            <div className="h-1 w-20 bg-primary-foreground/30 rounded-full" />
            <div className="h-1 w-12 bg-primary-foreground/20 rounded-full" />
            <div className="h-1 w-8 bg-primary-foreground/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-12 text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageBanner;
