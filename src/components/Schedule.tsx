import { Section } from './Section';

interface Trip {
  label: string;
  dates: string;
  duration: string;
  buyers: string[];
  note?: string;
}

const TRIPS: Trip[] = [
  {
    label: 'Đợt 01',
    dates: 'Cuối tháng 5, 2026',
    duration: '4 ngày · TP. HCM & Bình Dương',
    buyers: ['Lezlie Tram Le', 'Kameron Schram', 'Michael Hough'],
    note: 'Tập trung sàn, cửa, tủ bếp và đá tự nhiên.',
  },
  {
    label: 'Đợt 02',
    dates: '05 – 13 tháng 6, 2026',
    duration: '9 ngày · TP. HCM, Bình Dương & Hà Nội',
    buyers: ['Ricardo Rubiano', 'Mick Hawton'],
    note: 'Multi-family & commercial development scale.',
  },
];

export function Schedule() {
  return (
    <Section id="lich-trinh">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Hai đợt đoàn — tách rõ theo{' '}
        <em className="font-serif italic text-gradient-gold">nhu cầu sản phẩm</em>.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {TRIPS.map((t) => (
          <div
            key={t.label}
            className="relative bg-bg-card rounded-2xl p-8 lg:p-10 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-6
                       overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />

            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
                {t.label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-semibold text-right">
                {t.duration}
              </span>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-2">
                Thời gian
              </p>
              <p className="text-xl lg:text-2xl font-serif font-light text-text-heading leading-snug">
                {t.dates}
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-3">
                Khách tham gia
              </p>
              <ul className="space-y-2">
                {t.buyers.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-base lg:text-lg text-text-body font-light"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {t.note && (
              <p className="mt-auto pt-4 border-t border-border-subtle text-sm text-text-muted font-serif italic font-light leading-relaxed">
                {t.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
