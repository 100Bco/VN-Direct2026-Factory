'use client';

import { useState } from 'react';
import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  initials: string;
  photo: string;
  pending?: boolean;
}

const BUYERS: Buyer[] = [
  {
    name: 'Lezlie Tram Le',
    role: 'CEO, LT Commercial Group',
    subtitle: 'Đối tác chiến lược của 100B tại thị trường Mỹ · 22 năm bất động sản thương mại Texas',
    intro:
      'Dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang Texas. Đối tác chiến lược của 100B tại thị trường Mỹ.',
    bullets: [
      '$55 triệu USD dự án xây dựng mới',
      'Hơn $250 triệu USD thương vụ mua bán',
      'Chủ tịch AREAA Austin (2020)',
      'Austin Under 40 — Bất động sản (2021)',
    ],
    initials: 'LT',
    photo: '/logos/Lezlie%20Tram.jpg',
  },
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng — Austin, Texas',
    subtitle: '30 năm xây dựng · Multi-family & HUD specialist',
    intro:
      '30 năm kinh nghiệm xây dựng từ cải tạo, custom home đến multi-family. Có nhu cầu vật liệu ổn định và trực tiếp ra quyết định mua.',
    bullets: [
      'Quy mô $5M – $24M mỗi công trình',
      'Multi-family tax credit specialist',
      'HUD-funded housing portfolio',
      'Thị trường: Austin · San Antonio',
    ],
    initials: 'MH',
    photo: '/logos/Michael%20Hough.jpeg',
  },
  {
    name: 'Kameron Schram',
    role: 'Founder, Cleo Builders — Texas',
    subtitle: 'Boutique luxury custom home builder',
    intro:
      'Chuyên nhà ở trung cao cấp — tay nghề thủ công, chi tiết thiết kế, dấu ấn riêng cho từng khách hàng.',
    bullets: [
      '1 dự án 9 căn hộ sắp xây',
      '4 custom homes đang thiết kế ($2M – $3,2M/căn)',
      '1 tenant finish-out đang lập kế hoạch',
    ],
    initials: 'KS',
    photo: '/logos/Cameron%20Schram.jpg',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Chủ đầu tư — Rio Grande Valley, Texas',
    subtitle: '5 thế hệ làm bất động sản từ 1908 · 600+ căn multi-family đang triển khai',
    intro:
      '23 năm kinh nghiệm. Lớn lên hai bên biên giới Mỹ – Mexico. Hiểu rõ thị trường từ nội địa đến xuyên biên giới.',
    bullets: [
      '320-unit apartment tại Weslaco (đã sở hữu)',
      '168-unit Pharr + 275-unit Edinburg (kế hoạch)',
      'Class-A retail tại 7 thành phố Rio Grande Valley',
      'Khách thuê: Olive Garden · AT&T · T-Mobile · Panda Express',
    ],
    initials: 'RR',
    photo: '/logos/Ricardo%20Rubiano.jpg',
  },
  {
    name: 'Mick Hawton',
    role: 'Giám đốc điều hành, Headwater',
    subtitle: '35 năm bất động sản thương mại & thị trường Bắc Mỹ',
    intro:
      'Hơn 30 năm phát triển bất động sản thương mại, tài chính và vận hành tại Bắc Mỹ.',
    bullets: [
      'Partner & Chief Strategy Officer · Headwater',
      'Ex-VP Capital Markets · Avison Young (Canada)',
      'Ex-VP Operations · Trig Life Services',
      'Ex-Managing Principal · OneDigital',
    ],
    initials: 'MH',
    photo: '/logos/Mick%20Hawton.jpeg',
    pending: true,
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
      id="doan-khach"
      className="bg-bg-alt border-y border-border-subtle !py-16 lg:!py-20"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6 max-w-4xl">
        <span className="font-display text-gradient-gold">5</span> chủ đầu tư và chủ thầu.{' '}
        <em className="font-serif italic text-gradient-gold">Dự án thật. Ngân sách thật.</em>
      </h2>

      <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed max-w-3xl mb-10">
        Không phải đoàn tham quan du lịch. Không phải hội thảo. Đây là những người có thẩm quyền
        ký hợp đồng và họ cất công bay sang Việt Nam với một mục đích duy nhất: tìm đối tác sản
        xuất để làm việc lâu dài.
      </p>

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
              className={`relative aspect-square w-full max-w-sm mx-auto lg:max-w-none
                         rounded-3xl overflow-hidden
                         bg-gradient-to-br from-bg-card-hover via-bg-alt to-bg-dark
                         border border-border-subtle
                         shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]
                         ${buyer.pending ? 'opacity-80' : ''}`}
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

          {/* Text panel */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col">
            {/* Slide counter + pending badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-text-heading font-semibold">
                / {String(BUYERS.length).padStart(2, '0')}
              </span>
              {buyer.pending && (
                <span className="ml-2 text-[10px] uppercase tracking-[0.12em] font-semibold
                                 border border-white/20 text-text-body
                                 px-2.5 py-1 rounded-full">
                  Đang xác nhận
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-text-heading leading-snug mb-2">
              {buyer.name}
            </h3>
            <p className="text-xs lg:text-sm text-brand-gold uppercase tracking-[0.18em] font-semibold leading-snug mb-3">
              {buyer.role}
            </p>
            <p className="text-sm lg:text-base text-text-heading font-medium leading-relaxed mb-5">
              {buyer.subtitle}
            </p>

            <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed mb-5">
              {buyer.intro}
            </p>

            <ul className="space-y-2.5">
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
