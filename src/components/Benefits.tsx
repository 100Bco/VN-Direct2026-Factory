import { Building2, ShieldCheck, ArrowRight, Handshake } from 'lucide-react';
import { Section } from './Section';

const BENEFITS = [
  {
    icon: Building2,
    title: 'Tham quan xưởng trực tiếp',
    body: 'Xem dây chuyền sản xuất • Kiểm tra quy trình QC • Làm việc với đội kỹ thuật.',
  },
  {
    icon: ShieldCheck,
    title: 'Tiếp cận khách hàng đã thẩm định',
    body: 'Có dự án triển khai · Ngân sách rõ ràng · Nhu cầu ký kết trong 6–18 tháng.',
  },
  {
    icon: ArrowRight,
    title: 'Kết nối trực tiếp 1-1 với buyer',
    body: 'Không trung gian · không môi giới.',
  },
  {
    icon: Handshake,
    title: 'Hợp tác dài hạn 3 – 5 năm',
    body: 'Đối tác bền vững, không phải giao dịch đơn lẻ.',
  },
];

export function Benefits() {
  return (
    <Section
      id="quyen-loi"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Lợi ích <em className="font-serif italic text-gradient-gold">tham dự</em>.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
          >
            <div
              className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30
                         flex items-center justify-center shrink-0"
            >
              <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading leading-snug">
              {title}
            </h3>
            <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
