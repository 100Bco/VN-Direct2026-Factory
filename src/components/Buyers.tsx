'use client';

import { useState } from 'react';
import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  interest: string;
  initials: string;
  photo: string;
}

const BUYERS: Buyer[] = [
  {
    name: 'Lezlie Tram Le',
    role: 'CEO, LT Commercial · Đại diện 100B tại Texas',
    subtitle: '22+ năm bất động sản thương mại Texas',
    intro:
      'Dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang Texas — và là cầu nối 100B với thị trường Mỹ.',
    bullets: [
      '$55 triệu USD dự án xây dựng mới',
      'Hơn $250 triệu USD thương vụ M&A',
      'Chủ tịch AREAA Austin (2020)',
      'Austin Under 40 — Bất động sản (2021)',
    ],
    interest:
      'Phụ trách kết nối nhà máy Việt với thị trường Texas — VLXD và nội thất.',
    initials: 'LT',
    photo: '/logos/Lezlie%20Tram.jpg',
  },
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng — Austin, Texas',
    subtitle: '30 năm xây dựng · Multi-family & HUD specialist',
    intro:
      '30 năm kinh nghiệm xây dựng — từ cải tạo, custom home đến multi-family thuế tín dụng và dự án HUD-funded.',
    bullets: [
      'Quy mô $10M – $24M mỗi công trình',
      'Multi-family tax credit specialist',
      'HUD-funded housing portfolio',
      'Thị trường: Corpus Christi · Houston · Austin · San Antonio',
    ],
    interest: 'Vật liệu xây dựng số lượng lớn, đạt chuẩn HUD và quy định địa phương.',
    initials: 'MH',
    photo: '/logos/Michael%20Hough.jpeg',
  },
  {
    name: 'Mick Hawton',
    role: 'Đối tác điều hành, Headwater',
    subtitle: '35 năm bất động sản thương mại & thị trường vốn Bắc Mỹ',
    intro:
      'Hơn 30 năm phát triển BĐS thương mại, capital markets và vận hành — góc nhìn toàn diện từ dự án đến chiến lược tài chính.',
    bullets: [
      'Partner & cựu Chief Strategy Officer · Headwater',
      'VP Capital Markets · Avison Young (Canada)',
      'VP Operations · Trig Life Services',
      'Managing Principal · OneDigital',
    ],
    interest:
      'Vật liệu cho commercial real estate; góc nhìn capital markets về chuỗi cung ứng dài hạn.',
    initials: 'MH',
    photo: '/logos/Mick%20Hawton.jpeg',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Nhà phát triển BĐS — Rio Grande Valley, Texas',
    subtitle: '5 thế hệ làm BĐS từ 1908 · 760+ căn multi-family đang triển khai',
    intro:
      '23 năm kinh nghiệm. Lớn lên hai bên biên giới Mỹ – Mexico. Sứ mệnh: "Building a better Valley."',
    bullets: [
      '320-unit apartment tại Weslaco (đã sở hữu)',
      '168-unit Pharr + 275-unit Edinburg (kế hoạch)',
      'Class-A retail tại 7 thành phố Rio Grande Valley',
      'Khách thuê: Olive Garden · AT&T · T-Mobile · Panda Express',
    ],
    interest:
      'Vật liệu cho multi-family và mặt bằng thương mại hạng A quy mô lớn.',
    initials: 'RR',
    photo: '/logos/Ricardo%20Rubiano.jpg',
  },
  {
    name: 'Kameron Schram',
    role: 'Founder, Cleo Builders',
    subtitle: 'Boutique luxury custom home builder, Texas',
    intro:
      'Chuyên nhà ở cao cấp đặt riêng — tay nghề thủ công, chi tiết thiết kế, dấu ấn riêng cho từng khách hàng.',
    bullets: [
      '1 dự án 9 căn hộ đang xây',
      '1 custom home đang xây',
      '4 custom homes đang thiết kế ($2M – $3,2M/căn)',
      '1 tenant finish-out đang lập kế hoạch',
    ],
    interest:
      'Đối tác nhà máy lâu dài, chất lượng nhất quán cho phân khúc cao cấp.',
    initials: 'KS',
    photo: '/logos/Cameron%20Schram.jpg',
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
      className="bg-bg-alt border-y border-border-subtle !py-16 lg:!py-20"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-10 max-w-4xl">
        <span className="font-display text-gradient-gold">5</span>{' '}
        <em className="font-serif italic text-gradient-gold">nhà phát triển bất động sản</em>{' '}
        hàng đầu.
      </h2>

      {/* Carousel — relative wrapper for side arrows */}
      <div className="relative">
        {/* PREV arrow — left side (desktop only) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Khách mua trước"
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 z-10
                     w-14 h-14 rounded-full
                     bg-bg-dark/70 hover:bg-bg-dark border border-border-subtle
                     hover:border-brand-gold transition-colors
                     items-center justify-center backdrop-blur-sm"
        >
          <img
            src="/logos/carbon_next-filled-1.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>

        {/* NEXT arrow — right side (desktop only) */}
        <button
          type="button"
          onClick={next}
          aria-label="Khách mua tiếp theo"
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-10
                     w-14 h-14 rounded-full
                     bg-bg-dark/70 hover:bg-bg-dark border border-border-subtle
                     hover:border-brand-gold transition-colors
                     items-center justify-center backdrop-blur-sm"
        >
          <img
            src="/logos/carbon_next-filled.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>

        {/* Card content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center
                     px-4 lg:px-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Đoàn khách mua chiến lược"
        >
          {/* Photo panel */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div
              className="relative aspect-square w-full max-w-sm mx-auto lg:max-w-none
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
              <img
                key={buyer.photo}
                src={buyer.photo}
                alt={buyer.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-2 rounded-3xl border border-white/5 pointer-events-none" />
            </div>
          </div>

          {/* Text panel — uniform height across all buyers */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col">
            {/* Slide counter */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-text-heading font-semibold">
                / {String(BUYERS.length).padStart(2, '0')}
              </span>
            </div>

            {/* Name */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-text-heading leading-snug mb-2">
              {buyer.name}
            </h3>

            {/* Role eyebrow */}
            <p className="text-xs lg:text-sm text-brand-gold uppercase tracking-[0.18em] font-semibold leading-snug mb-3">
              {buyer.role}
            </p>

            {/* Subtitle — plain white sans, not italic */}
            <p className="text-sm lg:text-base text-text-heading font-medium leading-relaxed mb-5">
              {buyer.subtitle}
            </p>

            {/* Intro */}
            <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed mb-5">
              {buyer.intro}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6">
              {buyer.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm lg:text-base text-text-heading font-light leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Quan tâm */}
            <div className="mt-auto pt-4 border-t border-border-subtle">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-2">
                Quan tâm
              </p>
              <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
                {buyer.interest}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile arrows row — below content (hidden on lg+) */}
        <div className="lg:hidden mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Khách mua trước"
            className="w-12 h-12 rounded-full border border-border-subtle
                       hover:border-brand-gold transition-colors
                       flex items-center justify-center bg-bg-dark/70 backdrop-blur-sm"
          >
            <img
              src="/logos/carbon_next-filled-1.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-text-heading font-semibold">
            {String(index + 1).padStart(2, '0')} / {String(BUYERS.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Khách mua tiếp theo"
            className="w-12 h-12 rounded-full border border-border-subtle
                       hover:border-brand-gold transition-colors
                       flex items-center justify-center bg-bg-dark/70 backdrop-blur-sm"
          >
            <img
              src="/logos/carbon_next-filled.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>
    </Section>
  );
}
