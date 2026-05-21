import { ArrowRight, FileText } from 'lucide-react';

const CONTRACT_PDF =
  'https://drive.google.com/file/d/1VDp2lnCxfINLeho7W7p1IBHjbCVIbM5O/view?usp=sharing';

export function About() {
  return (
    <section
      id="ve-100b"
      className="relative py-20 lg:py-28 bg-bg-alt border-t border-border-subtle overflow-hidden"
    >
      {/* Corner pattern decoration — 100B watermark */}
      <img
        src="/logos/100B%20Pattern.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute
                   -bottom-16 -right-16 lg:-bottom-24 lg:-right-24
                   w-[320px] md:w-[460px] lg:w-[620px] xl:w-[760px]
                   opacity-[0.07] lg:opacity-[0.1]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-8">
            Nền tảng chiến lược
            <br />
            kết nối Việt Nam
            <br />
            với thị trường{' '}
            <em className="font-serif italic text-gradient-gold">toàn cầu</em>.
          </h2>

          <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed mb-5">
            100B Holding là đối tác chiến lược — kết nối trực tiếp nhà sản xuất Việt với người mua
            hàng, nhà đầu tư và nhà phát triển bất động sản tại Hoa Kỳ và châu Âu.
          </p>

          <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed mb-10">
            <em className="font-serif italic text-brand-gold">Build Better Series</em> là chuỗi
            chương trình thường niên của 100B — đưa đoàn khách mua chiến lược quốc tế đến tận
            xưởng sản xuất ở Châu Á. Vietnam Direct 2026 là chuyến đầu tiên.
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
              Hợp đồng hợp tác (mẫu)
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
