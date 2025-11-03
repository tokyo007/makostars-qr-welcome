import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Sparkles, Globe, GraduationCap, Telescope, Languages, Mail, Check, Instagram, Facebook, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import { NewsletterForm } from "@/components/NewsletterForm";
import confetti from "canvas-confetti";
const Index = () => {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const specialSectionRef = useRef<HTMLDivElement>(null);
  const hasPlayedConfetti = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedConfetti.current) {
            hasPlayedConfetti.current = true;
            
            // Fire confetti animation
            const duration = 2000;
            const end = Date.now() + duration;

            const frame = () => {
              confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB']
              });
              confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB']
              });

              if (Date.now() < end) {
                requestAnimationFrame(frame);
              }
            };

            frame();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (specialSectionRef.current) {
      observer.observe(specialSectionRef.current);
    }

    return () => {
      if (specialSectionRef.current) {
        observer.unobserve(specialSectionRef.current);
      }
    };
  }, []);
  const content = {
    en: {
      heroTitle: "Welcome to MakoStars – Inspiring Learning, One Book at a Time!",
      heroSubtext: "Thank you for visiting! Discover fun, engaging English books and learning tools loved by families across Japan.",
      shopNow: "Shop Now",
      exploreMore: "Explore our Articles",
      aboutTitle: "About MakoStars",
      aboutText: "MakoStars is an education brand dedicated to supporting bilingual learning, creativity, and global curiosity. We partner with BumbleB English and host book fairs to bring quality educational materials to families across Japan. Our community of learners spans from early readers to ambitious students preparing for international exams.",
      learnMore: "Learn more at makostars.com",
      categoriesTitle: "Browse our Most Popular Titles",
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
      categoriesTitle: "人気タイトルをご覧ください",
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
      <section className="relative h-[59.5vh] min-h-[425px] overflow-hidden">
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

      {/* Special Message Section */}
      <section ref={specialSectionRef} className="py-16 sm:py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-accent/20 rounded-full mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">{t.specialTitle}</h2>
          <p className="text-xl mb-4 text-muted-foreground">{t.specialText}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.aboutText}</p>
            <a href="https://makostars.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black hover:text-black/80 font-bold text-lg transition-colors">
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

      {/* Social Section */}
      <section className="pt-6 pb-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 text-2xl">
            <Instagram className="w-6 h-6 text-primary" />
            <a href="https://instagram.com/MakoStars" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.socialText}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2847] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Us Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-white font-semibold mb-2 text-sm">MakoStars LLC: Learn English for School | Work | Life</p>
              <p className="text-gray-300 text-sm mb-4">Providing quality English learning resources and books for children in Japan.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com/makostars" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="https://instagram.com/MakoStars" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="mailto:info@makostars.com" aria-label="Email">
                  <Mail className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="https://line.me/ti/p/makostars" target="_blank" rel="noopener noreferrer" aria-label="LINE">
                  <MessageCircle className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://makostars.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </a>
                <a href="https://makostars.com/about/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
                <a href="https://bumblebenglish.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  BumbleB English School
                </a>
                <a href="https://makostars.com/frequently-asked-questions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  FAQs
                </a>
                <a href="https://makostars.com/contact/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://makostars.com/act-on-specified-commercial-transactions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Act on Specified Commercial Transactions
                </a>
                <a href="https://makostars.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="https://makostars.com/refund_returns/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Return Policy
                </a>
                <a href="https://makostars.com/shipping-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Shipping Policy
                </a>
                <a href="https://makostars.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms and Conditions
                </a>
                <a href="https://makostars.com/disclaimer/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Disclaimer
                </a>
              </nav>
            </div>

            {/* Store Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Store</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://store.makostars.com/collections/all" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Shop All
                </a>
                <a href="https://store.makostars.com/collections/brain-quest-workbooks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Brain Quest Workbooks
                </a>
                <a href="https://store.makostars.com/collections/dr-seuss-books" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Dr. Seuss Books
                </a>
                <a href="https://store.makostars.com/collections/roald-dahl-books" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Roald Dahl Books
                </a>
                <a href="https://store.makostars.com/collections/scholastic-success-workbooks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Scholastic Success Workbooks
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700 gap-4">
            <p className="text-gray-400 text-sm">MakoStars LLC. Learn English for School | Work | Life</p>
            <p className="text-gray-400 text-sm">Copyright © 2025 All rights reserved. MakoStars LLC.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;