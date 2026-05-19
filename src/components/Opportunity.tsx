import { TrendingUp, Activity, Building2, MapPin, HardHat } from 'lucide-react';

const POINTS = [
  {
    icon: TrendingUp,
    title: 'GDP $2,6 nghìn tỷ',
    detail: 'Nền kinh tế lớn thứ 8 toàn cầu — vượt Canada và Hàn Quốc.',
  },
  {
    icon: Activity,
    title: 'Tăng trưởng #1 Hoa Kỳ',
    detail: 'Tốc độ phát triển dân số và GDP nhanh nhất nước Mỹ.',
  },
  {
    icon: Building2,
    title: 'Hệ sinh thái doanh nghiệp',
    detail: 'Tesla, SpaceX, Oracle, Apple, Google, Samsung đặt đại bản doanh.',
  },
  {
    icon: MapPin,
    title: 'Cửa ngõ Bắc Mỹ',
    detail: 'USMCA · biên giới Mexico · cảng Houston — vận chuyển trực tiếp.',
  },
  {
    icon: HardHat,
    title: 'Bùng nổ xây dựng',
    detail: 'Nhu cầu nhà ở, bất động sản thương mại và hạ tầng tăng không ngừng.',
  },
];

export function Opportunity() {
  return (
    <section id="co-hoi" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug
                     mb-10 lg:mb-14 max-w-5xl"
        >
          Cánh cổng vào thị trường Mỹ{' '}
          <em className="font-serif italic text-gradient-gold">
            trị giá 2,6 nghìn tỷ đô
          </em>
          .
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Subtitle + quote + Texas image */}
          <div className="flex flex-col">
            <p className="font-serif text-xl md:text-2xl text-text-heading mb-3 leading-snug">
              Thị trường phát triển nhất Bắc Mỹ.
            </p>
            <blockquote className="border-l-2 border-brand-gold/40 pl-4 mb-6 lg:mb-8">
              <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
                &ldquo;Texas không phải một bang — đây là nền kinh tế lớn thứ 8 thế giới.&rdquo;
              </p>
            </blockquote>
            <div className="relative">
              <img
                src="/logos/Texas.png"
                alt="Texas — cánh cổng vào thị trường Mỹ"
                className="w-full h-auto"
              />
              {/* Soft gold ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,163,116,0.12),transparent_60%)] pointer-events-none" />
            </div>
          </div>

          {/* Right — 5 bullet points with icon badges */}
          <ul className="flex flex-col gap-5 lg:gap-6">
            {POINTS.map(({ icon: Icon, title, detail }) => (
              <li key={title} className="flex items-start gap-4 lg:gap-5">
                <div
                  className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-brand-gold/40
                             bg-brand-gold/5 flex items-center justify-center shrink-0"
                >
                  <Icon size={18} className="text-brand-gold" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-text-muted font-light leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
