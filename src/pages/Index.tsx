import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Sparkles, Globe, GraduationCap, Telescope, Languages, Mail, Check, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import { NewsletterForm } from "@/components/NewsletterForm";
const Index = () => {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const content = {
    en: {
      heroTitle: "Welcome to MakoStars – Inspiring Learning, One Book at a Time!",
      heroSubtext: "Thank you for visiting! Discover fun, engaging English books and learning tools loved by families across Japan.",
      shopNow: "Shop Now",
      exploreMore: "Explore our Articles",
      aboutTitle: "About MakoStars",
      aboutText: "MakoStars is an education brand dedicated to supporting bilingual learning, creativity, and global curiosity. We partner with BumbleB English and host book fairs to bring quality educational materials to families across Japan. Our community of learners spans from early readers to ambitious students preparing for international exams.",
      learnMore: "Learn more at makostars.com",
      categoriesTitle: "Shop by Category",
      newsletterTitle: "Stay Connected with MakoStars",
      newsletterSubtext: "Join our newsletter to receive exclusive updates on new products, educational resources, and inspiring articles for your learning journey.",
      newsletterBenefits: ["Early access to new book arrivals", "Educational tips and resources", "Exclusive promotions and offers", "Inspiring articles for families"],
      specialTitle: "Thank You!",
      specialText: "Enjoy your free bookmark! It's our way of saying thank you for supporting learning and imagination.",
      socialText: "Follow us on Instagram @MakoStars",
      categories: [{
        title: "Brain Quest & Workbooks",
        description: "Fun learning for elementary & middle school students",
        icon: Brain,
        url: "https://store.makostars.com/collections/brain-quest-workbooks"
      }, {
        title: "Scholastic 'Success With…' Series",
        description: "Build reading, writing, and math skills",
        icon: BookOpen,
        url: "https://store.makostars.com/collections/scholastic-success-workbooks"
      }, {
        title: "Roald Dahl Storybooks",
        description: "Classic tales for developing imagination",
        icon: Sparkles,
        url: "https://store.makostars.com/collections/roald-dahl-books"
      }, {
        title: "Dr. Seuss Books",
        description: "Early reading fun with rhyme and rhythm",
        icon: Globe,
        url: "https://store.makostars.com/collections/dr-seuss-books"
      }, {
        title: "Exam Prep Books",
        description: "AP, TOEFL, EIKEN, IELTS for ambitious learners",
        icon: GraduationCap,
        url: "https://store.makostars.com/collections/ap-exam-study-guides"
      }, {
        title: "National Geographic Kids",
        description: "Great for curious kids",
        icon: Telescope,
        url: "https://store.makostars.com/collections/national-geographic-kids"
      }]
    },
    ja: {
      heroTitle: "MakoStarsへようこそ - 一冊ずつ、学びをインスパイア！",
      heroSubtext: "ご訪問ありがとうございます！日本全国のご家族に愛されている、楽しく魅力的な英語の本と学習ツールをご覧ください。",
      shopNow: "ショップを見る",
      exploreMore: "記事を見る",
      aboutTitle: "MakoStarsについて",
      aboutText: "MakoStarsは、バイリンガル学習、創造性、グローバルな好奇心をサポートする教育ブランドです。BumbleB Englishと提携し、ブックフェアを開催して、日本全国のご家族に質の高い教材をお届けしています。私たちの学習コミュニティは、初めての読者から国際試験を目指す意欲的な生徒まで幅広く広がっています。",
      learnMore: "詳細はmakostars.comへ",
      categoriesTitle: "カテゴリー別に探す",
      newsletterTitle: "MakoStarsと繋がろう",
      newsletterSubtext: "ニュースレターに登録して、新商品、教育リソース、学習に役立つ記事などの最新情報を受け取りましょう。",
      newsletterBenefits: ["新着書籍の先行案内", "教育のヒントとリソース", "限定プロモーションとオファー", "ご家族向けのインスピレーション記事"],
      specialTitle: "ありがとうございます！",
      specialText: "無料のしおりをお楽しみください！学びと想像力をサポートしていただいた感謝の気持ちです。",
      socialText: "Instagram @MakoStars をフォローしてください",
      categories: [{
        title: "Brain Quest & ワークブック",
        description: "小学生・中学生向けの楽しい学習教材",
        icon: Brain,
        url: "https://store.makostars.com/collections/brain-quest-workbooks"
      }, {
        title: "Scholastic「Success With…」シリーズ",
        description: "読み書きと算数スキルを育てる",
        icon: BookOpen,
        url: "https://store.makostars.com/collections/scholastic-success-workbooks"
      }, {
        title: "ロアルド・ダール ストーリーブック",
        description: "想像力を育む名作",
        icon: Sparkles,
        url: "https://store.makostars.com/collections/roald-dahl-books"
      }, {
        title: "Dr. Seussの本",
        description: "韻とリズムで楽しく初めての読書",
        icon: Globe,
        url: "https://store.makostars.com/collections/dr-seuss-books"
      }, {
        title: "試験対策本",
        description: "AP、TOEFL、英検、IELTS対策",
        icon: GraduationCap,
        url: "https://store.makostars.com/collections/ap-exam-study-guides"
      }, {
        title: "ナショナルジオグラフィック キッズ",
        description: "好奇心旺盛なお子様に最適",
        icon: Telescope,
        url: "https://store.makostars.com/collections/national-geographic-kids"
      }]
    }
  };
  const t = content[language];
  return <div className="min-h-screen bg-background">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" size="sm" onClick={() => setLanguage(language === "en" ? "ja" : "en")} className="bg-background/95 backdrop-blur-sm shadow-soft border-border hover:bg-accent hover:text-accent-foreground transition-all">
          <Languages className="w-4 h-4 mr-2" />
          {language === "en" ? "日本語" : "English"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Children reading books" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.heroTitle}</h1>
            <p className="text-lg sm:text-xl mb-8 text-white/95 leading-relaxed">{t.heroSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold text-lg px-8 py-6 shadow-medium transition-all hover:scale-105" onClick={() => window.open("https://store.makostars.com", "_blank")}>
                {t.shopNow}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold text-lg px-8 py-6 transition-all hover:scale-105" onClick={() => window.open("https://makostars.com/all-articles/", "_blank")}>
                {t.exploreMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.aboutText}</p>
            <a href="https://makostars.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent-dark font-semibold text-lg transition-colors">
              {t.learnMore}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-accent/20 rounded-full mb-6">
              <Mail className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.newsletterTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t.newsletterSubtext}</p>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {t.newsletterBenefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>)}
            </div>
          </div>

          <Card className="p-6 sm:p-8 lg:p-10 bg-card shadow-medium">
            <NewsletterForm />
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">{t.categoriesTitle}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.categories.map((category, index) => {
            const Icon = category.icon;
            return <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-card border-border" onClick={() => window.open(category.url, "_blank")}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Special Message Section */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-accent/20 rounded-full mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.specialTitle}</h2>
          <p className="text-xl mb-4 text-white/95">{t.specialText}</p>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 text-xl">
            <Instagram className="w-6 h-6 text-primary" />
            <a href="https://instagram.com/MakoStars" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.socialText}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 MakoStars. {language === "en" ? "All rights reserved." : "無断転載禁止。"}
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;