import { Section } from './Section';

interface Day {
  n: number;
  date: string;
  title: string;
  activity?: string;
}

const DAYS: Day[] = [
  { n: 1, date: 'May 30', title: 'HCMC · Arrive', activity: 'Orientation dinner' },
  { n: 2, date: 'May 31', title: 'Bình Dương' },
  { n: 3, date: 'Jun 1', title: 'Bình Dương · Long An' },
  { n: 4, date: 'Jun 2', title: 'HCMC · Flex', activity: 'Evening flight north' },
  { n: 5, date: 'Jun 3', title: 'Fly → Hà Nội', activity: 'AM arrival' },
  { n: 6, date: 'Jun 4', title: 'Bắc Ninh · V.Phúc · HN' },
  { n: 7, date: 'Jun 5', title: 'Hải Phòng' },
  { n: 8, date: 'Jun 6', title: 'HN · Depart', activity: 'Optional Ha Long' },
];

export function Schedule() {
  return (
    <Section id="lich-trinh" className="!py-16 lg:!py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-5xl">
        <span className="font-display text-gradient-gold">8</span> ngày —{' '}
        <em className="font-serif italic text-gradient-gold">
          Việt Nam từ Nam ra Bắc
        </em>
        .
      </h2>

      <div className="relative">
        {/* Horizontal gold connector — desktop only */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[19px] left-[6%] right-[6%] h-px
                     bg-gradient-to-r from-brand-gold/0 via-brand-gold/60 to-brand-gold/0"
        />

        <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-3 lg:gap-x-2">
          {DAYS.map((d) => (
            <li key={d.n} className="flex flex-col items-center text-center">
              {/* Dot */}
              <div className="relative mb-5">
                <span
                  className="block w-4 h-4 rounded-full bg-brand-gold
                             ring-4 ring-bg-dark relative z-10"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 w-4 h-4 rounded-full bg-brand-gold/30 blur-md"
                />
              </div>

              {/* Day number — UTM gold */}
              <p className="font-display text-3xl lg:text-4xl text-gradient-gold leading-none mb-2">
                {String(d.n).padStart(2, '0')}
              </p>

              {/* Date — caps small */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-text-body font-semibold mb-4">
                {d.date}
              </p>

              {/* Location title */}
              <p className="text-xs lg:text-sm font-bold font-sans text-text-heading leading-snug px-1 mb-2 min-h-[2.5em]">
                {d.title}
              </p>

              {/* Activity sub-label */}
              {d.activity ? (
                <p className="text-[10px] lg:text-[11px] font-serif italic text-brand-gold leading-snug">
                  {d.activity}
                </p>
              ) : (
                <p className="text-[10px] lg:text-[11px] font-serif italic text-text-body/50 leading-snug">
                  Factory visits TBA
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
