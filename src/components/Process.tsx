import { Section } from './Section';

interface Step {
  n: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Đăng ký quan tâm',
    body: 'Nhà máy gửi đăng ký · 100B tiếp nhận và sàng lọc theo tiêu chí.',
  },
  {
    n: '02',
    title: 'Khảo sát & tư vấn',
    body: '100B trực tiếp đến nhà máy · thẩm định năng lực sản xuất, chứng nhận, capacity.',
  },
  {
    n: '03',
    title: 'Đoàn khách thăm xưởng',
    body: 'Buyers đến tận nơi · brief 1-on-1 spec, volume, lead time, payment terms.',
  },
  {
    n: '04',
    title: 'Hợp đồng & đơn hàng thử',
    body: 'Ký hợp đồng khung · đặt container đầu tiên để kiểm chứng chất lượng.',
  },
  {
    n: '05',
    title: 'Vận chuyển & mở rộng',
    body: '100B đồng hành logistics · scale theo nhu cầu thị trường thực tế.',
  },
];

export function Process() {
  return (
    <Section id="quy-trinh" eyebrow="Quy trình hợp tác">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Năm bước từ đăng ký đến{' '}
        <em className="font-serif italic text-gradient-gold">container đầu tiên</em>.
      </h2>

      <div className="relative">
        {/* Connecting line — chỉ hiện desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r
                     from-transparent via-brand-gold/40 to-transparent"
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative bg-bg-card rounded-2xl p-6 lg:p-7 border border-border-subtle
                         hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
            >
              <div
                className="w-14 h-14 rounded-full bg-bg-dark border border-brand-gold/40
                           flex items-center justify-center shrink-0
                           text-2xl font-display text-gradient-gold leading-none font-medium"
              >
                {s.n}
              </div>
              <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-text-body font-light leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
