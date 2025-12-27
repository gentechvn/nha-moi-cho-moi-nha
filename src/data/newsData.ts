export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "chinh-sach-moi-ho-tro-mua-nha-o-xa-hoi-2024",
    title: "Chính sách mới hỗ trợ mua nhà ở xã hội 2024",
    category: "Chính sách",
    date: "01/11/2025",
    author: "Duy Sơn",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "Chính phủ công bố gói hỗ trợ vay vốn ưu đãi lên đến 70% giá trị căn hộ với lãi suất 0% trong 5 năm đầu...",
    content: `
      <h5>Giới thiệu chính sách mới</h5>
      <p>Ngày 10/01/2024, Chính phủ đã chính thức công bố gói chính sách hỗ trợ mua nhà ở xã hội năm 2024, mang đến nhiều ưu đãi đáng kể cho người dân có nhu cầu mua nhà. Đây được xem là một trong những chính sách an sinh xã hội quan trọng nhất trong năm.</p>

      <h5>Các ưu đãi chính</h5>
      
      <h5>1. Hỗ trợ lãi suất vay 0%</h5>
      <p>Người mua nhà ở xã hội sẽ được hưởng lãi suất 0% trong 5 năm đầu tiên khi vay vốn mua nhà. Sau 5 năm, lãi suất sẽ được điều chỉnh theo lãi suất thị trường nhưng vẫn ưu đãi hơn 2-3% so với lãi suất thương mại thông thường.</p>

      <h5>2. Tăng mức cho vay lên 70%</h5>
      <p>Mức cho vay tối đa được nâng lên 70% giá trị căn hộ, thay vì 50% như trước đây. Điều này giúp người mua nhà giảm bớt gánh nặng tài chính ban đầu.</p>

      <h5>3. Miễn giảm thuế và phí</h5>
      <p>Người mua nhà ở xã hội được miễn thuế thu nhập cá nhân, giảm 50% lệ phí trước bạ. Ngoài ra, các khoản phí liên quan đến thủ tục pháp lý cũng được giảm đáng kể.</p>

      <h5>4. Ưu tiên cho nhóm đối tượng</h5>
      <ul>
        <li>Gia đình có công với cách mạng</li>
        <li>Người có thu nhập thấp</li>
        <li>Công nhân khu công nghiệp</li>
        <li>Người trẻ mới lập gia đình</li>
      </ul>

      <h5>Điều kiện áp dụng</h5>
      
      <p>Để được hưởng các ưu đãi trên, người mua nhà cần đáp ứng các điều kiện sau:</p>
      
      <ul>
        <li>Có hộ khẩu thường trú tại tỉnh/thành phố nơi có dự án</li>
        <li>Thu nhập bình quân đầu người trong gia đình từ 5-15 triệu đồng/tháng</li>
        <li>Chưa có nhà ở hoặc diện tích nhà ở hiện tại dưới 15m²/người</li>
        <li>Có giấy xác nhận thu nhập ổn định</li>
        <li>Đáp ứng các điều kiện khác theo quy định của pháp luật</li>
      </ul>

      <h5>Thủ tục đăng ký</h5>
      
      <p>Quy trình đăng ký được đơn giản hóa với 5 bước cơ bản:</p>
      
      <ol>
        <li><strong>Bước 1:</strong> Chuẩn bị hồ sơ (CMND, sổ hộ khẩu, giấy xác nhận thu nhập, giấy xác nhận chưa có nhà)</li>
        <li><strong>Bước 2:</strong> Nộp hồ sơ trực tuyến hoặc trực tiếp tại Sở Xây dựng</li>
        <li><strong>Bước 3:</strong> Chờ thẩm định (thời gian 7-10 ngày làm việc)</li>
        <li><strong>Bước 4:</strong> Nhận thông báo kết quả và chọn căn hộ</li>
        <li><strong>Bước 5:</strong> Ký hợp đồng và hoàn tất thủ tục vay vốn</li>
      </ol>

      <h5>Ý nghĩa của chính sách</h5>
      
      <p>Chính sách này được kỳ vọng sẽ giúp hàng nghìn gia đình có thu nhập thấp và trung bình có cơ hội sở hữu nhà ở. Theo ước tính, trong năm 2024, sẽ có khoảng 30,000 căn hộ nhà ở xã hội được bàn giao, đáp ứng nhu cầu nhà ở của khoảng 100,000 người dân.</p>

      <h5>Lời khuyên cho người mua nhà</h5>
      
      <p>Để tận dụng tốt nhất chính sách này, chúng tôi khuyên người dân nên:</p>
      
      <ul>
        <li>Chuẩn bị đầy đủ hồ sơ ngay từ đầu để rút ngắn thời gian thẩm định</li>
        <li>Tìm hiểu kỹ về dự án trước khi quyết định mua</li>
        <li>Tính toán kỹ khả năng tài chính để đảm bảo có thể trả nợ vay đều đặn</li>
        <li>Tham khảo ý kiến từ chuyên gia về thủ tục pháp lý</li>
        <li>Đăng ký sớm để có nhiều lựa chọn căn hộ</li>
      </ul>

      <h5>Kết luận</h5>
      
      <p>Chính sách hỗ trợ mua nhà ở xã hội 2024 là một bước tiến lớn trong việc giải quyết vấn đề nhà ở cho người dân. Với những ưu đãi hấp dẫn, đây là thời điểm tốt để các gia đình thực hiện ước mơ có nhà của mình.</p>

      <p>Để biết thêm chi tiết và được tư vấn, quý khách hàng vui lòng đăng ký tư vấn trực tuyến trên website.</p>
    `,
    tags: ["Chính sách", "Nhà ở xã hội", "2024"],
  },
  {
    id: 3,
    slug: "huong-dan-thu-tuc-dang-ky-mua-nha-o-xa-hoi",
    title: "Hướng dẫn thủ tục đăng ký mua nhà ở xã hội",
    category: "Hướng dẫn",
    date: "10/11/2025",
    author: "Duy Sơn",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "Quy trình đăng ký mua nhà ở xã hội đơn giản với 5 bước cơ bản. Người dân có thể đăng ký trực tuyến...",
    content: `
      <h5>Giới thiệu</h5>
      <p>Việc đăng ký mua nhà ở xã hội hiện đã được đơn giản hóa rất nhiều. Người dân có thể thực hiện đăng ký trực tuyến hoặc trực tiếp tại các cơ quan có thẩm quyền. Bài viết này sẽ hướng dẫn chi tiết từng bước.</p>

      <h5>Bước 1: Chuẩn bị hồ sơ</h5>
      <p>Trước khi đăng ký, bạn cần chuẩn bị đầy đủ các giấy tờ sau:</p>
      <ul>
        <li>Bản sao CMND/CCCD (có công chứng)</li>
        <li>Bản sao sổ hộ khẩu (có công chứng)</li>
        <li>Giấy xác nhận thu nhập (do cơ quan, đơn vị nơi làm việc cấp)</li>
        <li>Giấy xác nhận chưa có nhà ở hoặc diện tích nhà ở hiện tại dưới 15m²/người</li>
        <li>Giấy tờ chứng minh đối tượng ưu tiên (nếu có)</li>
        <li>Ảnh 3x4 (2 tấm)</li>
      </ul>

      <h5>Bước 2: Nộp hồ sơ</h5>
      <h5>Nộp trực tuyến:</h5>
      <ol>
        <li>Truy cập website của Sở Xây dựng</li>
        <li>Đăng ký tài khoản và xác thực</li>
        <li>Điền đầy đủ thông tin vào form đăng ký</li>
        <li>Upload các giấy tờ đã chuẩn bị</li>
        <li>Gửi hồ sơ và nhận mã số đăng ký</li>
      </ol>

      <h5>Nộp trực tiếp:</h5>
      <p>Bạn có thể nộp hồ sơ trực tiếp tại:</p>
      <ul>
        <li>Sở Xây dựng tỉnh/thành phố</li>
        <li>Phòng Quản lý nhà ở - Sở Xây dựng</li>
        <li>Các điểm tiếp nhận hồ sơ tại quận/huyện</li>
      </ul>

      <h5>Bước 3: Thẩm định hồ sơ</h5>
      <p>Thời gian thẩm định hồ sơ thường từ 7-10 ngày làm việc. Trong thời gian này, cơ quan có thẩm quyền sẽ:</p>
      <ul>
        <li>Kiểm tra tính hợp lệ của các giấy tờ</li>
        <li>Xác minh thông tin về thu nhập</li>
        <li>Xác minh điều kiện về nhà ở hiện tại</li>
        <li>Đánh giá đối tượng ưu tiên (nếu có)</li>
      </ul>

      <h5>Bước 4: Nhận kết quả và chọn căn hộ</h5>
      <p>Sau khi hồ sơ được duyệt, bạn sẽ nhận được thông báo kết quả qua email hoặc SMS. Nếu được duyệt, bạn sẽ được mời tham gia buổi công bố và chọn căn hộ. Tại buổi này, bạn sẽ:</p>
      <ul>
        <li>Xem các căn hộ còn trống</li>
        <li>Chọn căn hộ phù hợp với nhu cầu</li>
        <li>Ký biên bản chọn căn hộ</li>
        <li>Nộp tiền đặt cọc (nếu yêu cầu)</li>
      </ul>

      <h5>Bước 5: Ký hợp đồng và hoàn tất thủ tục</h5>
      <p>Sau khi chọn căn hộ, bạn cần:</p>
      <ol>
        <li>Ký hợp đồng mua bán với chủ đầu tư</li>
        <li>Hoàn tất thủ tục vay vốn (nếu có nhu cầu)</li>
        <li>Nộp các khoản phí theo quy định</li>
        <li>Nhận giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở</li>
      </ol>

      <h5>Lưu ý quan trọng</h5>
      <ul>
        <li>Chuẩn bị hồ sơ đầy đủ và chính xác để tránh phải bổ sung</li>
        <li>Theo dõi tình trạng hồ sơ thường xuyên qua website hoặc hotline</li>
        <li>Giữ lại bản sao tất cả các giấy tờ đã nộp</li>
        <li>Liên hệ ngay với cơ quan có thẩm quyền nếu có thắc mắc</li>
      </ul>
    `,
    tags: ["Hướng dẫn", "Thủ tục", "Đăng ký", "Nhà ở xã hội"],
  },
  {
    id: 4,
    slug: "khoi-cong-du-an-nha-o-xa-hoi-trung-tam-dong-hoi",
    title: "Khởi công Dự án Khu nhà ở xã hội Trung tâm Đồng Hới",
    category: "Dự án",
    date: "19/12/2025",
    author: "Duy Sơn",
    readTime: "4 phút đọc",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2025/12/19/ncdung-17661072181711260531265.jpg",
    excerpt:
      "Phó Thủ tướng Nguyễn Chí Dũng dự lễ khởi công Dự án Khu nhà ở xã hội Trung tâm Đồng Hới, góp phần giải quyết nhu cầu nhà ở cho người thu nhập thấp và công nhân trên địa bàn tỉnh Quảng Bình.",
    content: `
    <h5>Lễ khởi công dự án</h5>
    <p>Ngày 19/12, tại thành phố Đồng Hới (tỉnh Quảng Bình), Phó Thủ tướng Chính phủ Nguyễn Chí Dũng đã tham dự lễ khởi công Dự án Khu nhà ở xã hội Trung tâm Đồng Hới. Đây là một trong những dự án trọng điểm nhằm cụ thể hóa chủ trương của Chính phủ về phát triển nhà ở xã hội cho người thu nhập thấp và công nhân khu công nghiệp.</p>

    <h5>Mục tiêu và ý nghĩa</h5>
    <p>Dự án được triển khai với mục tiêu cung cấp quỹ nhà ở xã hội đồng bộ, hiện đại, góp phần cải thiện điều kiện sống cho người dân, bảo đảm an sinh xã hội và thúc đẩy phát triển kinh tế – xã hội của địa phương. Việc đầu tư xây dựng nhà ở xã hội tại khu vực trung tâm thành phố Đồng Hới được đánh giá là cần thiết, phù hợp với định hướng quy hoạch đô thị.</p>

    <h5>Quy mô dự án</h5>
    <p>Khu nhà ở xã hội Trung tâm Đồng Hới được xây dựng trên diện tích quy hoạch đồng bộ, bao gồm các khối nhà ở cao tầng cùng hệ thống hạ tầng kỹ thuật và hạ tầng xã hội như: giao thông nội khu, cây xanh, khu sinh hoạt cộng đồng và các tiện ích thiết yếu phục vụ cư dân.</p>

    <h5>Phát biểu chỉ đạo</h5>
    <p>Phát biểu tại buổi lễ, Phó Thủ tướng Nguyễn Chí Dũng nhấn mạnh vai trò quan trọng của nhà ở xã hội trong chiến lược phát triển bền vững. Phó Thủ tướng đề nghị chủ đầu tư tập trung nguồn lực, bảo đảm tiến độ, chất lượng công trình, đồng thời tuân thủ đầy đủ các quy định pháp luật về xây dựng, đất đai và môi trường.</p>

    <h5>Cam kết của chủ đầu tư</h5>
    <p>Đại diện chủ đầu tư cam kết triển khai dự án đúng tiến độ, bảo đảm chất lượng, an toàn lao động và sớm đưa công trình vào sử dụng, đáp ứng kỳ vọng của chính quyền địa phương và người dân. Dự án được kỳ vọng sẽ trở thành điểm nhấn trong phát triển nhà ở xã hội tại tỉnh Quảng Bình.</p>

    <h5>Định hướng thời gian tới</h5>
    <p>Trong thời gian tới, tỉnh Quảng Bình sẽ tiếp tục rà soát, bổ sung quỹ đất và tạo điều kiện thuận lợi để thu hút các doanh nghiệp tham gia đầu tư phát triển nhà ở xã hội, góp phần hiện thực hóa mục tiêu phát triển đô thị bền vững và bao trùm.</p>
  `,
    tags: ["Dự án", "Nhà ở xã hội", "Đồng Hới", "Quảng Bình", "Khởi công"],
  },
  {
    id: 5,
    slug: "kinh-nghiem-chon-mua-nha-o-xa-hoi-phu-hop",
    title: "Kinh nghiệm chọn mua nhà ở xã hội phù hợp",
    category: "Tư vấn",
    date: "20/11/2025",
    author: "Duy Sơn",
    readTime: "7 phút đọc",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "Chia sẻ những kinh nghiệm hữu ích giúp bạn lựa chọn căn hộ phù hợp với nhu cầu và khả năng tài chính...",
    content: `
      <h5>Giới thiệu</h5>
      <p>Việc chọn mua nhà ở xã hội là một quyết định quan trọng, ảnh hưởng đến cuộc sống của bạn và gia đình trong nhiều năm tới. Bài viết này sẽ chia sẻ những kinh nghiệm quý báu giúp bạn đưa ra quyết định đúng đắn.</p>

      <h5>1. Xác định nhu cầu thực tế</h5>
      <p>Trước khi tìm kiếm căn hộ, bạn cần xác định rõ nhu cầu của mình:</p>
      <ul>
        <li>Số lượng phòng ngủ cần thiết</li>
        <li>Diện tích phù hợp với số thành viên trong gia đình</li>
        <li>Ngân sách có thể chi trả</li>
        <li>Vị trí mong muốn (gần nơi làm việc, trường học, bệnh viện)</li>
        <li>Tiện ích cần thiết</li>
      </ul>

      <h5>2. Nghiên cứu thị trường</h5>
      <p>Hãy dành thời gian nghiên cứu các dự án có sẵn:</p>
      <ul>
        <li>So sánh giá cả giữa các dự án</li>
        <li>Tìm hiểu về chủ đầu tư và uy tín của họ</li>
        <li>Xem xét vị trí và tiện ích xung quanh</li>
        <li>Đọc đánh giá từ cư dân đã mua</li>
      </ul>

      <h5>3. Kiểm tra pháp lý</h5>
      <p>Đây là bước cực kỳ quan trọng:</p>
      <ul>
        <li>Xác minh giấy phép xây dựng</li>
        <li>Kiểm tra quy hoạch khu vực</li>
        <li>Xác nhận quyền sở hữu đất</li>
        <li>Đọc kỹ hợp đồng mua bán</li>
        <li>Tham khảo ý kiến luật sư nếu cần</li>
      </ul>

      <h5>4. Xem căn hộ thực tế</h5>
      <p>Nếu có thể, hãy xem căn hộ mẫu hoặc căn hộ thực tế:</p>
      <ul>
        <li>Kiểm tra chất lượng xây dựng</li>
        <li>Đánh giá ánh sáng và thông gió</li>
        <li>Xem xét hướng nhà</li>
        <li>Kiểm tra hệ thống điện, nước</li>
        <li>Đánh giá không gian sống</li>
      </ul>

      <h5>5. Tính toán tài chính</h5>
      <p>Hãy tính toán kỹ lưỡng:</p>
      <ul>
        <li>Giá mua căn hộ</li>
        <li>Tiền đặt cọc và thanh toán</li>
        <li>Phí quản lý hàng tháng</li>
        <li>Chi phí vay vốn (nếu có)</li>
        <li>Các khoản phí khác (thuế, phí chuyển nhượng)</li>
      </ul>

      <h5>6. Tham khảo ý kiến chuyên gia</h5>
      <p>Đừng ngần ngại tìm kiếm lời khuyên từ:</p>
      <ul>
        <li>Chuyên gia bất động sản</li>
        <li>Luật sư</li>
        <li>Người đã có kinh nghiệm mua nhà</li>
        <li>Nhân viên tư vấn của dự án</li>
      </ul>

      <h5>Kết luận</h5>
      <p>Việc chọn mua nhà ở xã hội cần được cân nhắc kỹ lưỡng. Hãy dành thời gian nghiên cứu, so sánh và tham khảo ý kiến để đưa ra quyết định tốt nhất cho bạn và gia đình.</p>
    `,
    tags: ["Tư vấn", "Kinh nghiệm", "Chọn mua", "Nhà ở"],
  },
];

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

// Helper function to get article by id (for backward compatibility)
export const getArticleById = (id: number): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};

// Helper function to get related articles
export const getRelatedArticles = (
  currentSlug: string,
  category: string,
  limit: number = 3
): NewsArticle[] => {
  return newsArticles
    .filter((article) => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);
};

