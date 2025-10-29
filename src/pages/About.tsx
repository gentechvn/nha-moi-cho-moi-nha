import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Minh bạch",
      description: "Đảm bảo tính minh bạch trong mọi giao dịch và thông tin",
    },
    {
      icon: Users,
      title: "Con người là trung tâm",
      description: "Đặt lợi ích của khách hàng lên hàng đầu",
    },
    {
      icon: Award,
      title: "Chất lượng",
      description: "Cam kết chất lượng cao trong từng sản phẩm",
    },
    {
      icon: TrendingUp,
      title: "Phát triển bền vững",
      description: "Xây dựng cộng đồng sống xanh, văn minh",
    },
  ];

  const achievements = [
    { number: "10+", label: "Năm kinh nghiệm" },
    { number: "15", label: "Dự án hoàn thành" },
    { number: "5,000+", label: "Cư dân hài lòng" },
    { number: "98%", label: "Tỷ lệ hài lòng" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
              Về chúng tôi
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in">
              Đồng hành cùng hàng nghìn gia đình Việt trong hành trình sở hữu tổ ấm
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Được thành lập từ năm 2014, chúng tôi tự hào là một trong những đơn vị tiên phong trong lĩnh vực phát triển nhà ở xã hội tại Việt Nam. Với sứ mệnh mang đến cho mọi người dân cơ hội sở hữu một ngôi nhà với giá cả phải chăng, chúng tôi đã không ngừng nỗ lực và phát triển.
                </p>
                <p>
                  Qua hơn 10 năm hoạt động, chúng tôi đã triển khai và hoàn thành 15 dự án lớn nhỏ khắp cả nước, mang đến tổ ấm cho hơn 5,000 gia đình. Mỗi dự án không chỉ là những công trình xây dựng đơn thuần, mà còn là những cộng đồng sống văn minh, hiện đại với đầy đủ tiện ích.
                </p>
                <p>
                  Chúng tôi cam kết đồng hành cùng Chính phủ trong việc thực hiện chính sách an sinh xã hội, góp phần giải quyết vấn đề nhà ở cho người dân có thu nhập thấp và trung bình.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern housing"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Năm kinh nghiệm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
              <p className="text-muted-foreground">
                Cung cấp những giải pháp nhà ở chất lượng cao, giá cả phải chăng cho người dân. Đồng thời xây dựng các cộng đồng sống văn minh, hiện đại, góp phần nâng cao chất lượng cuộc sống và phát triển bền vững của xã hội.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
              <p className="text-muted-foreground">
                Trở thành đơn vị phát triển nhà ở xã hội hàng đầu Việt Nam, được khách hàng tin tưởng và lựa chọn. Góp phần vào sự phát triển bền vững của đất nước thông qua việc cung cấp nhà ở chất lượng cho mọi tầng lớp nhân dân.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những giá trị mà chúng tôi luôn tuân thủ và phát huy trong mọi hoạt động
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Thành tựu đạt được</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Những con số ấn tượng minh chứng cho sự nỗ lực và cam kết của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                  <p className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                    {achievement.number}
                  </p>
                  <p className="text-sm sm:text-base text-primary-foreground/90">
                    {achievement.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những con người tâm huyết, dày dặn kinh nghiệm trong ngành
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://images.unsplash.com/photo-150009${member}163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=400`}
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Nguyễn Văn A</h3>
                  <p className="text-sm text-primary mb-2">Giám đốc điều hành</p>
                  <p className="text-sm text-muted-foreground">
                    20+ năm kinh nghiệm trong lĩnh vực bất động sản
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
