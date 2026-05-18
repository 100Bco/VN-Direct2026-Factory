'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  intro: string;
  bullets: { heading: string; items: string[] }[];
  interest: string;
  initials: string;
  subtitle: string;
}

const BUYERS: Buyer[] = [
  {
    name: 'Lezlie Tram Le',
    role: 'Nhà sáng lập kiêm CEO, LT Commercial Group',
    subtitle: 'Đại diện chính thức của 100B tại Texas',
    intro:
      'Hơn 22 năm kinh nghiệm trong lĩnh vực bất động sản thương mại Texas. Trực tiếp dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang.',
    bullets: [
      {
        heading: 'Thành tích tiêu biểu',
        items: [
          '55 triệu đô la dự án xây dựng mới',
          'Hơn 250 triệu đô la thương vụ mua bán và sáp nhập',
          'Hàng trăm tài sản văn phòng, bán lẻ, công nghiệp và nhà ở',
        ],
      },
      {
        heading: 'Ghi nhận',
        items: [
          'Chủ tịch Hiệp hội Bất động sản Châu Á Mỹ tại Austin (2020)',
          'Chủ tịch Hội đồng Phát triển Kinh tế Manor',
          'Giải thưởng Austin Under 40 — hạng mục Bất động sản (2021)',
          'Trang bìa tạp chí Austin Woman (tháng 5 năm 2023)',
        ],
      },
    ],
    interest:
      'Phụ trách kết nối nhà máy Việt Nam với thị trường Texas trong lĩnh vực vật liệu xây dựng và nội thất.',
    initials: 'LT',
  },
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng',
    subtitle: 'Austin, Texas',
    intro:
      '30 năm kinh nghiệm trong ngành xây dựng. Khởi đầu từ cải tạo nhà ở, mở rộng sang xây mới nhà ở đặt riêng, hiện tập trung vào khu căn hộ thuế tín dụng và các dự án do Bộ Gia cư và Phát triển Đô thị Hoa Kỳ tài trợ.',
    bullets: [
      {
        heading: 'Quy mô dự án',
        items: [
          'Từ 10 đến 24 triệu đô la mỗi công trình',
          'Thị trường: Corpus Christi • Houston • Austin • San Antonio',
          'Chuyên: khu căn hộ thuế tín dụng, dự án nhà ở do Bộ Gia cư Hoa Kỳ tài trợ',
        ],
      },
    ],
    interest:
      'Vật liệu xây dựng số lượng lớn, đáp ứng tiêu chuẩn kỹ thuật và quy định địa phương, chuỗi cung ứng ổn định cho dự án quy mô.',
    initials: 'MH',
  },
  {
    name: 'Kameron Schram',
    role: 'Chủ sở hữu kiêm Nhà sáng lập, Cleo Builders',
    subtitle: 'Đơn vị xây dựng nhà ở cao cấp đặt riêng tại Texas',
    intro:
      'Chuyên về nhà ở cao cấp theo đặt hàng. Tập trung vào tay nghề thủ công, tinh tế trong thiết kế và dấu ấn riêng biệt cho từng khách hàng.',
    bullets: [
      {
        heading: 'Danh mục đang triển khai (15 triệu đô la)',
        items: [
          '1 dự án 9 căn hộ đang xây dựng',
          '1 nhà ở đặt riêng đang xây',
          '4 nhà ở đặt riêng đang trong giai đoạn thiết kế (2 – 3,2 triệu đô la mỗi căn)',
          '1 dự án hoàn thiện nội thất thương mại đang lập kế hoạch',
          '1 nhà ở cá nhân đang thiết kế',
        ],
      },
    ],
    interest:
      'Đối tác nhà máy lâu dài với cam kết nhất quán về chất lượng và sản phẩm độc đáo phục vụ phân khúc cao cấp.',
    initials: 'KS',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Nhà phát triển bất động sản',
    subtitle: 'Thung lũng Rio Grande, Texas | Năm thế hệ làm bất động sản',
    intro:
      'Hơn 23 năm kinh nghiệm. Cựu sinh viên Học viện Hải quân Hoa Kỳ và Đại học Texas A&M. Cựu sĩ quan Thủy quân Lục chiến Hoa Kỳ. Sinh ra và lớn lên tại vùng biên giới Mỹ — Mexico.',
    bullets: [
      {
        heading: 'Danh mục tiêu biểu',
        items: [
          'Các dự án thương mại hạng A tại Brownsville, Weslaco, San Juan, Harlingen, Pharr, Edinburg, Laredo',
          'Khách thuê: Olive Garden, AT&T, T-Mobile, Panda Express',
          'Khu căn hộ 320 căn tại Weslaco (đã sở hữu)',
          'Các dự án 168 và 275 căn đang lên kế hoạch tại Pharr và Edinburg',
          'Các dự án nhà ở quy mô trên 100 mẫu Anh',
        ],
      },
    ],
    interest:
      'Vật liệu xây dựng cho các dự án căn hộ và mặt bằng thương mại hạng A quy mô lớn.',
    initials: 'RR',
  },
  {
    name: 'Mick Hawton',
    role: 'Đối tác điều hành, Headwater',
    subtitle: 'Nhà phát triển bất động sản — Bắc Mỹ',
    intro:
      'Hơn 30 năm kinh nghiệm trong phát triển kinh doanh và vận hành. Nền tảng chuyên môn trải rộng qua bất động sản thương mại, phát triển lãnh đạo, thị trường vốn, bảo hiểm sức khỏe doanh nghiệp và công nghệ.',
    bullets: [
      {
        heading: 'Vai trò tiêu biểu',
        items: [
          'Đối tác kiêm cựu Giám đốc Chiến lược tại Headwater',
          'Phó Chủ tịch Thị trường Vốn tại Avison Young (Canada)',
          'Phó Chủ tịch Vận hành tại Trig Life Services',
          'Giám đốc điều hành tại OneDigital',
        ],
      },
    ],
    interest:
      'Vật liệu cho các dự án bất động sản thương mại; góc nhìn thị trường vốn về chuỗi cung ứng và hợp tác cung cấp dài hạn.',
    initials: 'MH',
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
        className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mb-6
                   max-w-4xl"
      >
        Năm nhà phát triển bất động sản hàng đầu —{' '}
        <em className="italic text-gradient-gold">cùng một chuyến đi</em>.
      </h2>

      <p className="text-base md:text-lg text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Quý vị sẽ ngồi trực tiếp với một nhóm nhà phát triển có{' '}
        <span className="text-text-heading font-normal">
          tổng danh mục dự án đang triển khai vượt 500 triệu đô la Mỹ
        </span>{' '}
        — đang xây dựng, đang thiết kế, đang phát triển tại Hoa Kỳ và Bắc Mỹ ngay tại thời điểm này.
        Mỗi người mang đến một hồ sơ dự án khác biệt.
      </p>

      {/* Carousel */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        role="region"
        aria-roledescription="carousel"
        aria-label="Đoàn khách mua chiến lược"
      >
        {/* Text panel */}
        <div className="lg:col-span-7 order-2 lg:order-1 min-h-[520px] flex flex-col">
          {/* Slide counter */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[40px] font-display text-gradient-gold leading-none font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
              / {String(BUYERS.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-text-heading leading-[1.15] tracking-tight mb-3">
            {buyer.name}
          </h3>
          <p className="text-xs lg:text-sm text-brand-gold uppercase tracking-[0.18em] font-semibold leading-snug mb-2">
            {buyer.role}
          </p>
          <p className="text-xs lg:text-sm text-text-muted italic font-light mb-6 leading-relaxed">
            {buyer.subtitle}
          </p>

          <p className="text-base lg:text-lg text-text-body font-light leading-relaxed mb-8">
            {buyer.intro}
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {buyer.bullets.map((group) => (
              <div key={group.heading}>
                <p className="text-[10px] uppercase tracking-[0.22em] text-text-muted font-semibold mb-3">
                  {group.heading}
                </p>
                <ul className="space-y-2.5">
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

          <div className="mt-auto pt-6 border-t border-border-subtle">
            <p className="text-sm text-text-muted italic font-light leading-relaxed">
              {buyer.interest}
            </p>
          </div>
        </div>

        {/* Photo panel */}
        <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <div
            className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none
                       rounded-3xl overflow-hidden
                       bg-gradient-to-br from-bg-card-hover via-bg-alt to-bg-dark
                       border border-border-subtle
                       shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            {/* Initials avatar fallback — sẽ thay <img> khi có ảnh buyer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[clamp(80px,18vw,180px)] text-gradient-gold leading-none opacity-80">
                {buyer.initials}
              </span>
            </div>
            {/* Soft gold glow */}
            <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
            {/* Inner highlight ring */}
            <div className="absolute inset-2 rounded-3xl border border-white/5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Carousel controls — arrows + dots */}
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

      {/* Pipeline footer tag */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-semibold mb-3">
          Tổng danh mục đang triển khai
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-display text-gradient-gold leading-none mb-4">
          $500M+
        </p>
        <p className="text-sm lg:text-base text-text-muted font-light leading-relaxed">
          Nhà ở cao cấp đặt riêng · Khu căn hộ · Mặt bằng thương mại hạng A · Phát triển bất động
          sản thương mại · Tư vấn thị trường vốn
        </p>
      </div>
    </Section>
  );
}
