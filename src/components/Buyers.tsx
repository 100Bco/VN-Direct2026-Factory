'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  subtitle: string;
  intro: string;
  bullets: { heading: string; items: string[] }[];
  interest: string;
  initials: string;
  photo: string;
}

const BUYERS: Buyer[] = [
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng — Austin, Texas',
    subtitle: '30 năm xây dựng · Multi-family & HUD specialist',
    intro:
      '30 năm kinh nghiệm trong ngành xây dựng. Khởi đầu từ cải tạo nhà ở, mở rộng sang xây mới nhà ở đặt riêng, hiện tập trung vào khu căn hộ thuế tín dụng và dự án do Bộ Gia cư & Phát triển Đô thị Hoa Kỳ tài trợ.',
    bullets: [
      {
        heading: 'Danh mục đang triển khai',
        items: [
          'Quy mô $10M – $24M mỗi công trình',
          'Multi-family tax credit specialist',
          'HUD-funded housing portfolio',
        ],
      },
      {
        heading: 'Thị trường',
        items: ['Corpus Christi', 'Houston', 'Austin', 'San Antonio'],
      },
    ],
    interest:
      'Vật liệu xây dựng số lượng lớn, đạt chuẩn HUD/local code, supply chain ổn định cho dự án quy mô.',
    initials: 'MH',
    photo: '/logos/Michael%20Hough.jpeg',
  },
  {
    name: 'Mick Hawton',
    role: 'Đối tác điều hành, Headwater',
    subtitle: '35 năm bất động sản thương mại & thị trường vốn Bắc Mỹ',
    intro:
      'Hơn 30 năm trong phát triển kinh doanh và vận hành. Nền tảng chuyên môn trải rộng qua bất động sản thương mại, leadership development, capital markets và công nghệ — mang góc nhìn toàn diện từ phát triển dự án đến chiến lược tài chính.',
    bullets: [
      {
        heading: 'Vai trò tiêu biểu',
        items: [
          'Partner & cựu Chief Strategy Officer · Headwater',
          'Vice President, Capital Markets · Avison Young (Canada)',
          'Vice President, Operations · Trig Life Services',
          'Managing Principal · OneDigital',
        ],
      },
    ],
    interest:
      'Vật liệu cho commercial real estate development; góc nhìn capital markets về chuỗi cung ứng và hợp tác cung cấp dài hạn.',
    initials: 'MH',
    photo: '/logos/Mick%20Hawton.jpeg',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Nhà phát triển bất động sản — Rio Grande Valley, Texas',
    subtitle: '5 thế hệ làm bất động sản từ 1908 · 760+ căn multi-family đang triển khai',
    intro:
      '23 năm kinh nghiệm trong phát triển bất động sản. Sinh ra ở Texas, lớn lên hai bên biên giới Mỹ – Mexico. Sứ mệnh: "Building a better Valley."',
    bullets: [
      {
        heading: 'Danh mục đang triển khai',
        items: [
          '320-unit apartment complex tại Weslaco (đã sở hữu)',
          '168-unit multi-family tại Pharr (đang lên kế hoạch)',
          '275-unit multi-family tại Edinburg (đang lên kế hoạch)',
          "Single-family scale 100+ acres — Water's Edge & Pecan Grove",
        ],
      },
      {
        heading: 'Class-A retail · 7 thành phố',
        items: [
          'Brownsville · Weslaco · San Juan · Harlingen · Pharr · Edinburg · Laredo',
          'Khách thuê: Olive Garden · Longhorn · AT&T · T-Mobile · Panda Express · Dunkin Donuts',
        ],
      },
    ],
    interest:
      'Vật liệu cho dự án căn hộ multi-family và mặt bằng thương mại hạng A quy mô lớn — góc nhìn 5 thế hệ về thị trường biên giới Mỹ – Mexico.',
    initials: 'RR',
    photo: '/logos/Ricardo%20Rubiano.jpg',
  },
  {
    name: 'Lezlie Tram Le',
    role: 'CEO, LT Commercial Group · Đại diện 100B tại Texas',
    subtitle: '22+ năm bất động sản thương mại Texas',
    intro:
      'Trực tiếp dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang Texas.',
    bullets: [
      {
        heading: 'Track record',
        items: [
          '$55 triệu USD dự án xây dựng mới',
          '$250+ triệu USD thương vụ M&A',
          'Hàng trăm tài sản văn phòng, bán lẻ, công nghiệp, nhà ở',
        ],
      },
      {
        heading: 'Ghi nhận',
        items: [
          'Chủ tịch AREAA Austin (2020)',
          'Chủ tịch Manor EDC',
          'Austin Under 40 — Bất động sản (2021)',
        ],
      },
    ],
    interest:
      'Phụ trách kết nối nhà máy VN với thị trường Texas trong lĩnh vực vật liệu xây dựng và nội thất.',
    initials: 'LT',
    photo: '/logos/Lezlie%20Tram.jpg',
  },
  {
    name: 'Kameron Schram',
    role: 'Founder, Cleo Builders',
    subtitle: 'Boutique luxury custom home builder, Texas',
    intro:
      'Nhà xây dựng nhà ở cao cấp boutique tại Texas — tập trung craftsmanship, chi tiết thiết kế và dấu ấn riêng cho từng khách hàng.',
    bullets: [
      {
        heading: 'Danh mục đang triển khai ($15M)',
        items: [
          '1 dự án 9 căn hộ đang xây',
          '1 custom home đang xây',
          '4 custom homes đang thiết kế ($2M – $3,2M/căn)',
          '1 tenant finish-out lập kế hoạch',
        ],
      },
    ],
    interest:
      'Đối tác nhà máy lâu dài với cam kết nhất quán về chất lượng và sản phẩm độc đáo phục vụ phân khúc cao cấp.',
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
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Năm <em className="font-serif italic text-gradient-gold">nhà phát triển bất động sản</em>{' '}
        hàng đầu.
      </h2>

      {/* Carousel */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        role="region"
        aria-roledescription="carousel"
        aria-label="Đoàn khách mua chiến lược"
      >
        {/* Photo panel */}
        <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <div
            className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none
                       rounded-3xl overflow-hidden
                       bg-gradient-to-br from-bg-card-hover via-bg-alt to-bg-dark
                       border border-border-subtle
                       shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            {/* Initials fallback — hiện phía sau ảnh, lộ ra nếu ảnh fail */}
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
          <p className="text-xs lg:text-sm text-brand-gold uppercase tracking-[0.18em] font-semibold leading-snug mb-2">
            {buyer.role}
          </p>
          <p className="text-sm lg:text-base text-text-muted font-serif italic font-light mb-8 leading-relaxed">
            {buyer.subtitle}
          </p>

          <p className="text-base lg:text-lg text-text-body font-light leading-relaxed mb-8 max-w-2xl">
            {buyer.intro}
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {buyer.bullets.map((group) => (
              <div key={group.heading}>
                <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-3">
                  {group.heading}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm lg:text-base text-text-body font-light leading-relaxed"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border-subtle">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-2">
              Quan tâm
            </p>
            <p className="text-sm lg:text-base text-text-muted font-serif italic font-light leading-relaxed max-w-2xl">
              {buyer.interest}
            </p>
          </div>
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
