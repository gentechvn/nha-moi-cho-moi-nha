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
      category: "Đối tượng được mua nhà",
      questions: [
        {
          question: "Ai có thể đăng ký mua nhà ở xã hội?",
          answer: [
            "Theo Điều 76 Luật Nhà ở 2023, có 12 nhóm đối tượng được mua nhà ở xã hội:",
            "• Người có công với cách mạng, thân nhân liệt sĩ",
            "• Hộ gia đình nghèo, cận nghèo tại khu vực nông thôn",
            "• Hộ gia đình nghèo, cận nghèo vùng thiên tai",
            "• Hộ gia đình nghèo, cận nghèo tại đô thị",
            "• Người thu nhập thấp tại đô thị",
            "• Công nhân, người lao động tại doanh nghiệp, hợp tác xã",
            "• Sĩ quan, quân nhân chuyên nghiệp, hạ sĩ quan lực lượng vũ trang, công chức công an, viên chức quốc phòng",
            "• Cán bộ, công chức, viên chức",
            "• Người đã trả lại nhà ở công vụ",
            "• Hộ gia đình bị thu hồi đất",
            "• Học sinh, sinh viên các trường đại học, cao đẳng, dạy nghề",
            "• Doanh nghiệp, hợp tác xã trong khu công nghiệp"
          ],
        },
        {
          question: "Điều kiện về nhà ở là gì?",
          answer: [
            "Người mua phải đáp ứng một trong các điều kiện sau:",
            "• Chưa có nhà ở thuộc sở hữu của mình tại tỉnh Quảng Trị",
            "• Chưa được mua hoặc thuê mua nhà ở xã hội",
            "• Chưa được hưởng chính sách hỗ trợ nhà ở dưới mọi hình thức tại tỉnh Quảng Trị",
            "• Đã có nhà ở nhưng diện tích bình quân đầu người dưới 15m² (bao gồm vợ/chồng, cha/mẹ, cha/mẹ vợ/chồng, con cái và có thường trú tại căn nhà đó)",
            "",
            "Lưu ý: Các đối tượng nhóm 1-10 có nhà ở nhưng cách xa địa điểm làm việc 30km trở lên và đang sinh sống, làm việc tại Quảng Trị thì vẫn đủ điều kiện."
          ],
        },
        {
          question: "Điều kiện về thu nhập là bao nhiêu?",
          answer: [
            "Đối với nhóm 5, 6, 8 (người thu nhập thấp, công nhân, cán bộ, công chức, viên chức):",
            "• Độc thân: không quá 20 triệu/tháng",
            "• Độc thân nuôi con dưới 18 tuổi: không quá 30 triệu/tháng",
            "• Đã kết hôn: tổng thu nhập 2 vợ chồng không quá 40 triệu/tháng",
            "",
            "Đối với nhóm 7 (lực lượng vũ trang):",
            "• Độc thân: không quá thu nhập của Đại tá",
            "• Đã kết hôn (cả 2 cùng trong lực lượng): không quá 2 lần thu nhập Đại tá",
            "• Đã kết hôn (chỉ 1 người trong lực lượng): không quá 1,5 lần thu nhập Đại tá",
            "",
            "Thời gian xác định: 12 tháng liền kề từ thời điểm cơ quan có thẩm quyền xác nhận."
          ],
        },
      ],
    },
    {
      category: "Căn cứ pháp lý",
      questions: [
        {
          question: "Dự án được xây dựng dựa trên những văn bản pháp lý nào?",
          answer: [
            "Dự án tuân thủ các văn bản pháp lý sau:",
            "• Nghị quyết 201/2025/QH15 ngày 29/5/2025 về thí điểm cơ chế, chính sách đặc thù phát triển nhà ở xã hội",
            "• Luật Nhà ở số 27/2023/QH15 ngày 27/11/2023",
            "• Nghị định 192/2025/NĐ-CP ngày 01/7/2025 quy định chi tiết Nghị quyết 201",
            "• Nghị định 100/2024/NĐ-CP ngày 26/07/2024 về phát triển và quản lý nhà ở xã hội",
            "• Thông tư 05/2024/TT-BXD ngày 31/07/2024",
            "• Nghị định 261/2025/NĐ-CP ngày 10/10/2025 sửa đổi Nghị định 100/2024"
          ],
        },
        {
          question: "Thông tin dự án cụ thể?",
          answer: [
            "Tên dự án: Khu nhà ở xã hội trung tâm thành phố Đồng Hới",
            "",
            "Chủ đầu tư: Công ty TNHH Nhà ở xã hội Trung tâm Đồng Hới",
            "",
            "Nhà đầu tư: Liên danh Công ty CP Phúc Thành Quảng Bình – Công ty TNHH Thương mại và Xây dựng Toàn Cầu",
            "",
            "Quy mô: 2 khối chung cư 15 tầng với 560 căn hộ, diện tích từ 36,1m² đến 74,3m²",
            "",
            "Văn phòng: PG08A – Đường Lê Trực – Phường Đồng Hới – Quảng Trị",
            "",
            "Điện thoại: 0982.437.434"
          ],
        },
      ],
    },
    {
      category: "Hỗ trợ vay vốn",
      questions: [
        {
          question: "Có được vay vốn mua nhà ở xã hội không?",
          answer: [
            "Có. Người mua nhà ở xã hội được hỗ trợ vay vốn ưu đãi với các đặc điểm:",
            "• Vay tại các ngân hàng thương mại với lãi suất thấp",
            "• Thời gian vay dài, phù hợp với khả năng trả nợ",
            "• Một số chương trình hỗ trợ lãi suất 0% trong 5 năm đầu",
            "• Mức vay tối đa 70% giá trị căn hộ"
          ],
        },
        {
          question: "Lãi suất vay là bao nhiêu?",
          answer: [
            "Lãi suất ưu đãi từ 4.8-6.5%/năm tùy theo gói vay và ngân hàng",
            "",
            "Ưu đãi đặc biệt:",
            "• Một số chương trình của Chính phủ hỗ trợ lãi suất 0% trong 5 năm đầu tiên",
            "• Thời gian vay tối đa 15-25 năm",
            "• Lãi suất cố định trong giai đoạn đầu"
          ],
        },
        {
          question: "Thủ tục vay vốn có phức tạp không?",
          answer: [
            "Thủ tục vay vốn đã được đơn giản hóa tối đa:",
            "• Chúng tôi có đội ngũ tư vấn hỗ trợ toàn bộ thủ tục vay vốn miễn phí",
            "• Quy trình được đơn giản hóa, thời gian phê duyệt nhanh chóng",
            "• Chỉ cần chuẩn bị đầy đủ hồ sơ theo yêu cầu của ngân hàng",
            "• Hỗ trợ khách hàng từ khâu chuẩn bị hồ sơ đến giải ngân"
          ],
        },
      ],
    },
    {
      category: "Quyền lợi & Nghĩa vụ",
      questions: [
        {
          question: "Có được chuyển nhượng nhà ở xã hội không?",
          answer: [
            "Được. Nhưng phải đáp ứng các điều kiện sau:",
            "• Đã được cấp Giấy chứng nhận quyền sở hữu nhà ở",
            "• Đã ở tối thiểu 5 năm",
            "• Chỉ được chuyển nhượng cho người đủ điều kiện mua nhà ở xã hội theo quy định",
            "• Tuân thủ các quy định pháp luật về chuyển nhượng nhà ở"
          ],
        },
        {
          question: "Có phải nộp thuế khi mua nhà ở xã hội?",
          answer: [
            "Người mua nhà ở xã hội được hưởng nhiều ưu đãi về thuế phí:",
            "• Miễn thuế thu nhập cá nhân",
            "• Giảm 50% lệ phí trước bạ",
            "• Chỉ phải nộp các loại phí liên quan đến làm sổ đỏ",
            "• Một số phí dịch vụ khác theo quy định"
          ],
        },
        {
          question: "Thời gian bàn giao nhà là khi nào?",
          answer: [
            "Thời gian bàn giao được ghi rõ trong hợp đồng:",
            "• Thường từ 18-24 tháng kể từ ngày ký hợp đồng",
            "• Chúng tôi cam kết đúng tiến độ",
            "• Thông báo trước 3 tháng để khách hàng chuẩn bị",
            "• Bàn giao đầy đủ, theo đúng cam kết trong hợp đồng"
          ],
        },
      ],
    },
    {
      category: "Tiện ích & Dịch vụ",
      questions: [
        {
          question: "Có những tiện ích gì trong khu đô thị?",
          answer: [
            "Khu đô thị được trang bị đầy đủ tiện ích hiện đại:",
            "• Khu vui chơi trẻ em an toàn",
            "• Công viên cây xanh rộng rãi",
            "• Hồ bơi và phòng gym",
            "• Siêu thị, trung tâm thương mại",
            "• Trường học các cấp",
            "• Bệnh viện, trạm y tế",
            "• Khu thể thao đa năng",
            "• Bãi đỗ xe rộng rãi",
            "",
            "Tất cả tiện ích phục vụ nhu cầu sinh hoạt hàng ngày của cư dân."
          ],
        },
        {
          question: "Có dịch vụ quản lý tòa nhà không?",
          answer: [
            "Có. Dự án có đơn vị quản lý chuyên nghiệp với các dịch vụ:",
            "• Bảo trì thường xuyên các hạng mục chung",
            "• Bảo vệ 24/7",
            "• Hệ thống camera an ninh hiện đại",
            "• Dịch vụ vệ sinh chung",
            "• Chăm sóc cây xanh, cảnh quan",
            "• Quản lý bãi đỗ xe",
            "",
            "Phí quản lý: Khoảng 8,000-12,000 đồng/m²/tháng"
          ],
        },
        {
          question: "Giao thông đi lại có thuận tiện không?",
          answer: [
            "Các dự án đều có vị trí giao thông thuận lợi:",
            "• Nằm gần trục đường chính",
            "• Dễ dàng di chuyển đến trung tâm thành phố",
            "• Có nhiều tuyến xe bus công cộng đi qua",
            "• Gần các trạm xe bus và ga tàu điện",
            "• Kết nối với các tuyến đường cao tốc"
          ],
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
                        <div className="space-y-2">
                          {Array.isArray(item.answer) ? (
                            item.answer.map((line, lineIdx) => (
                              <p key={lineIdx} className={line === "" ? "h-2" : ""}>
                                {line}
                              </p>
                            ))
                          ) : (
                            <p>{item.answer}</p>
                          )}
                        </div>
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
                <a href="tel:0982437434">
                  <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    Gọi ngay: 0982.437.434
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
