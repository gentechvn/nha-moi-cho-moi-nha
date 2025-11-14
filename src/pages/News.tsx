import { useState } from "react";
import { Link } from "react-router-dom";
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
import { newsArticles } from "@/data/newsData";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Convert articles to news format for NewsCard
  const news = newsArticles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
    date: article.date,
    category: article.category,
  }));

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
                  <Link to={`/news/${filteredNews[0].slug}`}>
                    <div className="relative h-96 rounded-xl overflow-hidden group cursor-pointer">
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
                  </Link>
                </div>

                {filteredNews.length > 1 && (
                  <div className="flex flex-col justify-between py-4 gap-4">
                    {filteredNews.slice(1, 3).map((item) => (
                      <Link key={item.id} to={`/news/${item.slug}`}>
                        <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
                      </Link>
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
