import { ArrowRight } from 'lucide-react';

const MAILTO =
  'mailto:global@100b.co?subject=Vietnam%20Direct%20-%20%C4%90%C4%83ng%20k%C3%BD%20nh%C3%A0%20m%C3%A1y';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg-dark border-t border-border-subtle">
      {/* Final CTA block */}
      <section className="py-20 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-4">
            Liên hệ 100B
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-3">
            Sẵn sàng{' '}
            <em className="font-serif italic text-gradient-gold">tham gia</em>?
          </h2>
          <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed mb-8">
            <a
              href="mailto:global@100b.co"
              className="text-text-heading hover:text-brand-gold transition-colors"
            >
              global@100b.co
            </a>{' '}
            ·{' '}
            <a
              href="https://100b.co"
              target="_blank"
              rel="noreferrer"
              className="text-text-heading hover:text-brand-gold transition-colors"
            >
              100b.co
            </a>
          </p>
          <a
            href={MAILTO}
            className="group btn-silver-gradient rounded-full px-8 py-4
                       text-xs uppercase tracking-[0.2em] inline-flex items-center
                       justify-center gap-3"
          >
            Gửi yêu cầu hợp tác
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Copyright row */}
      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-body">
            © {year} Công ty Cổ phần 100B Holding · Build Better Series · Vietnam Direct
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-body">
            Powered by{' '}
            <a
              href="https://100bold.co"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold font-semibold hover:text-brand-gold-hover transition-colors"
            >
              100Bold
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
