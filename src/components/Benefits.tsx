import { Section } from './Section';

interface Benefit {
  n: string;
  title: string;
  body?: string;
  bullets?: string[];
}

const BENEFITS: Benefit[] = [
  {
    n: '01',
    title: 'Kết nối trực tiếp — không trung gian',
    body: 'Cùng 100B làm việc thẳng với chủ đầu tư và chủ thầu có dự án đang triển khai. Không môi giới. Không phân phối.',
  },
  {
    n: '02',
    title: 'Khách hàng đã được thẩm định',
    bullets: [
      'Ngân sách rõ ràng · dự án đang chạy',
      'Nhu cầu ký kết trong 6 đến 18 tháng',
      'Không phải khách hàng tiềm năng mơ hồ',
    ],
  },
  {
    n: '03',
    title: 'Đối tác chiến lược — không phải giao dịch đơn lẻ',
    bullets: [
      'Quan hệ hợp tác 3 đến 5 năm',
      '100B đồng hành xây kênh D2C bền vững',
      'Không đặt hàng một lần rồi biến mất',
    ],
  },
  {
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

      <ul className="flex flex-col">
        {BENEFITS.map((b, i) => (
          <li
            key={b.n}
            className={`grid grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-7 ${
              i < BENEFITS.length - 1 ? 'border-b border-border-subtle/50' : ''
            }`}
          >
            <div className="col-span-12 md:col-span-2 lg:col-span-1">
              <span className="text-3xl lg:text-4xl font-display text-gradient-gold leading-none font-medium">
                {b.n}
              </span>
            </div>
            <div className="col-span-12 md:col-span-10 lg:col-span-11">
              <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading leading-snug mb-3">
                {b.title}
              </h3>
              {b.body && (
                <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
                  {b.body}
                </p>
              )}
              {b.bullets && (
                <ul className="space-y-1.5">
                  {b.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm lg:text-base text-text-heading font-light leading-relaxed"
                    >
                      <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
