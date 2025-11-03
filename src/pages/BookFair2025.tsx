import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  CreditCard, 
  Truck, 
  Mail, 
  Calendar, 
  Clock, 
  Languages, 
  BookOpen, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import paymentMethodsImage from '@/assets/payment-methods.png';
import setaPayLogo from '@/assets/setapay-logo.png';
import drSeussCollection from '@/assets/dr-seuss-collection.webp';
import nationalGeoCollection from '@/assets/national-geographic-collection.webp';
import brainQuestCollection from '@/assets/brain-quest-collection.webp';
import scholasticCollection from '@/assets/scholastic-success-collection.webp';
import bigFatNotebookCollection from '@/assets/big-fat-notebook-collection.webp';
import roaldDahlCollection from '@/assets/roald-dahl-collection.webp';

// Editable Configuration
const eventDates = [
  { date: "Nov 15", time: "11:00-18:00", dateJa: "11月15日", timeJa: "11:00-18:00" },
  { date: "Nov 16", time: "12:00-18:00", dateJa: "11月16日", timeJa: "12:00-18:00" },
  { date: "Dec 6", time: "11:00-18:00", dateJa: "12月6日", timeJa: "11:00-18:00" }
];

const locationInfo = {
  name: "BumbleB English Classroom",
  address: "世田谷区用賀 4-28-10",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.934552030549!2d139.62949984130108!3d35.62933993293488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5686bfd38d1%3A0x77db038d52ed0a6d!2sBumbleB%20English!5e0!3m2!1sen!2sjp!4v1762134956569!5m2!1sen!2sjp",
  accessEn: "5 min walk from Yoga Station North Exit",
  accessJa: "用賀駅北口より徒歩5分"
};

const featuredBooks = [
  { 
    id: 1, 
    nameEn: "Dr. Seuss", 
    nameJa: "ドクター・スース", 
    url: "https://store.makostars.com/collections/dr-seuss-books",
    image: drSeussCollection,
    color: "bg-gradient-to-br from-red-400 to-pink-500"
  },
  { 
    id: 2, 
    nameEn: "National Geographic Kids", 
    nameJa: "ナショナルジオグラフィック", 
    url: "https://store.makostars.com/collections/national-geographic-kids",
    image: nationalGeoCollection,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500"
  },
  { 
    id: 3, 
    nameEn: "Brain Quest", 
    nameJa: "ブレインクエスト", 
    url: "https://store.makostars.com/collections/brain-quest-workbooks",
    image: brainQuestCollection,
    color: "bg-gradient-to-br from-blue-400 to-indigo-500"
  },
  { 
    id: 4, 
    nameEn: "Scholastic Success", 
    nameJa: "スカラスティック", 
    url: "https://store.makostars.com/collections/scholastic-success-workbooks",
    image: scholasticCollection,
    color: "bg-gradient-to-br from-green-400 to-teal-500"
  },
  { 
    id: 5, 
    nameEn: "Big Fat Notebook", 
    nameJa: "ビッグ・ファット・ノート", 
    url: "https://store.makostars.com/collections/big-fat-notebook",
    image: bigFatNotebookCollection,
    color: "bg-gradient-to-br from-purple-400 to-pink-500"
  },
  { 
    id: 6, 
    nameEn: "Roald Dahl", 
    nameJa: "ロアルド・ダール", 
    url: "https://store.makostars.com/collections/roald-dahl-books",
    image: roaldDahlCollection,
    color: "bg-gradient-to-br from-amber-400 to-red-500"
  },
];

export default function BookFair2025() {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const mapSectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Update favicon for this page
    const originalFavicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    const originalHref = originalFavicon?.href;
    
    if (originalFavicon) {
      originalFavicon.href = '/book-fair-favicon.png';
    }
    
    return () => {
      if (originalFavicon && originalHref) {
        originalFavicon.href = originalHref;
      }
    };
  }, []);

  const scrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const content = {
    en: {
      hero: {
        title: "MakoStars Book Fair",
        subtitle: "English-language books, picture books, workbooks, and study materials",
        subtitleJa: "英語の絵本・ワークブック・学習教材",
        outlet: "Outlet items and New Arrival items will also be available",
        viewBooks: "View Books",
        mapAccess: "Map & Access"
      },
      featured: {
        title: "Featured Collections",
        subtitle: "Discover our curated selection of English learning materials"
      },
      eventInfo: {
        title: "Event Information",
        location: {
          title: "Location",
          text: "BumbleB English Classroom",
          address: "世田谷区用賀 4-28-10",
          access: "5 min walk from Yoga Station North Exit"
        },
        payment: {
          title: "Payment Methods",
          text: "Credit Card / SetaPay / Cash"
        },
        shipping: {
          title: "Shipping is Available",
          text: "Available (+400 JPY)"
        },
        contact: {
          title: "Contact Us",
          text: "staff@makostars.com"
        }
      },
      map: {
        title: "Location & Access",
        subtitle: "Find us easily from Yoga Station"
      },
      footer: {
        about: "About MakoStars",
        aboutText: "We're passionate about inspiring children to love learning through quality English books and educational materials.",
        quickLinks: "Quick Links",
        home: "Home",
        bookmark: "Bookmark App",
        bookFair: "Book Fair 2025",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
        store: "Our Store",
        visitStore: "Visit Store",
        instagram: "Follow us on Instagram",
        rights: "© 2024 MakoStars. All rights reserved."
      }
    },
    ja: {
      hero: {
        title: "MakoStars Book Fair",
        subtitle: "英語の絵本・ワークブック・学習教材",
        subtitleJa: "English-language books, picture books, workbooks, and study materials",
        outlet: "アウトレット商品と新着商品もご用意しています",
        viewBooks: "本を見る",
        mapAccess: "地図・アクセス"
      },
      featured: {
        title: "注目のコレクション",
        subtitle: "厳選された英語学習教材をご覧ください"
      },
      eventInfo: {
        title: "イベント情報",
        location: {
          title: "場所",
          text: "BumbleB English Classroom",
          address: "世田谷区用賀 4-28-10",
          access: "用賀駅北口より徒歩5分"
        },
        payment: {
          title: "お支払い方法",
          text: "クレジットカード / セタペイ / 現金"
        },
        shipping: {
          title: "配送サービスをご利用いただけます",
          text: "配送可能（+400円）"
        },
        contact: {
          title: "お問い合わせ",
          text: "staff@makostars.com"
        }
      },
      map: {
        title: "場所・アクセス",
        subtitle: "用賀駅から簡単にお越しいただけます"
      },
      footer: {
        about: "MakoStarsについて",
        aboutText: "質の高い英語の本と教育教材を通じて、子どもたちに学ぶことを好きになってもらうことに情熱を注いでいます。",
        quickLinks: "クイックリンク",
        home: "ホーム",
        bookmark: "ブックマークアプリ",
        bookFair: "ブックフェア 2025",
        legal: "法的情報",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
        store: "オンラインストア",
        visitStore: "ストアを見る",
        instagram: "Instagramでフォロー",
        rights: "© 2024 MakoStars. All rights reserved."
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Language Switcher */}
      <button
        onClick={() => setLanguage(language === "en" ? "ja" : "en")}
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle language"
      >
        <Languages className="w-5 h-5 text-primary" />
      </button>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-books.jpg')] bg-cover bg-center opacity-10"></div>
        <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
          <p className={`text-base sm:text-lg lg:text-xl mb-4 max-w-3xl mx-auto font-light ${language === "en" ? "font-noto-sans-jp" : ""}`}>
            {t.hero.subtitleJa}
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-12 text-yellow-300">
            <Sparkles className="w-6 h-6" />
            <p className="text-lg sm:text-xl font-medium">
              {t.hero.outlet}
            </p>
          </div>

          {/* Event Dates */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {eventDates.map((event, idx) => (
              <div 
                key={idx} 
                className="bg-white text-foreground rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-2xl">
                      {language === "en" ? event.date : event.dateJa}
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      {language === "en" ? event.time : event.timeJa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://store.makostars.com/collections/all" target="_blank" rel="noopener noreferrer">
                {t.hero.viewBooks}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={scrollToMap}
            >
              {t.hero.mapAccess}
              <MapPin className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {t.featured.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.featured.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {featuredBooks.map((book) => (
              <a
                key={book.id}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
                      <img 
                        src={book.image} 
                        alt={language === "en" ? book.nameEn : book.nameJa}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.className = `${book.color} aspect-square flex items-center justify-center relative overflow-hidden`;
                            const icon = document.createElement('div');
                            icon.innerHTML = '<svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
                            parent.appendChild(icon.firstChild!);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                        {language === "en" ? book.nameEn : book.nameJa}
                      </h3>
                      <ExternalLink className="w-4 h-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {t.eventInfo.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t.eventInfo.location.title}</h3>
                    <p className="text-muted-foreground mb-1">{t.eventInfo.location.text}</p>
                    <p className="text-sm text-muted-foreground font-noto-sans-jp">{t.eventInfo.location.address}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.eventInfo.location.access}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center">
                    <img 
                      src={paymentMethodsImage} 
                      alt="Accepted payment methods including Visa, Mastercard, JCB, American Express, and e-money options" 
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center pb-2">
                    <img 
                      src={setaPayLogo} 
                      alt="SetaPay - Setagaya Ward local payment system" 
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">{t.eventInfo.payment.title}</h3>
                    <p className="text-muted-foreground">{t.eventInfo.payment.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t.eventInfo.shipping.title}</h3>
                    <p className="text-muted-foreground">{t.eventInfo.shipping.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t.eventInfo.contact.title}</h3>
                    <a 
                      href="mailto:staff@makostars.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.eventInfo.contact.text}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapSectionRef} className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {t.map.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.map.subtitle}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={locationInfo.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MakoStars Book Fair Location"
              className="w-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              {locationInfo.name}
            </p>
            <p className="text-muted-foreground font-noto-sans-jp mb-1">
              {locationInfo.address}
            </p>
            <p className="text-muted-foreground">
              {language === "en" ? locationInfo.accessEn : locationInfo.accessJa}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2847] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t.footer.about}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {t.footer.aboutText}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.home}
                  </a>
                </li>
                <li>
                  <a href="/bookmark" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.bookmark}
                  </a>
                </li>
                <li>
                  <a href="/book-fair-2025" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.bookFair}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t.footer.legal}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a href="mailto:staff@makostars.com" className="text-white/80 hover:text-white transition-colors text-sm">
                    {t.footer.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Store Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">{t.footer.store}</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://store.makostars.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {t.footer.visitStore}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/makostars/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {t.footer.instagram}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}