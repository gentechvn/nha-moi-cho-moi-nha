import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageBanner from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "Điều kiện mua nhà",
      questions: [
        {
          question: "Ai có thể đăng ký mua nhà ở xã hội?",
          answer: "Người có hộ khẩu thường trú tại tỉnh/thành phố nơi có dự án, có thu nhập ổn định, chưa có nhà ở hoặc diện tích nhà ở hiện tại dưới mức quy định, đáp ứng các điều kiện theo quy định của pháp luật về nhà ở.",
        },
        {
          question: "Cần những giấy tờ gì để đăng ký?",
          answer: "Cần chuẩn bị: CMND/CCCD, Sổ hộ khẩu, Giấy xác nhận thu nhập, Giấy xác nhận chưa có nhà ở (do UBND phường/xã cấp), Đơn đăng ký mua nhà, và các giấy tờ khác theo yêu cầu của dự án.",
        },
        {
          question: "Thu nhập tối thiểu là bao nhiêu?",
          answer: "Thu nhập bình quân đầu người trong gia đình từ 5-15 triệu đồng/tháng (tùy theo từng địa phương). Cần có giấy xác nhận thu nhập của cơ quan, doanh nghiệp hoặc xác nhận của UBND.",
        },
      ],
    },
    {
      category: "Hỗ trợ vay vốn",
      questions: [
        {
          question: "Có được vay vốn mua nhà ở xã hội không?",
          answer: "Có. Người mua nhà ở xã hội được vay vốn ưu đãi tại các ngân hàng thương mại với lãi suất thấp, thời gian vay dài. Một số chương trình hỗ trợ lãi suất 0% trong 5 năm đầu. Mức vay tối đa 70% giá trị căn hộ.",
        },
        {
          question: "Lãi suất vay là bao nhiêu?",
          answer: "Lãi suất ưu đãi từ 4.8-6.5%/năm tùy theo gói vay và ngân hàng. Một số chương trình của Chính phủ hỗ trợ lãi suất 0% trong 5 năm đầu tiên. Thời gian vay tối đa 15-25 năm.",
        },
        {
          question: "Thủ tục vay vốn có phức tạp không?",
          answer: "Chúng tôi có đội ngũ tư vấn hỗ trợ toàn bộ thủ tục vay vốn miễn phí. Quy trình được đơn giản hóa, thời gian phê duyệt nhanh chóng. Chỉ cần chuẩn bị đầy đủ hồ sơ theo yêu cầu của ngân hàng.",
        },
      ],
    },
    {
      category: "Quyền lợi & Nghĩa vụ",
      questions: [
        {
          question: "Có được chuyển nhượng nhà ở xã hội không?",
          answer: "Sau khi đã được cấp Giấy chứng nhận quyền sở hữu nhà ở và đã ở tối thiểu 5 năm, người mua được quyền chuyển nhượng cho người đủ điều kiện mua nhà ở xã hội theo quy định.",
        },
        {
          question: "Có phải nộp thuế khi mua nhà ở xã hội?",
          answer: "Người mua nhà ở xã hội được miễn thuế thu nhập cá nhân, giảm 50% lệ phí trước bạ. Chỉ phải nộp các loại phí liên quan đến làm sổ đỏ và một số phí dịch vụ khác theo quy định.",
        },
        {
          question: "Thời gian bàn giao nhà là khi nào?",
          answer: "Thời gian bàn giao được ghi rõ trong hợp đồng, thường từ 18-24 tháng kể từ ngày ký hợp đồng. Chúng tôi cam kết đúng tiến độ và thông báo trước 3 tháng để khách hàng chuẩn bị.",
        },
      ],
    },
    {
      category: "Tiện ích & Dịch vụ",
      questions: [
        {
          question: "Có những tiện ích gì trong khu đô thị?",
          answer: "Đầy đủ tiện ích hiện đại: khu vui chơi trẻ em, công viên cây xanh, hồ bơi, phòng gym, siêu thị, trường học, bệnh viện, khu thể thao, bãi đỗ xe. Tất cả tiện ích phục vụ nhu cầu sinh hoạt hàng ngày của cư dân.",
        },
        {
          question: "Có dịch vụ quản lý tòa nhà không?",
          answer: "Có. Dự án có đơn vị quản lý chuyên nghiệp, bảo trì thường xuyên, bảo vệ 24/7, hệ thống camera an ninh, dịch vụ vệ sinh, chăm sóc cây xanh. Phí quản lý khoảng 8,000-12,000 đồng/m²/tháng.",
        },
        {
          question: "Giao thông đi lại có thuận tiện không?",
          answer: "Các dự án đều nằm ở vị trí thuận lợi, gần trục đường chính, dễ dàng di chuyển đến trung tâm thành phố. Có nhiều tuyến xe bus công cộng đi qua, gần các trạm xe bus và ga tàu điện.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <PageBanner
        title="Câu hỏi thường gặp"
        description="Tìm câu trả lời cho các thắc mắc phổ biến về quy trình, điều kiện và quyền lợi khi mua nhà ở xã hội"
        icon={<HelpCircle className="w-8 h-8 text-primary-foreground" />}
      />

      {/* Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, idx) => (
              <Card key={idx} className="p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left text-base font-bold hover:text-primary transition-colors py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card text-center">
              <h3 className="text-xl font-bold mb-3">Không tìm thấy câu trả lời?</h3>
              <p className="text-muted-foreground mb-6">
                Liên hệ với chúng tôi để được tư vấn chi tiết hơn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:1900xxxx">
                  <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    Gọi ngay: 1900 xxxx
                  </button>
                </a>
                <a href="/register">
                  <button className="w-full sm:w-auto px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                    Đăng ký tư vấn
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
