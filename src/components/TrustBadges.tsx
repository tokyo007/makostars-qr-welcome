import { BookOpen, Users, ShieldCheck, Star } from 'lucide-react';

interface TrustBadgesProps {
  language: "en" | "ja";
}

export function TrustBadges({ language }: TrustBadgesProps) {
  const content = {
    en: {
      title: "Why Choose Us",
      badges: [
        {
          icon: BookOpen,
          stat: "500+",
          label: "Quality Books",
          description: "Carefully curated selection"
        },
        {
          icon: Star,
          stat: "Top",
          label: "Publishers",
          description: "Trusted brands only"
        },
        {
          icon: ShieldCheck,
          stat: "100%",
          label: "Family Friendly",
          description: "Safe for all ages"
        },
        {
          icon: Users,
          stat: "1000+",
          label: "Happy Families",
          description: "Serving the community"
        }
      ]
    },
    ja: {
      title: "私たちが選ばれる理由",
      badges: [
        {
          icon: BookOpen,
          stat: "500+",
          label: "良質な本",
          description: "厳選されたセレクション"
        },
        {
          icon: Star,
          stat: "トップ",
          label: "出版社",
          description: "信頼できるブランドのみ"
        },
        {
          icon: ShieldCheck,
          stat: "100%",
          label: "家族向け",
          description: "全年齢対応"
        },
        {
          icon: Users,
          stat: "1000+",
          label: "幸せな家族",
          description: "コミュニティへのサービス"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {badge.stat}
                </div>
                <div className="font-semibold text-foreground mb-2">
                  {badge.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {badge.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
