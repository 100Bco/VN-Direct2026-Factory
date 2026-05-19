import { ArrowRight, FileText } from 'lucide-react';
import { Section } from './Section';

const CONTRACT_PDF = '/docs/hop-dong-mau-vn-direct-2026.pdf';

export function About() {
  return (
    <Section id="ve-100b" className="bg-bg-alt border-t border-border-subtle">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6">
          <em className="font-serif italic text-gradient-gold">Made in Vietnam</em> — Đi khắp năm
          châu.
        </h2>

        <p className="text-lg lg:text-xl text-text-heading font-light leading-relaxed max-w-3xl mb-10">
          100B Holding là nền tảng chiến lược đưa doanh nghiệp Việt ra thị trường toàn cầu — kết
          nối trực tiếp với buyers, distributors và developers tại Hoa Kỳ và châu Âu.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href="https://100b.co"
            target="_blank"
            rel="noreferrer"
            className="group btn-silver-gradient rounded-full px-8 py-4
                       text-xs uppercase tracking-[0.2em] inline-flex items-center
                       justify-center gap-3"
          >
            Explore 100B
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
      </div>
    </Section>
  );
}
