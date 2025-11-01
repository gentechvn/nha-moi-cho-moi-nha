import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Newspaper } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const news = [
    {
      id: 1,
      title: "Chính sách mới hỗ trợ mua nhà ở xã hội 2024",
      excerpt: "Chính phủ công bố gói hỗ trợ vay vốn ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu...",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      date: "15/01/2024",
      category: "Chính sách",
    },
    {
      id: 2,
      title: "Dự án Green City đạt tiến độ vượt kế hoạch",
      excerpt: "Sau 18 tháng thi công, dự án Green City đã hoàn thành 85% khối lượng và dự kiến bàn giao vào quý 2/2024...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      date: "12/01/2024",
      category: "Dự án",
    },
    {
      id: 3,
      title: "Hướng dẫn thủ tục đăng ký mua nhà ở xã hội",
      excerpt: "Quy trình đăng ký mua nhà ở xã hội đơn giản với 5 bước cơ bản. Người dân có thể đăng ký trực tuyến...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      date: "10/01/2024",
      category: "Hướng dẫn",
    },
    {
      id: 4,
      title: "Sunrise Tower chính thức mở bán đợt 1",
      excerpt: "Dự án Sunrise Tower công bố chính thức mở bán 120 căn hộ với nhiều ưu đãi hấp dẫn cho khách hàng đăng ký sớm...",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      date: "08/01/2024",
      category: "Dự án",
    },
    {
      id: 5,
      title: "Kinh nghiệm chọn mua nhà ở xã hội phù hợp",
      excerpt: "Chia sẻ những kinh nghiệm hữu ích giúp bạn lựa chọn căn hộ phù hợp với nhu cầu và khả năng tài chính...",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      date: "05/01/2024",
      category: "Tư vấn",
    },
    {
      id: 6,
      title: "Các tiện ích nổi bật tại khu đô thị Green City",
      excerpt: "Khám phá hệ thống tiện ích đẳng cấp tại Green City: hồ bơi, công viên, trường học, bệnh viện...",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      date: "02/01/2024",
      category: "Tiện ích",
    },
    {
      id: 7,
      title: "Ưu đãi lãi suất 0% cho người mua nhà lần đầu",
      excerpt: "Ngân hàng Nhà nước công bố chính sách ưu đãi đặc biệt dành cho người mua nhà lần đầu với gói vay lãi suất 0% trong 3 năm...",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      date: "28/12/2023",
      category: "Chính sách",
    },
    {
      id: 8,
      title: "Harmony Residence khởi công giai đoạn 2",
      excerpt: "Dự án Harmony Residence chính thức khởi công giai đoạn 2 với 500 căn hộ và nhiều tiện ích bổ sung...",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      date: "25/12/2023",
      category: "Dự án",
    },
    {
      id: 9,
      title: "Cách xác định giá trị thực của căn hộ",
      excerpt: "Hướng dẫn chi tiết các yếu tố cần xem xét khi định giá căn hộ: vị trí, pháp lý, tiện ích, hạ tầng...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      date: "22/12/2023",
      category: "Hướng dẫn",
    },
    {
      id: 10,
      title: "Tư vấn vay vốn ngân hàng mua nhà ở xã hội",
      excerpt: "Những điều cần biết về thủ tục vay vốn, hồ sơ cần thiết và các gói vay ưu đãi từ các ngân hàng...",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      date: "20/12/2023",
      category: "Tư vấn",
    },
    {
      id: 11,
      title: "Hệ thống trường học quốc tế tại các dự án",
      excerpt: "Tổng hợp các dự án nhà ở xã hội có liên kết với trường học quốc tế, mang đến môi trường giáo dục chất lượng...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      date: "18/12/2023",
      category: "Tiện ích",
    },
    {
      id: 12,
      title: "Quy định mới về đăng ký sở hữu nhà ở xã hội",
      excerpt: "Chính phủ ban hành quy định mới giúp đơn giản hóa thủ tục đăng ký sở hữu và chuyển nhượng nhà ở xã hội...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      date: "15/12/2023",
      category: "Chính sách",
    },
    {
      id: 13,
      title: "Vinhomes Ocean Park mở rộng khu vực mới",
      excerpt: "Dự án Vinhomes Ocean Park công bố kế hoạch mở rộng với thêm 2000 căn hộ và khu vui chơi giải trí quy mô lớn...",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      date: "12/12/2023",
      category: "Dự án",
    },
    {
      id: 14,
      title: "Kiểm tra pháp lý dự án trước khi mua",
      excerpt: "Hướng dẫn từng bước để kiểm tra tính pháp lý của dự án, tránh rủi ro khi đầu tư mua nhà...",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      date: "10/12/2023",
      category: "Hướng dẫn",
    },
    {
      id: 15,
      title: "Lựa chọn hướng nhà và tầng phù hợp phong thủy",
      excerpt: "Tư vấn về cách chọn hướng nhà, tầng số phù hợp với tuổi gia chủ theo quan niệm phong thủy...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      date: "08/12/2023",
      category: "Tư vấn",
    },
    {
      id: 16,
      title: "Trung tâm thương mại và siêu thị nội khu",
      excerpt: "Các dự án nhà ở xã hội hiện đại đều được trang bị trung tâm thương mại, siêu thị phục vụ cư dân...",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      date: "05/12/2023",
      category: "Tiện ích",
    },
    {
      id: 17,
      title: "Giảm 50% lệ phí đăng ký quyền sở hữu nhà",
      excerpt: "Bộ Tài chính quyết định giảm 50% lệ phí trước bạ và đăng ký quyền sở hữu nhà đối với nhà ở xã hội...",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
      date: "02/12/2023",
      category: "Chính sách",
    },
    {
      id: 18,
      title: "The Manor khởi công tòa tháp thứ 3",
      excerpt: "Dự án The Manor tiếp tục mở rộng với tòa tháp thứ 3 cao 35 tầng, dự kiến hoàn thành vào năm 2025...",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      date: "30/11/2023",
      category: "Dự án",
    },
  ];

  const categories = ["Tất cả", "Chính sách", "Dự án", "Hướng dẫn", "Tư vấn", "Tiện ích"];

  const filteredNews = selectedCategory === "Tất cả" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Tin tức & Sự kiện"
        description="Cập nhật thông tin mới nhất về chính sách, dự án và thị trường nhà ở xã hội, giúp bạn đưa ra quyết định đúng đắn"
        icon={<Newspaper className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Search & Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Tìm kiếm tin tức..."
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Tin nổi bật</h2>
          
          {filteredNews.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="relative h-96 rounded-xl overflow-hidden group">
                    <img
                      src={filteredNews[0].image}
                      alt={filteredNews[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {filteredNews[0].category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-white">{filteredNews[0].title}</h3>
                      <p className="text-sm text-white/90 mb-2">{filteredNews[0].excerpt}</p>
                      <p className="text-sm text-white">{filteredNews[0].date}</p>
                    </div>
                  </div>
                </div>

                {filteredNews.length > 1 && (
                  <div className="space-y-4">
                    {filteredNews.slice(1, 3).map((item) => (
                      <div key={item.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex h-40">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-40 h-full object-cover"
                          />
                          <div className="flex-1 p-4">
                            <span className="inline-block bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                              {item.category}
                            </span>
                            <h4 className="font-bold text-sm mb-2 line-clamp-2">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* All News */}
              <h2 className="text-2xl font-bold mb-8">
                {selectedCategory === "Tất cả" ? "Tất cả tin tức" : `Tin tức ${selectedCategory}`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentNews.map((item) => (
                  <NewsCard key={item.id} {...item} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}

                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Không có tin tức nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
