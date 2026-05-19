import { Section } from './Section';

interface Day {
  n: number;
  date: string;
  title: string;
  pills?: string[];
}

const DAYS: Day[] = [
  { n: 1, date: 'May 30', title: 'HCMC — Arrive', pills: ['Arrival + Orientation dinner'] },
  { n: 2, date: 'May 31', title: 'Binh Duong' },
  { n: 3, date: 'Jun 1', title: 'Binh Duong + Long An' },
  { n: 4, date: 'Jun 2', title: 'HCMC — Flex', pills: ['Evening flight north'] },
  { n: 5, date: 'Jun 3', title: 'Fly → Hanoi', pills: ['AM arrival'] },
  { n: 6, date: 'Jun 4', title: 'Bac Ninh + Vinh Phuc + Hanoi' },
  { n: 7, date: 'Jun 5', title: 'Hai Phong' },
  {
    n: 8,
    date: 'Jun 6',
    title: 'Hanoi — Depart / Optional Ha Long Bay',
    pills: ['Departure', 'Optional: GAACC add-on Jun 6–7'],
  },
];

export function Schedule() {
  return (
    <Section id="lich-trinh">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Lịch trình 8 ngày —{' '}
        <em className="font-serif italic text-gradient-gold">30 tháng 5 → 6 tháng 6, 2026</em>.
      </h2>

      <div className="relative rounded-3xl border border-border-subtle bg-bg-card overflow-hidden">
        {/* Vertical gold accent line */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-[3px]
                     bg-gradient-to-b from-brand-gold/0 via-brand-gold to-brand-gold/0"
        />

        {DAYS.map((d, i) => (
          <div
            key={d.n}
            className={`grid grid-cols-12 gap-4 lg:gap-8 items-center
                        px-6 lg:px-10 py-6 lg:py-7 ${
                          i > 0 ? 'border-t border-border-subtle' : ''
                        }`}
          >
            {/* Day + Date */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <p className="font-serif text-text-heading leading-none">
                <span className="text-2xl lg:text-3xl">Day </span>
                <span className="text-3xl lg:text-4xl font-display italic text-gradient-gold">
                  {d.n}
                </span>
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-text-body mt-2 font-semibold">
                {d.date}
              </p>
            </div>

            {/* Title */}
            <div className="col-span-12 md:col-span-5 lg:col-span-6">
              <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading leading-snug">
                {d.title}
              </h3>
            </div>

            {/* Pills */}
            <div className="col-span-12 md:col-span-4 lg:col-span-4 flex md:justify-end">
              {d.pills && d.pills.length > 0 ? (
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {d.pills.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-full border border-brand-gold/40
                                 text-brand-gold text-[11px] uppercase tracking-[0.12em]
                                 font-medium whitespace-nowrap"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-[11px] uppercase tracking-[0.2em] text-text-body/60 italic font-serif md:ml-auto">
                  Factory visits TBA
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
