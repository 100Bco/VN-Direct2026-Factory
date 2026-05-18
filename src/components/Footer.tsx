import { Mail, Globe, ExternalLink } from 'lucide-react';

const PROGRAM_LINKS = [
  { label: 'Vấn đề', href: '#van-de' },
  { label: 'Cơ hội', href: '#co-hoi' },
  { label: 'Đoàn khách mua', href: '#doan-khach-mua' },
  { label: 'Chương trình', href: '#chuong-trinh' },
  { label: 'Ngành ưu tiên', href: '#nganh-uu-tien' },
  { label: 'Về 100B', href: '#ve-100b' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-subtle bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logos/100B%20-%20TACH%20NEN%20-1.png"
                alt="100B Beyond Borders"
                className="h-12 w-auto"
                width={144}
                height={48}
              />
              <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
                Beyond Borders
              </span>
            </div>
            <p className="text-sm italic font-light text-text-body">
              Made in Vietnam — Đi khắp năm châu.
            </p>
            <p className="text-xs text-text-muted mt-auto pt-4">
              © {year} Công ty Cổ phần 100B Holding.
            </p>
          </div>

          {/* Program */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
              Chương trình
            </p>
            <ul className="flex flex-col gap-3">
              {PROGRAM_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-body hover:text-brand-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
              Liên hệ
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:global@100b.co?subject=VN%20Direct%202026%20-%20%C4%90%C4%83ng%20k%C3%BD%20nh%C3%A0%20m%C3%A1y"
                  className="group inline-flex items-center gap-3 text-sm text-text-body hover:text-brand-gold transition-colors"
                >
                  <Mail size={14} className="text-brand-gold" />
                  global@100b.co
                </a>
              </li>
              <li>
                <a
                  href="https://100b.co/goglobal"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-text-body hover:text-brand-gold transition-colors"
                >
                  <Globe size={14} className="text-brand-gold" />
                  100b.co/goglobal
                </a>
              </li>
              <li>
                <a
                  href="https://vndirect2026.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-text-body hover:text-brand-gold transition-colors"
                >
                  <ExternalLink size={14} className="text-brand-gold" />
                  VN Direct 2026
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
          <p className="text-sm italic font-light text-text-muted">Trân trọng.</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Build Better Series · VN Direct 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
