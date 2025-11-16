import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, ClipboardCheck, Home, Phone, ArrowRight, Download, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BuyingGuide = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Kiểm tra điều kiện mua nhà",
      description: "Xác định bạn thuộc nhóm đối tượng được mua và đáp ứng các điều kiện về thu nhập, nơi ở hiện tại",
      details: [
        "Kiểm tra 12 nhóm đối tượng được mua NƠXH",
        "Xác minh thu nhập trung bình không vượt 15 triệu đồng/tháng",
        "Xác nhận không sở hữu nhà ở hoặc đất ở tại nơi đăng ký mua",
        "Chuẩn bị các giấy tờ chứng minh điều kiện"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Đăng ký mua nhà",
      description: "Nộp hồ sơ đăng ký mua nhà ở xã hội tại Văn phòng dự án hoặc online",
      details: [
        "Điền đầy đủ thông tin vào form đăng ký",
        "Chuẩn bị hồ sơ: CMND/CCCD, sổ hộ khẩu, giấy xác nhận thu nhập",
        "Nộp hồ sơ trực tiếp hoặc qua website",
        "Nhận biên nhận hồ sơ và mã số đăng ký"
      ],
      color: "from-secondary/20 to-secondary/5"
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Thẩm định hồ sơ",
      description: "Chờ cơ quan chức năng thẩm định và phê duyệt hồ sơ của bạn",
      details: [
        "Thời gian thẩm định: 15-30 ngày làm việc",
        "Cơ quan chức năng sẽ kiểm tra tính hợp lệ của hồ sơ",
        "Xác minh điều kiện mua nhà của người đăng ký",
        "Nhận thông báo kết quả thẩm định qua SMS/Email"
      ],
      color: "from-accent/20 to-accent/5"
    },
    {
      number: "04",
      icon: Home,
      title: "Chọn căn hộ & Ký hợp đồng",
      description: "Được mời chọn căn hộ theo thứ tự ưu tiên và ký hợp đồng mua bán",
      details: [
        "Nhận thông báo lịch chọn căn hộ",
        "Tham quan thực tế và chọn căn hộ phù hợp",
        "Ký hợp đồng mua bán nhà ở xã hội",
        "Thanh toán đợt 1: 30% giá trị căn hộ (hoặc theo quy định)"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      number: "05",
      icon: FileText,
      title: "Thanh toán & Nhận nhà",
      description: "Hoàn tất thanh toán và làm thủ tục nhận bàn giao căn hộ",
      details: [
        "Thanh toán theo tiến độ: 30% - 30% - 40% (hoặc theo hợp đồng)",
        "Nhận bàn giao căn hộ và chìa khóa",
        "Làm thủ tục cấp sổ hồng theo quy định"
      ],
      color: "from-secondary/20 to-secondary/5"
    }
  ];

  const downloadableForms = [
    {
      number: "01",
      title: "Giấy tờ chứng minh đối tượng được hưởng chính sách hỗ trợ về nhà ở xã hội",
      description: "Mẫu xác nhận đối tượng được mua NOXH (áp dụng cho tất cả trừ đối tượng 7)",
      reference: "Mẫu số 01, Phụ lục I, Thông tư 05/2024/TT-BXD",
      downloadUrl: "/forms/mau-so-01.docx"
    },
    {
      number: "02",
      title: "Giấy tờ chứng minh điều kiện về nhà ở (chưa có nhà ở thuộc sở hữu)",
      description: "Dành cho trường hợp chưa có nhà ở thuộc sở hữu của mình",
      reference: "Mẫu số 02, Phụ lục I, Thông tư 05/2024/TT-BXD",
      downloadUrl: "/forms/mau-so-02.docx"
    },
    {
      number: "03",
      title: "Giấy tờ chứng minh điều kiện về nhà ở (diện tích < 15m²/người)",
      description: "Dành cho trường hợp có nhà ở nhưng diện tích bình quân đầu người thấp hơn 15m² sàn/người",
      reference: "Mẫu số 03, Phụ lục I, Thông tư 05/2024/TT-BXD",
      downloadUrl: "/forms/mau-so-03.docx"
    },
    {
      number: "04",
      title: "Giấy tờ chứng minh điều kiện về thu nhập (có Hợp đồng lao động)",
      description: "Xác nhận thu nhập cho người có Hợp đồng lao động",
      reference: "Mẫu số 04, Phụ lục I, Thông tư 05/2024/TT-BXD",
      downloadUrl: "/forms/mau-so-04.docx"
    },
    {
      number: "05",
      title: "Giấy kê khai về điều kiện thu nhập (không có HĐLĐ)",
      description: "Dành cho đối tượng thu nhập thấp tại khu vực đô thị không có Hợp đồng lao động",
      reference: "Mẫu số 05, Phụ lục I, Thông tư 05/2024/TT-BXD",
      downloadUrl: "/forms/mau-so-05.docx"
    }
  ];

  const documentsByGroup = [
    {
      group: "Đối tượng 1: Người có công với cách mạng",
      description: "Thân nhân liệt sỹ thuộc trường hợp được hỗ trợ cải thiện nhà ở",
      documents: [
        "CCCD (bản chứng thực) - 2 bản (đã kết hôn thì mỗi người 2 bản)",
        "Giấy chứng nhận đăng ký kết hôn (bản chứng thực) - 2 bản (nếu đã kết hôn)",
        "Giấy xác nhận tình trạng hôn nhân (bản chứng thực) - 2 bản (nếu độc thân)",
        "Đơn đăng ký mua NOXH (bản chính) - 1 bản",
        "Xác nhận về đối tượng (bản chứng thực) - 1 bản",
        "Xác nhận về nhà ở (bản chính) - 1 bản (cả vợ/chồng nếu đã kết hôn)"
      ]
    },
    {
      group: "Đối tượng 2, 3, 4: Hộ nghèo, cận nghèo",
      description: "Tại khu vực nông thôn và đô thị",
      documents: [
        "CCCD (bản chứng thực) - 2 bản",
        "Giấy chứng nhận đăng ký kết hôn (bản chứng thực) - 2 bản (nếu đã kết hôn)",
        "Giấy xác nhận tình trạng hôn nhân (bản chứng thực) - 2 bản (nếu độc thân)",
        "Đơn đăng ký mua NOXH (bản chính) - 1 bản",
        "Xác nhận về đối tượng (bản chính) - 1 bản",
        "Xác nhận về nhà ở (bản chính) - 1 bản (cả vợ/chồng nếu đã kết hôn)",
        "Xác nhận về thu nhập (bản chính) - 1 bản (cả vợ/chồng nếu đã kết hôn)"
      ]
    },
    {
      group: "Đối tượng 6: Công nhân, người lao động",
      description: "Đang làm tại doanh nghiệp, hợp tác xã trong/ngoài khu công nghiệp",
      documents: [
        "CCCD (bản chứng thực) - 2 bản",
        "Giấy chứng nhận đăng ký kết hôn (bản chứng thực) - 2 bản (nếu đã kết hôn)",
        "Giấy xác nhận tình trạng hôn nhân (bản chứng thực) - 2 bản (nếu độc thân)",
        "Đơn đăng ký mua NOXH (bản chính) - 1 bản",
        "Xác nhận về đối tượng (bản chính) - 1 bản",
        "Xác nhận về nhà ở (bản chính) - 1 bản",
        "Xác nhận về thu nhập (bản chính) - 1 bản"
      ]
    },
    {
      group: "Đối tượng 7: Lực lượng vũ trang",
      description: "Sĩ quan, quân nhân chuyên nghiệp, công an nhân dân, công chức quốc phòng",
      documents: [
        "CCCD (bản chứng thực) - 2 bản",
        "Giấy chứng nhận đăng ký kết hôn (bản chứng thực) - 1 bản (nếu đã kết hôn)",
        "Giấy xác nhận tình trạng hôn nhân (bản chứng thực) - 1 bản (nếu độc thân)",
        "Đơn đăng ký mua NOXH (bản chính) - 1 bản",
        "Xác nhận đối tượng QĐND hoặc CAND (bản chính) - 1 bản",
        "Xác nhận về nhà ở (bản chính) - 1 bản",
        "Xác nhận về thu nhập (bản chứng thực) - 1 bản"
      ]
    },
    {
      group: "Đối tượng 8: Cán bộ, công chức, viên chức",
      description: "Cán bộ, công chức, viên chức nhà nước",
      documents: [
        "CCCD (bản chứng thực) - 2 bản",
        "Giấy chứng nhận đăng ký kết hôn (bản chứng thực) - 2 bản (nếu đã kết hôn)",
        "Giấy xác nhận tình trạng hôn nhân (bản chứng thực) - 2 bản (nếu độc thân)",
        "Đơn đăng ký mua NOXH (bản chính) - 1 bản",
        "Xác nhận về đối tượng (bản chính) - 1 bản",
        "Xác nhận về nhà ở (bản chính) - 1 bản",
        "Xác nhận về thu nhập (bản chính) - 1 bản",
        "Xác nhận có nhà ở nhưng cách xa nơi làm việc >30km (nếu có) - 1 bản"
      ]
    }
  ];

  const priorityGroups = [
    "Người có công với cách mạng",
    "Gia đình liệt sĩ, thương binh, bệnh binh",
    "Gia đình có hoàn cảnh khó khăn",
    "Người lao động tại khu công nghiệp",
    "Công nhân, viên chức nhà nước"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner 
          title="Hướng Dẫn Mua Nhà" 
          description="Quy trình chi tiết từng bước để sở hữu căn hộ nhà ở xã hội"
        />

        {/* Introduction Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
                5 Bước Đơn Giản Để Sở Hữu Nhà
              </h2>
              <p className="text-muted-foreground text-lg">
                Chúng tôi hướng dẫn bạn từng bước cụ thể trong quy trình mua nhà ở xã hội, 
                giúp bạn dễ dàng hoàn tất thủ tục và sớm có được tổ ấm mới.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${step.color} p-8`}>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <step.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="text-5xl font-black text-primary font-bold">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground mb-6 text-lg">
                            {step.description}
                          </p>
                          
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 group">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-foreground/90">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Forms Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
                  Tải Mẫu Đơn & Giấy Tờ
                </h2>
                <p className="text-muted-foreground text-lg">
                  Download các mẫu đơn và giấy tờ cần thiết để chuẩn bị hồ sơ đăng ký
                </p>
              </div>
              
              <div className="grid gap-4">
                {downloadableForms.map((form, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="flex gap-4 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary">{form.number}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">{form.title}</h3>
                            <p className="text-muted-foreground text-sm mb-1">{form.description}</p>
                            <p className="text-xs text-muted-foreground/70 italic">{form.reference}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="gap-2 whitespace-nowrap"
                          asChild
                        >
                          <a href={form.downloadUrl} download>
                            <Download className="w-4 h-4" />
                            Tải xuống
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-2">Lưu ý quan trọng:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tải mẫu đơn phù hợp với đối tượng của bạn</li>
                      <li>• Điền đầy đủ, chính xác thông tin vào các mẫu</li>
                      <li>• Chuẩn bị bản chính và bản sao công chứng theo yêu cầu</li>
                      <li>• Liên hệ hotline 0982.437.434 nếu cần hỗ trợ điền đơn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents by Group Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
                  Hồ Sơ Chi Tiết Theo Đối Tượng
                </h2>
                <p className="text-muted-foreground text-lg">
                  Danh sách giấy tờ cụ thể cho từng nhóm đối tượng
                </p>
              </div>

              <div className="space-y-6">
                {documentsByGroup.map((item, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b">
                        <div className="flex items-start gap-4">
                          <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-bold text-xl mb-2">{item.group}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="grid md:grid-cols-2 gap-3">
                          {item.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-foreground/90">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Quy định chung:</strong> Tất cả bản sao phải được công chứng theo quy định. 
                  Trường hợp đã kết hôn, vợ và chồng đều phải cung cấp giấy tờ xác nhận về điều kiện nhà ở và thu nhập.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Priority Groups Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-8 text-center gradient-text">
                Các Đối Tượng Được Ưu Tiên
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {priorityGroups.map((group, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="font-medium">{group}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Lưu ý:</strong> Các đối tượng ưu tiên sẽ được xét duyệt và chọn căn hộ trước. 
                  Vui lòng chuẩn bị đầy đủ giấy tờ chứng minh để được hưởng quyền ưu tiên.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 gradient-text">
                Sẵn Sàng Bắt Đầu?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Đăng ký ngay hôm nay để được tư vấn chi tiết và hỗ trợ hoàn thiện hồ sơ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 group">
                  <Link to="/register">
                    Đăng Ký Mua Nhà
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/faq">
                    <Phone className="w-4 h-4" />
                    Câu Hỏi Thường Gặp
                  </Link>
                </Button>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full border">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">Hotline: 0982.437.434</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuyingGuide;
