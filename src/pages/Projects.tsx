import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import ProjectCard from "@/components/ProjectCard";
import FilterDialog, { FilterState } from "@/components/FilterDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Home } from "lucide-react";
import { useState, useMemo } from "react";

const Projects = () => {
  const allProjects = [
    { id: 1, title: "Khu đô thị Green City", location: "Quận Long Biên, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 450, price: 1200, status: "selling" as const, area: 65 },
    { id: 2, title: "Chung cư Sunrise Tower", location: "Quận Thanh Xuân, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", units: 320, price: 980, status: "selling" as const, area: 59 },
    { id: 3, title: "Khu nhà ở An Phú", location: "Quận Hà Đông, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", units: 280, price: 1500, status: "upcoming" as const, area: 70 },
    { id: 4, title: "Chung cư Harmony Residence", location: "Quận Nam Từ Liêm, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 380, price: 1100, status: "selling" as const, area: 65 },
    { id: 5, title: "Khu đô thị Eco Park", location: "Huyện Văn Giang, Hưng Yên", city: "others", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", units: 520, price: 850, status: "selling" as const, area: 55 },
    { id: 6, title: "Chung cư Blue Sky", location: "Quận Cầu Giấy, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", units: 290, price: 1350, status: "completed" as const, area: 70 },
    { id: 7, title: "Vinhomes Ocean Park", location: "Quận Gia Lâm, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800", units: 600, price: 1800, status: "selling" as const, area: 80 },
    { id: 8, title: "Chung cư Sky View", location: "Quận 7, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", units: 400, price: 1600, status: "selling" as const, area: 75 },
    { id: 9, title: "Khu đô thị Phú Mỹ Hưng", location: "Quận 7, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", units: 550, price: 2200, status: "completed" as const, area: 90 },
    { id: 10, title: "Chung cư Diamond Lotus", location: "Quận Bình Tân, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 350, price: 1400, status: "selling" as const, area: 68 },
    { id: 11, title: "Khu nhà ở Paradise", location: "Quận Hải Châu, Đà Nẵng", city: "danang", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", units: 280, price: 1300, status: "upcoming" as const, area: 62 },
    { id: 12, title: "Chung cư Ocean Vista", location: "Quận Sơn Trà, Đà Nẵng", city: "danang", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", units: 320, price: 1500, status: "selling" as const, area: 72 },
    { id: 13, title: "Khu đô thị The Manor", location: "Quận Hoàng Mai, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", units: 420, price: 1700, status: "selling" as const, area: 78 },
    { id: 14, title: "Chung cư Golden Palace", location: "Quận Cầu Giấy, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 380, price: 1900, status: "upcoming" as const, area: 85 },
    { id: 15, title: "Khu nhà ở Riverside", location: "Quận 2, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", units: 460, price: 2100, status: "selling" as const, area: 88 },
    { id: 16, title: "Chung cư Luxury Tower", location: "Quận 1, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", units: 300, price: 2500, status: "completed" as const, area: 95 },
    { id: 17, title: "Khu đô thị Smart City", location: "Quận Tây Hồ, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", units: 500, price: 1600, status: "selling" as const, area: 75 },
    { id: 18, title: "Chung cư Crown Palace", location: "Quận Thanh Khê, Đà Nẵng", city: "danang", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 340, price: 1450, status: "selling" as const, area: 70 },
    { id: 19, title: "Khu nhà ở Elegant", location: "Quận Đống Đa, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", units: 390, price: 1550, status: "upcoming" as const, area: 73 },
    { id: 20, title: "Chung cư Millennium", location: "Quận Ba Đình, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", units: 410, price: 2000, status: "selling" as const, area: 82 },
    { id: 21, title: "Khu đô thị Harmony Hills", location: "Quận 9, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800", units: 480, price: 1750, status: "selling" as const, area: 79 },
    { id: 22, title: "Chung cư Platinum Residence", location: "Quận 3, TP. Hồ Chí Minh", city: "hochiminh", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", units: 360, price: 2300, status: "completed" as const, area: 92 },
    { id: 23, title: "Khu nhà ở Sunflower", location: "Quận Ngũ Hành Sơn, Đà Nẵng", city: "danang", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", units: 310, price: 1380, status: "upcoming" as const, area: 66 },
    { id: 24, title: "Chung cư Royal Garden", location: "Quận Long Biên, Hà Nội", city: "hanoi", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", units: 440, price: 1650, status: "selling" as const, area: 76 },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    minPrice: 0,
    maxPrice: 3000,
    minArea: 0,
    maxArea: 150,
    location: "all",
  });

  const itemsPerPage = 9;

  // Filter, search, and sort logic
  const filteredAndSortedProjects = useMemo(() => {
    let result = allProjects.filter((project) => {
      // Search filter
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus = filters.status === "all" || project.status === filters.status;

      // Location filter
      const matchesLocation = filters.location === "all" || project.city === filters.location;

      // Price filter
      const matchesPrice = project.price >= filters.minPrice && project.price <= filters.maxPrice;

      // Area filter
      const matchesArea = project.area >= filters.minArea && project.area <= filters.maxArea;

      return matchesSearch && matchesStatus && matchesLocation && matchesPrice && matchesArea;
    });

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "area-asc":
        result.sort((a, b) => a.area - b.area);
        break;
      case "area-desc":
        result.sort((a, b) => b.area - a.area);
        break;
      case "newest":
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }

    return result;
  }, [searchQuery, sortBy, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / itemsPerPage);
  const paginatedProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Dự án nhà ở xã hội"
        description="Khám phá các dự án chất lượng cao với giá cả phải chăng, đáp ứng tiêu chuẩn xây dựng hiện đại và đầy đủ tiện ích"
        icon={<Home className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Search & Filter */}
      <section className="py-6 md:py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search and Filter Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm theo tên dự án, địa điểm..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
              <FilterDialog onFilterChange={handleFilterChange} currentFilters={filters} />
            </div>

            {/* Sort Row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Sắp xếp theo:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                  <SelectItem value="price-desc">Giá giảm dần</SelectItem>
                  <SelectItem value="area-asc">Diện tích nhỏ đến lớn</SelectItem>
                  <SelectItem value="area-desc">Diện tích lớn đến nhỏ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm md:text-base text-muted-foreground">
              Hiển thị <span className="font-semibold text-foreground">{paginatedProjects.length}</span> trên{" "}
              <span className="font-semibold text-foreground">{filteredAndSortedProjects.length}</span> dự án
            </p>
          </div>

          {paginatedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {paginatedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    location={project.location}
                    image={project.image}
                    units={project.units}
                    price={`${project.price} triệu`}
                    status={project.status}
                    area={`${project.area}m²`}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 md:mt-12">
                  <Pagination>
                    <PaginationContent className="flex-wrap gap-1">
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>

                      {[...Array(totalPages)].map((_, idx) => {
                        const pageNumber = idx + 1;
                        // Show first page, last page, current page, and pages around current
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={pageNumber}>
                              <PaginationLink
                                onClick={() => setCurrentPage(pageNumber)}
                                isActive={currentPage === pageNumber}
                                className="cursor-pointer"
                              >
                                {pageNumber}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                          return (
                            <PaginationItem key={pageNumber}>
                              <span className="px-2">...</span>
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 md:py-16">
              <p className="text-lg md:text-xl text-muted-foreground">Không tìm thấy dự án phù hợp</p>
              <p className="text-sm text-muted-foreground mt-2">Vui lòng thử lại với bộ lọc khác</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
