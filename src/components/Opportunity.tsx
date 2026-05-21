import { TrendingUp, Activity, HardHat, MapPin } from 'lucide-react';

const POINTS = [
  {
    icon: TrendingUp,
    title: 'GDP $2,7 nghìn tỷ',
    detail: 'Vượt Canada và Hàn Quốc. Nền kinh tế lớn thứ 8 toàn cầu.',
  },
  {
    icon: Activity,
    title: 'Tăng trưởng số 1 Hoa Kỳ',
    detail: 'Tốc độ tăng dân số và GDP nhanh nhất nước Mỹ liên tục nhiều năm.',
  },
  {
    icon: HardHat,
    title: 'Bùng nổ xây dựng',
    detail: 'Nhu cầu nhà ở, bất động sản thương mại và hạ tầng tăng không ngừng.',
  },
  {
    icon: MapPin,
    title: 'Cửa ngõ Bắc Mỹ',
    detail: 'USMCA · biên giới Mexico · cảng Houston · vận chuyển trực tiếp.',
  },
];

export function Opportunity() {
  return (
    <section id="texas" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug
                     mb-10 lg:mb-14 max-w-5xl"
        >
          Texas — cửa ngõ vào nền kinh tế{' '}
          <em className="font-serif italic text-gradient-gold">
            <span className="font-display not-italic">$2,7</span> nghìn tỷ
          </em>
          .
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — quote + Texas image */}
          <div className="flex flex-col">
            <blockquote className="border-l-2 border-brand-gold/40 pl-4 mb-6 lg:mb-8">
              <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed">
                &ldquo;Texas không phải một bang. Đây là nền kinh tế lớn thứ 8 thế giới.&rdquo;
              </p>
            </blockquote>
            <div className="relative">
              <img
                src="/logos/Texas.png"
                alt="Texas — cánh cổng vào thị trường Mỹ"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,163,116,0.12),transparent_60%)] pointer-events-none" />
            </div>
          </div>

          {/* Right — 4 bullet points with icon badges */}
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
                  <p className="text-sm text-text-heading font-light leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
