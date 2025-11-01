import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPreview = () => {
  const faqs = [
    {
      question: "Điều kiện để được mua nhà ở xã hội là gì?",
      answer: "Để được mua nhà ở xã hội, bạn cần đáp ứng các điều kiện: (1) Có hộ khẩu thường trú tại địa phương nơi có dự án, (2) Thu nhập bình quân đầu người dưới mức quy định, (3) Chưa có nhà ở hoặc đang ở trong nhà có diện tích nhỏ hơn quy định, (4) Chưa được mua nhà ở xã hội trước đây."
    },
    {
      question: "Tôi cần chuẩn bị những giấy tờ gì để đăng ký?",
      answer: "Hồ sơ đăng ký bao gồm: (1) Đơn đăng ký mua nhà ở xã hội, (2) Bản sao giấy tờ tùy thân, (3) Sổ hộ khẩu hoặc giấy tờ chứng minh cư trú, (4) Giấy xác nhận thu nhập, (5) Giấy tờ chứng minh tình trạng nhà ở hiện tại."
    },
    {
      question: "Thời gian chờ nhận nhà là bao lâu?",
      answer: "Thời gian từ khi ký hợp đồng đến khi nhận nhà thường dao động từ 18-24 tháng tùy theo tiến độ thi công của từng dự án. Chúng tôi cam kết bàn giao đúng tiến độ và thông báo rõ ràng về lịch trình."
    },
    {
      question: "Có được hỗ trợ vay vốn không và lãi suất là bao nhiêu?",
      answer: "Có, khách hàng mua nhà ở xã hội được hỗ trợ vay ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu (theo chính sách của nhà nước). Sau đó lãi suất khoảng 4.8-6%/năm tùy ngân hàng."
    },
    {
      question: "Tôi có thể bán lại nhà ở xã hội không?",
      answer: "Theo quy định, người mua nhà ở xã hội phải đăng ký thường trú và ở ít nhất 5 năm trước khi được phép chuyển nhượng. Khi chuyển nhượng cần thông báo cho cơ quan quản lý và ưu tiên bán cho đối tượng đủ điều kiện mua nhà ở xã hội."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Header */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">❓ FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Câu Hỏi <span className="text-primary">Thường Gặp</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tìm câu trả lời nhanh chóng cho các thắc mắc phổ biến nhất về nhà ở xã hội. 
              Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-xl shadow-md border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Câu hỏi thường gặp</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md border border-border/50">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-accent mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Hỗ trợ khách hàng</p>
              </div>
            </div>

            <Link to="/faq">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-xl">
                Xem tất cả câu hỏi
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-md border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
