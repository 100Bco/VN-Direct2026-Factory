import { Building2, Users, ShieldCheck, ArrowRight, Handshake, Megaphone } from 'lucide-react';
import { Section } from './Section';

const BENEFITS = [
  {
    icon: Building2,
    title: 'Visit trực tiếp tại xưởng',
    body: 'Dây chuyền · QC · đội kỹ thuật.',
  },
  {
    icon: Users,
    title: 'Đối thoại 1-on-1 với buyers',
    body: 'Spec · sản lượng · tiến độ.',
  },
  {
    icon: ShieldCheck,
    title: 'Khách hàng đã thẩm định',
    body: 'Pipeline active · ngân sách sẵn · quyết định trong 6–18 tháng.',
  },
  {
    icon: ArrowRight,
    title: 'Kết nối trực tiếp',
    body: 'Không trung gian · không môi giới.',
  },
  {
    icon: Handshake,
    title: 'Hợp tác dài hạn 3 – 5 năm',
    body: 'Đối tác bền vững, không phải deal đơn lẻ.',
  },
  {
    icon: Megaphone,
    title: 'Hiện diện truyền thông',
    body: '100B · LT Commercial · case study Build Better Series.',
  },
];

export function Benefits() {
  return (
    <Section
      id="quyen-loi"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Khi nhà máy của Quý vị{' '}
        <em className="font-serif italic text-gradient-gold">có tên trong chương trình</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
