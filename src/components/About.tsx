import { Handshake, TrendingUp, Megaphone, Truck, Compass, ArrowRight } from 'lucide-react';
import { Section } from './Section';

const MAILTO =
  'mailto:global@100b.co?subject=VN%20Direct%202026%20-%20%C4%90%C4%83ng%20k%C3%BD%20nh%C3%A0%20m%C3%A1y';

const SERVICES = [
  {
    icon: Handshake,
    title: 'Xúc tiến thương mại',
    body: 'Kết nối doanh nghiệp Việt Nam với các đối tác toàn cầu — nhà mua hàng, nhà phân phối, tổng thầu và nhà phát triển.',
  },
  {
    icon: TrendingUp,
    title: 'Gọi vốn đầu tư',
    body: 'Tạo điều kiện hợp tác và chia sẻ cơ hội đầu tư xuyên biên giới.',
  },
  {
    icon: Megaphone,
    title: 'Tiếp thị và Xây dựng thương hiệu',
    body: 'Triển khai chiến lược truyền thông giúp doanh nghiệp định vị thương hiệu, khẳng định vị thế và mở rộng tầm ảnh hưởng tại thị trường mục tiêu.',
  },
  {
    icon: Truck,
    title: 'Phân phối hàng hóa',
    body: 'Cung cấp và phân phối sản phẩm từ các thương hiệu Việt uy tín thông qua mạng lưới đại lý và nhà phân phối trong và ngoài nước.',
  },
  {
    icon: Compass,
    title: 'Tư vấn chiến lược thâm nhập thị trường',
    body: 'Đồng hành cùng doanh nghiệp trong toàn bộ quá trình thâm nhập từng thị trường cụ thể — từ pháp lý, vận chuyển, chứng nhận đến kênh phân phối và bán hàng.',
  },
];

export function About() {
  return (
    <Section id="ve-100b" eyebrow="Về 100B" className="bg-bg-alt border-t border-border-subtle">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        <em className="font-serif italic text-gradient-gold">Made in Vietnam</em> — Đi khắp năm
        châu.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        100B Holding là nền tảng chiến lược giúp các doanh nghiệp Việt Nam có sản phẩm mạnh vươn ra
        thị trường toàn cầu. Chúng tôi là cầu nối — cung cấp giải pháp toàn diện để doanh nghiệp
        Việt chinh phục các thị trường quốc tế, với trọng tâm là Hoa Kỳ và châu Âu trong giai đoạn
        2025–2026.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-14">
        {SERVICES.map(({ icon: Icon, title, body }) => (
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
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="relative rounded-2xl border border-border-subtle p-10 lg:p-16
                   bg-[radial-gradient(ellipse_at_center,rgba(195,163,116,0.12),transparent_70%)]
                   text-center flex flex-col items-center gap-8"
      >
        <blockquote className="max-w-3xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-light text-text-heading leading-snug">
            Made in Vietnam — Đi khắp năm châu.
          </p>
        </blockquote>

        <a
          href={MAILTO}
          className="group btn-silver-gradient rounded-full px-8 py-4
                     text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3"
        >
          Gửi Đăng Ký Nhà Máy
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Section>
  );
}
