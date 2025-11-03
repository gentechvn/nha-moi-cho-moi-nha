import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Share2 } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();

  // Mock data - trong thực tế sẽ fetch từ API
  const article = {
    id: 1,
    title: "Chính sách mới hỗ trợ mua nhà ở xã hội 2024",
    category: "Chính sách",
    date: "15/01/2024",
    author: "Nguyễn Văn A",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "Chính phủ công bố gói hỗ trợ vay vốn ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu...",
    content: `
      <h2>Giới thiệu chính sách mới</h2>
      <p>Ngày 10/01/2024, Chính phủ đã chính thức công bố gói chính sách hỗ trợ mua nhà ở xã hội năm 2024, mang đến nhiều ưu đãi đáng kể cho người dân có nhu cầu mua nhà. Đây được xem là một trong những chính sách an sinh xã hội quan trọng nhất trong năm.</p>

      <h2>Các ưu đãi chính</h2>
      
      <h3>1. Hỗ trợ lãi suất vay 0%</h3>
      <p>Người mua nhà ở xã hội sẽ được hưởng lãi suất 0% trong 5 năm đầu tiên khi vay vốn mua nhà. Sau 5 năm, lãi suất sẽ được điều chỉnh theo lãi suất thị trường nhưng vẫn ưu đãi hơn 2-3% so với lãi suất thương mại thông thường.</p>

      <h3>2. Tăng mức cho vay lên 70%</h3>
      <p>Mức cho vay tối đa được nâng lên 70% giá trị căn hộ, thay vì 50% như trước đây. Điều này giúp người mua nhà giảm bớt gánh nặng tài chính ban đầu.</p>

      <h3>3. Miễn giảm thuế và phí</h3>
      <p>Người mua nhà ở xã hội được miễn thuế thu nhập cá nhân, giảm 50% lệ phí trước bạ. Ngoài ra, các khoản phí liên quan đến thủ tục pháp lý cũng được giảm đáng kể.</p>

      <h3>4. Ưu tiên cho nhóm đối tượng</h3>
      <ul>
        <li>Gia đình có công với cách mạng</li>
        <li>Người có thu nhập thấp</li>
        <li>Công nhân khu công nghiệp</li>
        <li>Người trẻ mới lập gia đình</li>
      </ul>

      <h2>Điều kiện áp dụng</h2>
      
      <p>Để được hưởng các ưu đãi trên, người mua nhà cần đáp ứng các điều kiện sau:</p>
      
      <ul>
        <li>Có hộ khẩu thường trú tại tỉnh/thành phố nơi có dự án</li>
        <li>Thu nhập bình quân đầu người trong gia đình từ 5-15 triệu đồng/tháng</li>
        <li>Chưa có nhà ở hoặc diện tích nhà ở hiện tại dưới 15m²/người</li>
        <li>Có giấy xác nhận thu nhập ổn định</li>
        <li>Đáp ứng các điều kiện khác theo quy định của pháp luật</li>
      </ul>

      <h2>Thủ tục đăng ký</h2>
      
      <p>Quy trình đăng ký được đơn giản hóa với 5 bước cơ bản:</p>
      
      <ol>
        <li><strong>Bước 1:</strong> Chuẩn bị hồ sơ (CMND, sổ hộ khẩu, giấy xác nhận thu nhập, giấy xác nhận chưa có nhà)</li>
        <li><strong>Bước 2:</strong> Nộp hồ sơ trực tuyến hoặc trực tiếp tại Sở Xây dựng</li>
        <li><strong>Bước 3:</strong> Chờ thẩm định (thời gian 7-10 ngày làm việc)</li>
        <li><strong>Bước 4:</strong> Nhận thông báo kết quả và chọn căn hộ</li>
        <li><strong>Bước 5:</strong> Ký hợp đồng và hoàn tất thủ tục vay vốn</li>
      </ol>

      <h2>Ý nghĩa của chính sách</h2>
      
      <p>Chính sách này được kỳ vọng sẽ giúp hàng nghìn gia đình có thu nhập thấp và trung bình có cơ hội sở hữu nhà ở. Theo ước tính, trong năm 2024, sẽ có khoảng 30,000 căn hộ nhà ở xã hội được bàn giao, đáp ứng nhu cầu nhà ở của khoảng 100,000 người dân.</p>

      <h2>Lời khuyên cho người mua nhà</h2>
      
      <p>Để tận dụng tốt nhất chính sách này, chúng tôi khuyên người dân nên:</p>
      
      <ul>
        <li>Chuẩn bị đầy đủ hồ sơ ngay từ đầu để rút ngắn thời gian thẩm định</li>
        <li>Tìm hiểu kỹ về dự án trước khi quyết định mua</li>
        <li>Tính toán kỹ khả năng tài chính để đảm bảo có thể trả nợ vay đều đặn</li>
        <li>Tham khảo ý kiến từ chuyên gia về thủ tục pháp lý</li>
        <li>Đăng ký sớm để có nhiều lựa chọn căn hộ</li>
      </ul>

      <h2>Kết luận</h2>
      
      <p>Chính sách hỗ trợ mua nhà ở xã hội 2024 là một bước tiến lớn trong việc giải quyết vấn đề nhà ở cho người dân. Với những ưu đãi hấp dẫn, đây là thời điểm tốt để các gia đình thực hiện ước mơ có nhà của mình.</p>

      <p>Để biết thêm chi tiết và được tư vấn, quý khách hàng vui lòng liên hệ với chúng tôi qua hotline 1900 xxxx hoặc đăng ký tư vấn trực tuyến trên website.</p>
    `,
    tags: ["Chính sách", "Hỗ trợ vay", "Nhà ở xã hội", "2024"],
  };

  const relatedNews = [
    {
      id: 2,
      title: "Dự án Green City đạt tiến độ vượt kế hoạch",
      excerpt: "Sau 18 tháng thi công, dự án Green City đã hoàn thành 85% khối lượng...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      date: "12/01/2024",
      category: "Dự án",
    },
    {
      id: 3,
      title: "Hướng dẫn thủ tục đăng ký mua nhà ở xã hội",
      excerpt: "Quy trình đăng ký mua nhà ở xã hội đơn giản với 5 bước cơ bản...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      date: "10/01/2024",
      category: "Hướng dẫn",
    },
    {
      id: 4,
      title: "Sunrise Tower chính thức mở bán đợt 1",
      excerpt: "Dự án Sunrise Tower công bố chính thức mở bán 120 căn hộ...",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      date: "08/01/2024",
      category: "Dự án",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-primary">
              Tin tức
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Quay lại tin tức
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block mb-3 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
              {article.category}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover rounded-xl mb-8"
                />

                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:mb-4 prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:mb-2 prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Chia sẻ bài viết:</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Copy link
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-sm text-muted-foreground">Tác giả</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Chuyên gia tư vấn về nhà ở xã hội với hơn 10 năm kinh nghiệm
                </p>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 bg-gradient-primary text-primary-foreground">
                <h3 className="text-base font-bold mb-2">Cần tư vấn?</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">
                  Liên hệ với chúng tôi để được tư vấn chi tiết về chính sách và dự án
                </p>
                <Link to="/register">
                  <Button className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground">
                    Đăng ký ngay
                  </Button>
                </Link>
              </Card>

              {/* Newsletter */}
              <Card className="p-6">
                <h3 className="text-base font-bold mb-2">Nhận tin mới nhất</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Đăng ký để nhận bản tin về chính sách và dự án mới
                </p>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 py-2 border rounded-lg mb-3 text-sm"
                />
                <Button className="w-full" size="sm">
                  Đăng ký
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tin liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
