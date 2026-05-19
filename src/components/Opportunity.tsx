import { ArrowRight } from 'lucide-react';
import { Section } from './Section';

const MAILTO =
  'mailto:global@100b.co?subject=VN%20Direct%202026%20-%20%C4%90%E1%BA%B7t%20container%20%C4%91%E1%BA%A7u%20ti%C3%AAn';

const TEXAS_STATS = [
  { value: '$2,6T', detail: 'GDP Texas — xếp thứ 8 toàn cầu' },
  { value: '#1', detail: 'Tốc độ tăng trưởng nhanh nhất Hoa Kỳ' },
  { value: '6', detail: 'Tập đoàn toàn cầu đặt HQ tại Texas — Tesla, SpaceX, Apple, Google…' },
];

export function Opportunity() {
  return (
    <Section id="co-hoi" eyebrow="Cơ hội · Texas">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Texas — cánh cổng vào thị trường Mỹ trị giá{' '}
        <em className="font-serif italic text-gradient-gold">2,6 nghìn tỷ đô</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Lớn hơn Canada hay Hàn Quốc. Tesla, SpaceX, Apple, Google, Samsung đều đặt đại bản doanh tại
        đây — kéo theo cả một hệ sinh thái xây dựng và nội thất bùng nổ.
      </p>

      {/* Texas stats — 3 cards (compact) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
        {TEXAS_STATS.map((s) => (
          <div
            key={s.value}
            className="bg-bg-card rounded-2xl p-7 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
          >
            <div className="text-5xl lg:text-6xl font-display text-gradient-gold leading-none">
              {s.value}
            </div>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {s.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Action CTA — đặt ngay nửa container */}
      <div
        className="relative rounded-2xl border border-brand-gold/40 overflow-hidden
                   bg-[radial-gradient(ellipse_at_top_left,rgba(195,163,116,0.15),transparent_60%)]
                   p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-4">
              Bước đầu tiên
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-text-heading leading-snug mb-3">
              Đặt ngay{' '}
              <em className="font-serif italic text-gradient-gold">nửa container đầu tiên</em>.
            </h3>
            <p className="text-base lg:text-lg text-text-body font-light leading-relaxed">
              Không cần ký dài hạn. Bắt đầu nhỏ — kiểm chứng chất lượng, đo lường lợi nhuận, mở rộng
              theo nhu cầu thực tế.
            </p>
          </div>
          <a
            href={MAILTO}
            className="group btn-silver-gradient rounded-full px-8 py-4
                       text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3
                       shrink-0 self-start lg:self-auto"
          >
            Đặt Container Đầu Tiên
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
}
