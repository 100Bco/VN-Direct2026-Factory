import { ArrowRight, FileText } from 'lucide-react';
import { Section } from './Section';

const CONTRACT_PDF = '/docs/hop-dong-mau-vn-direct-2026.pdf';

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
          phát triển bất động sản tại Hoa Kỳ và châu Âu - bỏ qua các lớp trung gian, mở thị
          trường thực chất, xây dựng quan hệ hợp tác dài hạn.
        </p>

        <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed">
          <em className="font-serif italic text-brand-gold">Build Better Series</em> là chuỗi
          chương trình thường niên của 100B đưa đoàn khách mua chiến lược quốc tế đến tận xưởng
          sản xuất Việt Nam. Vietnam Direct 2026 là chuyến đầu tiên trong loạt - tập trung vào ngành
          vật liệu xây dựng và nội thất cao cấp.
        </p>
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
