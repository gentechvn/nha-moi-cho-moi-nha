import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  User,
  ArrowLeft,
  Facebook,
  Twitter,
  Share2,
} from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/newsData";

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = slug ? getArticleBySlug(slug) : undefined;

  // If article not found, redirect to news page
  if (!article) {
    navigate("/news");
    return null;
  }

  const relatedNews = getRelatedArticles(slug || "", article.category, 3);

  // Share functions
  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You can add a toast notification here if needed
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Breadcrumb */}
      <section className="pt-20 md:pt-24 pb-4 md:pb-6 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-primary">
              Tin tức
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link to="/news">
            <Button variant="ghost" className="mb-3 md:mb-4 gap-2 p-1.5 md:p-2">
              <ArrowLeft className="w-4 h-4" />
              Quay lại tin tức
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block mb-3 md:mb-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs md:text-sm font-semibold">
              {article.category}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs md:text-sm text-muted-foreground">
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
      <section className="py-6 md:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-4 md:p-6 lg:p-8 xl:p-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-xl mb-6 md:mb-8 lg:mb-10"
                />

                <div
                  className="flex gap-3 md:gap-5 flex-col prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:text-foreground prose-h3:text-base md:prose-h3:text-lg lg:prose-h3:text-xl prose-h3:font-bold prose-h3:mt-5 md:prose-h3:mt-6 lg:prose-h3:mt-8 prose-h3:mb-3 md:prose-h3:mb-4 lg:prose-h3:mb-5 prose-h3:leading-tight prose-h4:text-sm md:prose-h4:text-base lg:prose-h4:text-lg prose-h4:font-bold prose-h4:mt-4 md:prose-h4:mt-5 lg:prose-h4:mt-6 prose-h4:mb-2 md:prose-h4:mb-3 prose-h4:leading-tight prose-h5:text-sm md:prose-h5:text-base prose-h5:font-bold prose-h5:mt-3 md:prose-h5:mt-4 prose-h5:mb-2 prose-h5:leading-tight prose-p:text-muted-foreground prose-p:mb-4 md:prose-p:mb-5 lg:prose-p:mb-6 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:mb-2 md:prose-li:mb-3 prose-li:leading-relaxed prose-strong:text-foreground prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-6 md:mt-8 lg:mt-10 pt-6 md:pt-7 lg:pt-8 border-t">
                  <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Tags:</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 md:px-4 py-1 md:py-1.5 bg-muted text-muted-foreground rounded-full text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 md:mt-7 lg:mt-8 pt-6 md:pt-7 lg:pt-8 border-t">
                  <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
                    Chia sẻ bài viết:
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      onClick={handleShareFacebook}
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      onClick={handleCopyLink}
                    >
                      <Share2 className="w-4 h-4" />
                      Copy link
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              {/* Author Card */}
              <Card className="p-4 md:p-5 lg:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{article.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                      Tác giả
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-0 leading-relaxed">
                  Chuyên gia tư vấn về nhà ở xã hội với hơn 10 năm kinh nghiệm
                </p>
              </Card>

              {/* CTA Card */}
              <Card className="p-4 md:p-5 lg:p-6 bg-gradient-primary text-primary-foreground">
                <h3 className="text-sm md:text-base font-bold mb-2 md:mb-3">Cần tư vấn?</h3>
                <p className="text-xs md:text-sm text-primary-foreground/90 mb-4 md:mb-5 leading-relaxed">
                  Liên hệ với chúng tôi để được tư vấn chi tiết về chính sách và
                  dự án
                </p>
                <Link to="/register">
                  <Button className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground text-sm">
                    Đăng ký ngay
                  </Button>
                </Link>
              </Card>

              {/* Newsletter */}
              <Card className="p-4 md:p-5 lg:p-6">
                <h3 className="text-sm md:text-base font-bold mb-2 md:mb-3">Nhận tin mới nhất</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-5 leading-relaxed">
                  Đăng ký để nhận bản tin về chính sách và dự án mới
                </p>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 border rounded-lg mb-3 md:mb-4 text-xs md:text-sm"
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
      <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 lg:mb-10">
            Tin liên quan
          </h2>
          {relatedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
              {relatedNews.map((news) => (
                <NewsCard 
                  key={news.id} 
                  id={news.id}
                  slug={news.slug}
                  title={news.title}
                  excerpt={news.excerpt}
                  image={news.image}
                  date={news.date}
                  category={news.category}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-6 md:py-8">
              Không có tin tức liên quan.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
