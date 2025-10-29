import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Khu đô thị Green City",
      location: "Quận Long Biên, Hà Nội",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      units: 450,
      price: "1.2 tỷ",
      status: "selling" as const,
      area: "55-75m²",
    },
    {
      id: 2,
      title: "Chung cư Sunrise Tower",
      location: "Quận Thanh Xuân, Hà Nội",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      units: 320,
      price: "980 triệu",
      status: "selling" as const,
      area: "50-68m²",
    },
    {
      id: 3,
      title: "Khu nhà ở An Phú",
      location: "Quận Hà Đông, Hà Nội",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      units: 280,
      price: "1.5 tỷ",
      status: "upcoming" as const,
      area: "60-80m²",
    },
    {
      id: 4,
      title: "Chung cư Harmony Residence",
      location: "Quận Nam Từ Liêm, Hà Nội",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      units: 380,
      price: "1.1 tỷ",
      status: "selling" as const,
      area: "58-72m²",
    },
    {
      id: 5,
      title: "Khu đô thị Eco Park",
      location: "Huyện Văn Giang, Hưng Yên",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      units: 520,
      price: "850 triệu",
      status: "selling" as const,
      area: "45-65m²",
    },
    {
      id: 6,
      title: "Chung cư Blue Sky",
      location: "Quận Cầu Giấy, Hà Nội",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      units: 290,
      price: "1.35 tỷ",
      status: "completed" as const,
      area: "62-78m²",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
              Dự án nhà ở xã hội
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in">
              Khám phá các dự án chất lượng cao với giá cả phải chăng, phù hợp với mọi gia đình
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm theo tên dự án, địa điểm..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Bộ lọc
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Hiển thị <span className="font-semibold text-foreground">{projects.length}</span> dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
