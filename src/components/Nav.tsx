'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Vấn đề', anchor: '#van-de' },
  { label: 'Cơ hội', anchor: '#co-hoi' },
  { label: 'Đoàn buyers', anchor: '#doan-buyers' },
  { label: 'Chương trình', anchor: '#chuong-trinh' },
  { label: 'Lợi ích', anchor: '#loi-ich' },
  { label: 'Tiêu chí', anchor: '#tieu-chi' },
  { label: 'Về 100B', anchor: '#ve-100b' },
];

const MAILTO =
  'mailto:global@100b.co?subject=VN%20Direct%202026%20-%20%C4%90%C4%83ng%20k%C3%BD%20nh%C3%A0%20m%C3%A1y';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/85 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="100B Beyond Borders">
          <img
            src="/logos/100B%20-%20TACH%20NEN%20-1.png"
            alt="100B Beyond Borders"
            className="h-9 md:h-10 w-auto"
            width={120}
            height={40}
          />
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.25em] text-text-muted">
            Beyond Borders
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.anchor}
              href={item.anchor}
              className="text-[11px] uppercase tracking-[0.18em] font-medium text-text-body
                         hover:text-brand-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href={MAILTO}
            className="btn-silver-gradient rounded-full px-5 py-2.5 text-[11px] uppercase
                       tracking-[0.18em]"
          >
            Liên Hệ 100B
          </a>
        </div>

        <button
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center
                     border border-border-subtle rounded-full text-text-heading"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg-dark/95 backdrop-blur-md border-t border-border-subtle">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] font-medium text-text-body
                           hover:text-brand-gold transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="btn-silver-gradient rounded-full px-5 py-3 mt-2 text-center
                         text-[11px] uppercase tracking-[0.18em]"
            >
              Liên Hệ 100B
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
