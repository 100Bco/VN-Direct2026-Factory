import {
  ArrowRight,
  FileText,
  Handshake,
  TrendingUp,
  Megaphone,
  Truck,
  Compass,
} from 'lucide-react';
import { Section } from './Section';

const CONTRACT_PDF = '/docs/hop-dong-mau-vn-direct-2026.pdf';

const SERVICES = [
  {
    icon: Handshake,
    title: 'Xúc tiến thương mại',
    body: 'Kết nối doanh nghiệp Việt với đối tác toàn cầu — nhà mua hàng, nhà phân phối, tổng thầu và nhà phát triển bất động sản.',
  },
  {
    icon: TrendingUp,
    title: 'Gọi vốn đầu tư',
    body: 'Tạo điều kiện hợp tác và chia sẻ cơ hội đầu tư xuyên biên giới giữa doanh nghiệp Việt và quỹ quốc tế.',
  },
  {
    icon: Megaphone,
    title: 'Tiếp thị và xây dựng thương hiệu',
    body: 'Triển khai chiến lược truyền thông giúp doanh nghiệp định vị thương hiệu và khẳng định vị thế trên thị trường mục tiêu.',
  },
  {
    icon: Truck,
    title: 'Phân phối hàng hóa',
    body: 'Cung cấp và phân phối sản phẩm từ các thương hiệu Việt uy tín thông qua mạng lưới đại lý trong và ngoài nước.',
  },
  {
    icon: Compass,
    title: 'Tư vấn thâm nhập thị trường',
    body: 'Đồng hành cùng doanh nghiệp trong toàn bộ quá trình — pháp lý, vận chuyển, chứng nhận đến kênh phân phối và bán hàng.',
  },
];

const STATS = [
  { num: '5', label: 'Dịch vụ chiến lược' },
  { num: '2', label: 'Thị trường trọng tâm (Hoa Kỳ · châu Âu)' },
  { num: '2025–26', label: 'Giai đoạn tăng tốc go-global' },
];

export function About() {
  return (
    <Section id="ve-100b" className="bg-bg-alt border-t border-border-subtle">
      <div className="max-w-5xl mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-8">
          <em className="font-serif italic text-gradient-gold">Made in Vietnam</em> — Đi khắp năm
          châu.
        </h2>

        <p className="text-lg lg:text-xl text-text-heading font-light leading-relaxed mb-5">
          100B Holding là nền tảng chiến lược giúp doanh nghiệp Việt vươn ra thị trường toàn cầu.
        </p>

        <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed mb-5">
          Chúng tôi kết nối trực tiếp nhà sản xuất Việt với nhà mua hàng, nhà phân phối và nhà
          phát triển bất động sản tại Hoa Kỳ và châu Âu — bỏ qua các lớp trung gian, mở thị
          trường thực chất, xây dựng quan hệ hợp tác dài hạn.
        </p>

        <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed">
          <em className="font-serif italic text-brand-gold">Build Better Series</em> là chuỗi
          chương trình thường niên của 100B đưa đoàn khách mua chiến lược quốc tế đến tận xưởng
          sản xuất Việt Nam. VN Direct 2026 là chuyến đầu tiên trong loạt — tập trung vào ngành
          vật liệu xây dựng và nội thất cao cấp.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-bg-card rounded-2xl border border-border-subtle p-6 flex flex-col gap-2"
          >
            <span className="text-4xl lg:text-5xl font-display text-gradient-gold leading-none">
              {s.num}
            </span>
            <span className="text-xs lg:text-sm uppercase tracking-[0.15em] text-text-heading font-semibold leading-snug">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* 5 services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
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
            <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug">
              {title}
            </h3>
            <p className="text-sm text-text-heading font-light leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <a
          href="https://100b.co"
          target="_blank"
          rel="noreferrer"
          className="group btn-silver-gradient rounded-full px-8 py-4
                     text-xs uppercase tracking-[0.2em] inline-flex items-center
                     justify-center gap-3"
        >
          Khám phá 100B
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href={CONTRACT_PDF}
          target="_blank"
          rel="noreferrer"
          className="group rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em]
                     font-semibold inline-flex items-center justify-center gap-3
                     border border-brand-gold/60 text-brand-gold
                     hover:bg-brand-gold/10 hover:border-brand-gold transition-colors"
        >
          <FileText size={14} />
          Hợp đồng hợp tác
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Section>
  );
}
