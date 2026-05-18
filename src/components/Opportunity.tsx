import { Section } from './Section';

const STATS = [
  { value: '$2,6T', detail: 'Tổng sản phẩm nội địa Texas — xếp thứ 8 toàn cầu' },
  { value: 'Số 1', detail: 'Bang có tốc độ phát triển nhanh nhất tại Hoa Kỳ' },
  {
    value: '6 tập đoàn',
    detail: 'Tesla • SpaceX • Oracle • Apple • Google • Samsung đặt đại bản doanh',
  },
  {
    value: 'Không ngừng',
    detail: 'Nhà ở, bất động sản thương mại và hạ tầng tăng trưởng liên tục',
  },
];

export function Opportunity() {
  return (
    <Section id="co-hoi" eyebrow="Cơ hội">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Texas — Cánh cổng vào thị trường Hoa Kỳ trị giá{' '}
        <em className="font-serif italic text-gradient-gold">2,6 nghìn tỷ đô la</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Texas không đơn thuần là một bang. Đây là nền kinh tế đứng thứ{' '}
        <span className="text-text-heading font-normal">tám thế giới</span> — lớn hơn cả Canada hay
        Hàn Quốc. Austin, thủ phủ của Texas, là nơi đặt trụ sở của Tesla, SpaceX, Oracle, Apple,
        Google và Samsung. Khi các tập đoàn này mở rộng, họ kéo theo cả một hệ sinh thái xây dựng,
        nhà ở và hạ tầng bùng nổ theo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {STATS.map((s) => (
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

      <p className="mt-12 text-lg lg:text-xl font-serif italic text-text-heading font-light leading-relaxed max-w-3xl">
        Đây không phải thị trường ngắn hạn. Đây là{' '}
        <span className="font-serif italic text-gradient-gold">con đường dài 10 đến 20 năm</span>{' '}
        cho ngành vật liệu xây dựng và nội thất chất lượng cao từ Việt Nam.
      </p>
    </Section>
  );
}
