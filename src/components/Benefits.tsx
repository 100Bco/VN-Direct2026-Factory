import { ArrowRight, ShieldCheck, Handshake, Sparkles } from 'lucide-react';
import { Section } from './Section';

interface Benefit {
  icon: typeof ArrowRight;
  n: string;
  title: string;
  body?: string;
  bullets?: string[];
}

const BENEFITS: Benefit[] = [
  {
    icon: ArrowRight,
    n: '01',
    title: 'Kết nối trực tiếp — không trung gian',
    body: 'Cùng 100B làm việc thẳng với chủ đầu tư và chủ thầu có dự án đang triển khai. Không môi giới. Không phân phối.',
  },
  {
    icon: ShieldCheck,
    n: '02',
    title: 'Khách hàng đã được thẩm định',
    bullets: [
      'Ngân sách rõ ràng · dự án đang chạy',
      'Nhu cầu ký kết trong 6 - 18 tháng',
      'Không phải khách hàng tiềm năng mơ hồ',
    ],
  },
  {
    icon: Handshake,
    n: '03',
    title: 'Đối tác chiến lược - không giao dịch đơn lẻ',
    bullets: [
      'Quan hệ hợp tác 3 đến 5 năm',
      '100B đồng hành xây kênh D2C bền vững',
      'Không đặt hàng một lần rồi biến mất',
    ],
  },
  {
    icon: Sparkles,
    n: '04',
    title: 'Cùng xây thương hiệu trên thị trường Mỹ',
    bullets: [
      'Thương hiệu riêng · dòng sản phẩm độc quyền',
      'Showroom và hiện diện tại thị trường Mỹ',
      'Kiểm soát giá bán và quan hệ khách hàng',
    ],
  },
];

export function Benefits() {
  return (
    <Section
      id="quyen-loi"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Những gì nhà máy{' '}
        <em className="font-serif italic text-gradient-gold">nhận được</em>.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {BENEFITS.map(({ icon: Icon, n, title, body, bullets }) => (
          <div
            key={n}
            className="bg-bg-card rounded-2xl p-6 lg:p-7 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div
                className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30
                           flex items-center justify-center shrink-0"
              >
                <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-display text-gradient-gold leading-none font-medium">
                {n}
              </span>
            </div>
            <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug">
              {title}
            </h3>
            {body && (
              <p className="text-sm text-text-heading font-light leading-relaxed">{body}</p>
            )}
            {bullets && (
              <ul className="space-y-1.5">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-heading font-light leading-relaxed"
                  >
                    <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
