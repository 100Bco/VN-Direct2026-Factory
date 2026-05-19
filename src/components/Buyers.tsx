'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  highlight: string;
  initials: string;
}

const BUYERS: Buyer[] = [
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng, Texas',
    highlight: '5 thế hệ làm bất động sản · 600 căn/năm đang phát triển.',
    initials: 'MH',
  },
  {
    name: 'Mick Hawton',
    role: 'Đối tác điều hành, Headwater',
    highlight: '35 năm trong bất động sản thương mại và thị trường vốn Bắc Mỹ.',
    initials: 'MH',
  },
  {
    name: 'Michael Houghton',
    role: 'Tổng thầu — Austin, Texas',
    highlight: 'Multi-family & HUD-funded housing, quy mô $10–24M mỗi dự án.',
    initials: 'MH',
  },
  {
    name: 'Lezlie Tram Le',
    role: 'CEO, LT Commercial Group · Đại diện 100B tại Texas',
    highlight: 'Hơn 22 năm bất động sản thương mại Texas.',
    initials: 'LT',
  },
  {
    name: 'Kameron Schram',
    role: 'Founder, Cleo Builders',
    highlight: 'Boutique luxury custom home builder, Texas.',
    initials: 'KS',
  },
];

export function Buyers() {
  const [index, setIndex] = useState(0);
  const buyer = BUYERS[index];

  const goTo = (i: number) => setIndex(((i % BUYERS.length) + BUYERS.length) % BUYERS.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <Section
      id="doan-khach-mua"
      eyebrow="Đoàn khách mua chiến lược"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Năm nhà phát triển bất động sản hàng đầu —{' '}
        <em className="font-serif italic text-gradient-gold">cùng một chuyến đi</em>.
      </h2>

      {/* Carousel */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        role="region"
        aria-roledescription="carousel"
        aria-label="Đoàn khách mua chiến lược"
      >
        {/* Photo panel */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div
            className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none
                       rounded-3xl overflow-hidden
                       bg-gradient-to-br from-bg-card-hover via-bg-alt to-bg-dark
                       border border-border-subtle
                       shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[clamp(80px,18vw,180px)] text-gradient-gold leading-none opacity-80">
                {buyer.initials}
              </span>
            </div>
            <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute inset-2 rounded-3xl border border-white/5 pointer-events-none" />
          </div>
        </div>

        {/* Text panel */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
              / {String(BUYERS.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-text-heading leading-snug mb-3">
            {buyer.name}
          </h3>
          <p className="text-xs lg:text-sm text-brand-gold uppercase tracking-[0.18em] font-semibold leading-snug mb-6">
            {buyer.role}
          </p>

          <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-xl">
            {buyer.highlight}
          </p>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Khách mua trước"
          className="w-12 h-12 rounded-full border border-border-subtle text-text-heading
                     hover:border-brand-gold hover:text-brand-gold transition-colors
                     flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2.5">
          {BUYERS.map((b, i) => (
            <button
              key={b.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Đến slide ${i + 1}: ${b.name}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-10 bg-brand-gold'
                  : 'w-1.5 bg-border-subtle hover:bg-brand-gold/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Khách mua tiếp theo"
          className="w-12 h-12 rounded-full border border-border-subtle text-text-heading
                     hover:border-brand-gold hover:text-brand-gold transition-colors
                     flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
