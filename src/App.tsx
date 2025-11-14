import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ApartmentDetail from "./pages/ApartmentDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BuyingGuide from "./pages/BuyingGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MetaTags = () => {
  useEffect(() => {
    // Set document title
    document.title =
      "Nhà Ở Xã Hội - Mơ ước có thật | Giải pháp nhà ở phải chăng";

    // Helper function to set or update meta tag
    const setMetaTag = (
      name: string,
      content: string,
      attribute: string = "name"
    ) => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Set meta tags
    setMetaTag(
      "description",
      "Khám phá các dự án nhà ở xã hội chất lượng cao, giá cả phải chăng. Hỗ trợ vay vốn ưu đãi lên đến 70%. Đăng ký tư vấn miễn phí ngay hôm nay!"
    );
    setMetaTag("author", "Nhà Ở Xã Hội");
    setMetaTag(
      "keywords",
      "nhà ở xã hội, mua nhà giá rẻ, chung cư xã hội, vay mua nhà, hỗ trợ mua nhà, căn hộ giá rẻ"
    );

    // Set Open Graph tags
    setMetaTag("og:title", "Nhà Ở Xã Hội - Mơ ước có thật", "property");
    setMetaTag(
      "og:description",
      "Giải pháp nhà ở chất lượng cao, giá cả phải chăng cho mọi gia đình Việt",
      "property"
    );
    setMetaTag("og:type", "website", "property");
    setMetaTag("og:image", "/src/assets/logo.png", "property");

    // Set Twitter tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:site", "@genzmth_dev");
    setMetaTag("twitter:image", "/src/assets/logo.png");
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MetaTags />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/apartments/:type" element={<ApartmentDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/buying-guide" element={<BuyingGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
