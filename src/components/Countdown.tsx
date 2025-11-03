import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
  language: "en" | "ja";
}

export function Countdown({ targetDate, language }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const labels = {
    en: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    ja: { days: '日', hours: '時間', minutes: '分', seconds: '秒' }
  };

  const t = labels[language];

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <Clock className="w-6 h-6 text-accent animate-pulse" />
      <div className="flex gap-3">
        {[
          { value: timeLeft.days, label: t.days },
          { value: timeLeft.hours, label: t.hours },
          { value: timeLeft.minutes, label: t.minutes },
          { value: timeLeft.seconds, label: t.seconds }
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold text-white">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs text-white/80 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
