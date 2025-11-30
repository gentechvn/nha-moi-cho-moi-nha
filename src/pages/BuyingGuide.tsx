import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, ClipboardCheck, Home, Phone, ArrowRight, Download, Users, Scale, AlertCircle, Building2, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const BuyingGuide = () => {
  const legalDocuments = [
    "Luật Nhà ở số 27/2023/QH15 ngày 27/11/2023",
    "Nghị quyết số 201/2025/QH15 ngày 29/5/2025 của Quốc hội",
    "Nghị định số 192/2025/NĐ-CP ngày 01/7/2025 của Chính phủ",
    "Nghị định số 100/2024/NĐ-CP ngày 26/07/2024 của Chính phủ",
    "Thông tư số 05/2024/TT-BXD ngày 31/07/2024 của Bộ Xây Dựng",
    "Nghị định số 261/2025/NĐ-CP ngày 10/10/2025 của Chính phủ sửa đổi, bổ sung"
  ];

  const eligibleGroups = [
    {
      title: "Nhóm 1: Người yếu thế – Chính sách đặc thù",
      items: [
        "Đối tượng 1: Người có công với cách mạng, thân nhân liệt sĩ",
        "Đối tượng 2: Hộ gia đình nghèo, cận nghèo tại khu vực nông thôn",
        "Đối tượng 3: Hộ gia đình nghèo, cận nghèo tại vùng thiên tai",
        "Đối tượng 4: Hộ gia đình nghèo, cận nghèo tại khu vực đô thị"
      ]
    },
    {
      title: "Nhóm 2: Người lao động, thu nhập thấp",
      items: [
        "Đối tượng 5: Người thu nhập thấp tại khu vực đô thị",
        "Đối tượng 6: Công nhân, người lao động tại doanh nghiệp, KCN"
      ]
    },
    {
      title: "Nhóm 3: Công chức, viên chức, lực lượng vũ trang",
      items: [
        "Đối tượng 7: Sĩ quan, quân nhân, công an, cơ yếu",
        "Đối tượng 8: Cán bộ, công chức, viên chức"
      ]
    },
    {
      title: "Nhóm 4: Đối tượng đặc biệt khác",
      items: [
        "Đối tượng 9: Người đã trả lại nhà ở công vụ",
        "Đối tượng 10: Hộ gia đình bị thu hồi đất, giải tỏa",
        "Đối tượng 11: Học sinh, sinh viên",
        "Đối tượng 12: Doanh nghiệp, HTX trong KCN"
      ]
    }
  ];

  const housingConditions = [
    {
      title: "Chưa có nhà ở",
      content: "Chưa có nhà ở thuộc sở hữu của mình tại tỉnh Quảng Trị, chưa được mua/thuê mua NOXH, chưa được hưởng chính sách hỗ trợ nhà ở."
    },
    {
      title: "Diện tích nhỏ",
      content: "Đã có nhà nhưng diện tích bình quân đầu người dưới 15 m²."
    },
    {
      title: "Xa nơi làm việc",
      content: "Có nhà nhưng cách nơi làm việc từ 30 km trở lên (áp dụng cho đối tượng 1-10)."
    }
  ];

  const incomeConditions = [
    {
      group: "Đối tượng 5, 6, 8 (Thu nhập thấp, Công nhân, Công chức)",
      details: [
        "Độc thân: ≤ 20 triệu/tháng",
        "Độc thân nuôi con < 18 tuổi: ≤ 30 triệu/tháng",
        "Đã kết hôn: Tổng 2 vợ chồng ≤ 40 triệu/tháng"
      ]
    },
    {
      group: "Đối tượng 7 (Lực lượng vũ trang)",
      details: [
        "Độc thân: Lương không quá Đại tá",
        "Đã kết hôn (2 người LLVT): ≤ 2 lần lương Đại tá",
        "Đã kết hôn (1 người LLVT): ≤ 1.5 lần lương Đại tá"
      ]
    }
  ];

  const detailedDocuments = [
    {
      value: "dt1",
      label: "Đối tượng 1",
      title: "Người Có Công Với Cách Mạng",
      description: "Thân nhân liệt sỹ thuộc trường hợp được hỗ trợ cải thiện nhà ở",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy chứng nhận người có công với cách mạng hoặc thân nhân liệt sĩ (Bản sao chứng thực).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập: Không bắt buộc đối với nhóm này (tùy dự án, nên chuẩn bị nếu có)."
      ]
    },
    {
      value: "dt234",
      label: "Đối tượng 2, 3, 4",
      title: "Hộ Nghèo, Cận Nghèo",
      description: "Hộ gia đình nghèo, cận nghèo tại khu vực nông thôn hoặc đô thị",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy chứng nhận hộ nghèo hoặc hộ cận nghèo do cơ quan có thẩm quyền cấp (Bản sao chứng thực).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập: Thường được miễn nếu đã có giấy chứng nhận hộ nghèo/cận nghèo."
      ]
    },
    {
      value: "dt5",
      label: "Đối tượng 5",
      title: "Thu Nhập Thấp Đô Thị",
      description: "Người lao động có thu nhập thấp đang sinh sống và làm việc tại khu vực đô thị",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy xác nhận đang làm việc, sinh sống tại khu vực đô thị và có nhu cầu về nhà ở (Bản chính).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập (Mẫu số 04/05): Bản chính. Do cơ quan công tác hoặc UBND cấp. Cả vợ và chồng (nếu đã kết hôn)."
      ]
    },
    {
      value: "dt6",
      label: "Đối tượng 6",
      title: "Công Nhân, Người Lao Động",
      description: "Đang làm việc tại doanh nghiệp, hợp tác xã trong và ngoài khu công nghiệp",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy xác nhận đang làm việc tại doanh nghiệp, hợp tác xã (Bản chính).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập (Mẫu số 04): Bản chính. Do doanh nghiệp cấp. Cả vợ và chồng (nếu đã kết hôn)."
      ]
    },
    {
      value: "dt7",
      label: "Đối tượng 7",
      title: "Lực Lượng Vũ Trang",
      description: "Sĩ quan, quân nhân, công an, cơ yếu hưởng lương từ ngân sách nhà nước",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy xác nhận đối tượng theo mẫu của Bộ Quốc phòng hoặc Bộ Công an (Bản chính).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập: Bản chính. Xác nhận lương không vượt quá cấp bậc Đại tá. Cả vợ và chồng (nếu đã kết hôn)."
      ]
    },
    {
      value: "dt8",
      label: "Đối tượng 8",
      title: "Cán Bộ, Công Chức",
      description: "Cán bộ, công chức, viên chức nhà nước",
      commonDocs: [
        "Căn cước công dân (CCCD): Bản sao chứng thực (2 bản). Nếu đã kết hôn: Cả vợ và chồng.",
        "Giấy tờ về hôn nhân: Đăng ký kết hôn (2 bản sao chứng thực) hoặc Xác nhận độc thân (2 bản).",
        "Đơn đăng ký mua nhà ở xã hội (Mẫu số 01): Bản chính.",
      ],
      specificDocs: [
        "Giấy xác nhận là cán bộ, công chức, viên chức (Bản chính).",
        "Giấy xác nhận về nhà ở (Mẫu số 02/03): Bản chính. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận về thu nhập (Mẫu số 04): Bản chính. Do cơ quan cấp. Cả vợ và chồng (nếu đã kết hôn).",
        "Giấy xác nhận khoảng cách >30km (nếu áp dụng): Bản chính."
      ]
    }
  ];

  const processSteps = [
    { title: "Bước 1: Kiểm Tra Điều Kiện", desc: "Xác định đối tượng, nhà ở, thu nhập. Liên hệ BQL nếu cần tư vấn." },
    { title: "Bước 2: Chuẩn Bị Hồ Sơ", desc: "Chuẩn bị hồ sơ chung và hồ sơ riêng. Công chứng giấy tờ." },
    { title: "Bước 3: Nộp Hồ Sơ", desc: "Nộp tại địa chỉ công bố. Nhận giấy tiếp nhận." },
    { title: "Bước 4: Chờ Xét Duyệt", desc: "15-30 ngày. Bổ sung hồ sơ nếu được yêu cầu." },
    { title: "Bước 5: Chọn Căn & Ký HĐ", desc: "Chọn căn hộ, ký hợp đồng mua bán/thuê mua." },
    { title: "Bước 6: Thanh Toán & Nhận Nhà", desc: "Thanh toán theo tiến độ. Nhận bàn giao và làm sổ hồng." },
    { title: "Bước 7: Hậu Mãi", desc: "Hoàn tất thanh toán, đăng ký biến động dân cư." }
  ];

  const importantNotes = [
    { title: "Hộ Gia Đình", content: "Bao gồm vợ/chồng, cha mẹ, con cái có tên trong hộ khẩu/thường trú." },
    { title: "Thu Nhập Độc Thân Nuôi Con", content: "Trần thu nhập tăng lên 30 triệu/tháng." },
    { title: "Thời Gian Thu Nhập", content: "Tính 12 tháng liền kề trước khi xác nhận." },
    { title: "Lao Động Tự Do", content: "Xin xác nhận thu nhập tại UBND xã/phường." },
    { title: "Chuyển Nhượng", content: "Lưu ý quy định hạn chế chuyển nhượng trong thời gian đầu." }
  ];

  const contactInfo = {
    address: "PG08A – Đường Lê Trực – Phường Đồng Hới – Tỉnh Quảng Trị",
    phone: "0982.437.434",
    note: "Khuyến khích gửi ảnh/scan giấy tờ qua Zalo để được tư vấn trước."
  };

  const downloadableForms = [
    {
      number: "01",
      title: "Đơn đăng ký mua, thuê mua, thuê nhà ở xã hội",
      description: "Mẫu đơn đăng ký chính thức cho người mua",
      reference: "Mẫu số 01",
      downloadUrl: "/forms/mau-so-01.docx"
    },
    {
      number: "01",
      title: "Giấy tờ chứng minh đối tượng được hưởng chính sách hỗ trợ về nhà ở xã hội",
      description: "Giấy tờ xác nhận đối tượng ưu tiên",
      reference: "Mẫu số 01 (Giấy tờ chứng minh)",
      downloadUrl: "/forms/mau-so-1.1.docx"
    },
    {
      number: "02",
      title: "Giấy tờ chứng minh điều kiện về nhà ở (chưa có nhà ở)",
      description: "Để được mua, thuê mua NOXH/nhà ở cho LLVT nhân dân (trường hợp chưa có nhà ở thuộc sở hữu của mình)",
      reference: "Mẫu số 02",
      downloadUrl: "/forms/mau-so-02.docx"
    },
    {
      number: "03",
      title: "Giấy tờ chứng minh điều kiện về nhà ở (diện tích < 15m²/người)",
      description: "Để được mua, thuê mua NOXH/nhà ở cho LLVT nhân dân (trường hợp có nhà ở nhưng diện tích bình quân đầu người thấp hơn 15m² sàn/người)",
      reference: "Mẫu số 03",
      downloadUrl: "/forms/mau-so-03.docx"
    },
    {
      number: "04",
      title: "Giấy tờ chứng minh điều kiện về thu nhập (có Hợp đồng lao động)",
      description: "Để được mua, thuê mua nhà ở xã hội (trường hợp có Hợp đồng lao động)",
      reference: "Mẫu số 04",
      downloadUrl: "/forms/mau-so-04.docx"
    },
    {
      number: "05",
      title: "Giấy kê khai về điều kiện thu nhập (không có HĐLĐ)",
      description: "Để được mua, thuê mua nhà ở xã hội đối với đối tượng thu nhập thấp tại khu vực đô thị (trường hợp không có hợp đồng lao động)",
      reference: "Mẫu số 05",
      downloadUrl: "/forms/mau-so-05.docx"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Hướng Dẫn Mua Nhà"
          description="Cẩm nang chi tiết quy trình, điều kiện và hồ sơ mua nhà ở xã hội"
        />

        <div className="container mx-auto px-4 py-16 space-y-20 max-w-7xl">

          {/* Section 1: Legal Basis */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  Căn Cứ Pháp Lý
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Các văn bản pháp luật điều chỉnh nhà ở xã hội</p>
            </div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-orange-50/50 backdrop-blur">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {legalDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-white/80 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-x-1">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className={doc.includes("261/2025/NĐ-CP") ? "font-bold text-yellow-700" : "text-gray-700"}>{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <p className="text-sm text-yellow-800 italic flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Văn bản pháp luật được cập nhật đến ngày 10/10/2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: 12 Eligible Groups */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  12 Đối Tượng Được Mua Nhà Ở Xã Hội
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Các nhóm đối tượng đủ điều kiện mua nhà ở xã hội</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {eligibleGroups.map((group, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-0 bg-white rounded-xl shadow-lg overflow-hidden">
                  <AccordionTrigger className="text-lg font-semibold text-left px-6 py-5 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-transparent transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span>{group.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 bg-gradient-to-br from-yellow-50/30 to-transparent">
                    <ul className="space-y-2 pl-4">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Section 3: Conditions */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <ClipboardCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  Điều Kiện Được Hưởng Chính Sách
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Các điều kiện cần đáp ứng để được mua nhà ở xã hội</p>
            </div>
            <Tabs defaultValue="housing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-white shadow-lg rounded-xl">
                <TabsTrigger value="housing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white rounded-lg py-3 font-semibold">Điều Kiện Về Nhà Ở</TabsTrigger>
                <TabsTrigger value="income" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white rounded-lg py-3 font-semibold">Điều Kiện Về Thu Nhập</TabsTrigger>
              </TabsList>

              <TabsContent value="housing">
                <div className="grid md:grid-cols-3 gap-6">
                  {housingConditions.map((cond, idx) => (
                    <Card key={idx} className="h-full border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-xl bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent flex items-center gap-2">
                          <Home className="w-6 h-6 text-yellow-600" />
                          {cond.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{cond.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="income">
                <div className="grid md:grid-cols-2 gap-6">
                  {incomeConditions.map((cond, idx) => (
                    <Card key={idx} className="h-full border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50/30 hover:shadow-2xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">{cond.group}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {cond.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/50">
                              <Wallet className="w-4 h-4 text-yellow-600" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Section 4: Detailed Documents (Unified) */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  Hồ Sơ Chi Tiết Theo Đối Tượng
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Danh sách hồ sơ cần chuẩn bị cho từng đối tượng</p>
            </div>
            <Tabs defaultValue="dt1" className="w-full">
              <div className="overflow-x-auto pb-4 mb-6">
                <TabsList className="w-max bg-white shadow-lg rounded-xl p-1.5 flex gap-1">
                  {detailedDocuments.map((doc) => (
                    <TabsTrigger
                      key={doc.value}
                      value={doc.value}
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white rounded-lg px-4 py-2 font-semibold transition-all"
                    >
                      {doc.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {detailedDocuments.map((doc) => (
                <TabsContent key={doc.value} value={doc.value}>
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-yellow-50/20 to-white overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500"></div>
                    <CardHeader className="bg-gradient-to-br from-yellow-50/50 to-transparent pb-6">
                      <CardTitle className="text-3xl bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent flex items-center gap-3">
                        <FileText className="w-8 h-8 text-yellow-600" />
                        {doc.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg mt-2">{doc.description}</p>
                    </CardHeader>
                    <CardContent className="pt-8 pb-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Common Documents Column */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-bold text-xl text-gray-800">
                              Hồ Sơ Chung (Bắt Buộc)
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {doc.commonDocs.map((item, i) => (
                              <div key={i} className="group p-4 bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1">
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specific Documents Column */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-bold text-xl text-gray-800">
                              Hồ Sơ Riêng (Theo Đối Tượng)
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {doc.specificDocs.map((item, i) => (
                              <div key={i} className="group p-4 bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1">
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Section 6: Process */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  Quy Trình Đăng Ký
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">7 bước đơn giản để sở hữu nhà ở xã hội</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="h-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Downloadable Forms */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r text-yellow-600 bg-clip-text text-transparent">
                  Tải Mẫu Đơn & Giấy Tờ
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Tải xuống các mẫu đơn và giấy tờ cần thiết</p>
            </div>
            <div className="grid gap-4">
              {downloadableForms.map((form, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-r from-white to-yellow-50/30 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                            <span className="text-lg font-bold text-white">{form.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-gray-800">{form.title}</h3>
                          <p className="text-gray-600 text-sm mb-1">{form.description}</p>
                          <p className="text-xs text-gray-500 italic">{form.reference}</p>
                        </div>
                      </div>
                      <Button className="gap-2 whitespace-nowrap bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-lg" asChild>
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
          </section>

          {/* Section 8: Important Notes */}
          <section className="scroll-mt-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Lưu Ý Quan Trọng
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Những điều cần lưu ý khi đăng ký mua nhà</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantNotes.map((note, idx) => (
                <Card key={idx} className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-orange-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      {note.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{note.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 9: Contact */}
          <section className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 opacity-95"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative p-12 text-center text-gray-900">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cần Hỗ Trợ Tư Vấn?</h2>
                <p className="text-xl mb-10 text-gray-800">
                  Đội ngũ tư vấn của chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn về hồ sơ và thủ tục mua nhà.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all">
                    <Phone className="w-8 h-8 text-gray-900 mx-auto mb-3" />
                    <p className="text-sm text-gray-800 mb-2">Hotline</p>
                    <p className="font-bold text-2xl text-gray-900">{contactInfo.phone}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all">
                    <Home className="w-8 h-8 text-gray-900 mx-auto mb-3" />
                    <p className="text-sm text-gray-800 mb-2">Địa chỉ</p>
                    <p className="font-semibold text-gray-900">{contactInfo.address}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-800 italic mb-8 bg-white/20 p-4 rounded-xl inline-block">{contactInfo.note}</p>
                <div>
                  <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-xl transition-all hover:scale-105" asChild>
                    <Link to="/contact">Liên Hệ Ngay</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyingGuide;
