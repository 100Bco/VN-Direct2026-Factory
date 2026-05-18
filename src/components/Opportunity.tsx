import { Section } from './Section';

const STATS = [
  { value: '$2,6T', detail: 'GDP Texas — Top 8 thế giới' },
  { value: '#1', detail: 'Bang phát triển nhanh nhất Hoa Kỳ' },
  { value: '6 tập đoàn', detail: 'Tesla • SpaceX • Oracle • Apple • Google • Samsung HQ' },
  { value: '24/7', detail: 'Nhu cầu nhà ở, BĐS thương mại, hạ tầng tăng liên tục' },
];

export function Opportunity() {
  return (
    <Section id="co-hoi" eyebrow="Cơ hội">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Texas — Cánh cổng vào thị trường Mỹ{' '}
        <em className="font-serif italic text-gradient-gold">2,6 nghìn tỷ USD</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Texas không chỉ là một bang. Đây là nền kinh tế đứng thứ{' '}
        <span className="text-text-heading font-normal">8 thế giới</span>, lớn hơn cả Canada hay
        Hàn Quốc. Austin — thủ phủ Texas — đặt đại bản doanh của Tesla, SpaceX, Oracle, Apple,
        Google, Samsung. Khi các tập đoàn này mở rộng, kéo theo hệ sinh thái xây dựng, nhà ở, hạ
        tầng bùng nổ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {STATS.map((s) => (
          <div
            key={s.value}
            className="bg-bg-card rounded-3xl p-8 border border-border-subtle
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

      <p className="mt-14 text-lg lg:text-xl font-serif italic text-text-heading leading-relaxed max-w-3xl">
        Đây không phải thị trường ngắn hạn. Đây là{' '}
        <span className="text-gradient-gold not-italic font-serif">đường dài 10–20 năm</span> cho
        ngành VLXD & nội thất chất lượng cao từ Việt Nam.
      </p>
    </Section>
  );
}
