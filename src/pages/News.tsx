import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const News = () => {
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
  ];

  const categories = ["Tất cả", "Chính sách", "Dự án", "Hướng dẫn", "Tư vấn", "Tiện ích"];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
              Tin tức & Sự kiện
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in">
              Cập nhật thông tin mới nhất về chính sách, dự án và thị trường nhà ở xã hội
            </p>
          </div>
        </div>
      </section>

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
                variant={category === "Tất cả" ? "default" : "outline"}
                size="sm"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="relative h-96 rounded-xl overflow-hidden group">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {news[0].category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{news[0].title}</h3>
                  <p className="text-sm text-primary-foreground/90 mb-2">{news[0].excerpt}</p>
                  <p className="text-sm">{news[0].date}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {news.slice(1, 3).map((item) => (
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
          </div>

          {/* All News */}
          <h2 className="text-2xl font-bold mb-8">Tất cả tin tức</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
