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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-10 max-w-5xl">
        <span className="font-display text-gradient-gold">8</span> ngày —{' '}
        <em className="font-serif italic text-gradient-gold">
          Từ xưởng đến Container đầu tiên
        </em>
        .
      </h2>

      {/* Contained panel — visually separates from Process section below */}
      <div className="relative rounded-3xl bg-bg-alt/80 border border-border-subtle p-6 md:p-10 lg:p-14">
        {/* Horizontal gold connector — desktop only */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[88px] left-[8%] right-[8%] h-px
                     bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0"
        />

        <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-3 relative">
          {DAYS.map((d) => (
            <li key={d.n} className="flex flex-col items-center text-center">
              {/* Day number — UTM gold */}
              <p className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none mb-2">
                {String(d.n).padStart(2, '0')}
              </p>

              {/* Date — caps white */}
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-heading font-semibold mb-5">
                {d.date}
              </p>

              {/* Dot — bigger, with ring punching through connector */}
              <div className="relative mb-5">
                <span
                  className="block w-5 h-5 rounded-full bg-brand-gold
                             ring-[6px] ring-bg-alt relative z-10"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 w-5 h-5 rounded-full bg-brand-gold/40 blur-md"
                />
              </div>

              {/* Location title */}
              <p className="text-sm lg:text-base font-bold font-sans text-text-heading leading-snug px-1 mb-3 min-h-[2.75em]">
                {d.title}
              </p>

              {/* Activity pill */}
              {d.activity && (
                <span
                  className="inline-block px-3 py-1.5 rounded-full
                             border border-brand-gold/50 bg-brand-gold/10
                             text-brand-gold text-[11px] font-semibold
                             leading-snug whitespace-nowrap"
                >
                  {d.activity}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
