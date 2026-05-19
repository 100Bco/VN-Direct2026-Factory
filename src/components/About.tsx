import { ArrowRight } from 'lucide-react';
import { Section } from './Section';

export function About() {
  return (
    <Section id="ve-100b" className="bg-bg-alt border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                       max-w-3xl"
          >
            <em className="font-serif italic text-gradient-gold">Made in Vietnam</em> — Đi khắp năm
            châu.
          </h2>

          <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-2xl">
            100B Holding là nền tảng chiến lược đưa doanh nghiệp Việt ra thị trường toàn cầu — kết
            nối trực tiếp với buyers, distributors và developers tại Hoa Kỳ và châu Âu.
          </p>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end">
          <a
            href="https://100b.co"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-text-heading hover:text-brand-gold
                       transition-colors text-sm uppercase tracking-[0.2em] font-semibold"
          >
            Xem thêm tại 100b.co
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
}
