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
}

const BUYERS: Buyer[] = [
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng — Austin, Texas',
    subtitle: '5 thế hệ làm bất động sản · 600 căn/năm đang phát triển',
    intro:
      '30 năm kinh nghiệm trong ngành xây dựng. Khởi đầu từ cải tạo nhà ở, mở rộng sang xây mới nhà ở đặt riêng, hiện tập trung vào khu căn hộ thuế tín dụng và dự án do Bộ Gia cư & Phát triển Đô thị Hoa Kỳ tài trợ.',
    bullets: [
      {
        heading: 'Danh mục đang triển khai',
        items: [
          '600 căn/năm đang phát triển',
          'Quy mô $10M – $24M mỗi công trình',
          'Multi-family & HUD-funded housing',
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
      {
        heading: 'Học vấn',
        items: ['Master of Public Affairs — Humphrey School', 'BA — University of Minnesota'],
      },
    ],
    interest:
      'Vật liệu cho commercial real estate development; góc nhìn capital markets về chuỗi cung ứng và hợp tác cung cấp dài hạn.',
    initials: 'MH',
  },
  {
    name: 'Michael Houghton',
    role: 'Tổng thầu — Austin, Texas',
    subtitle: 'Multi-family & HUD-funded housing scale',
    intro:
      '30 năm trong ngành xây dựng, chuyên sâu multi-family tax credit và dự án nhà ở do Bộ Gia cư Hoa Kỳ tài trợ.',
    bullets: [
      {
        heading: 'Track record',
        items: [
          'Quy mô $10M – $24M mỗi project',
          'Multi-family tax credit specialist',
          'HUD-funded housing portfolio',
        ],
      },
    ],
    interest:
      'Vật liệu lớn, đạt chuẩn kỹ thuật và quy định địa phương, supply chain ổn định.',
    initials: 'MH',
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
          'Trang bìa Austin Woman (5/2023)',
        ],
      },
    ],
    interest:
      'Phụ trách kết nối nhà máy VN với thị trường Texas trong lĩnh vực vật liệu xây dựng và nội thất.',
    initials: 'LT',
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
