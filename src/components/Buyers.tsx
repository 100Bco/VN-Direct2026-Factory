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

interface Day {
  date: string;
  dow: string;
  title: string;
  items: string[];
}

interface Trip {
  label: string;
  dates: string;
  city: string;
  attendees: { initials: string; name: string }[];
  days: Day[];
}

const TRIPS: Trip[] = [
  {
    label: 'Đợt 1',
    dates: '31/5 – 6/6',
    city: 'Ho Chi Minh City',
    attendees: [
      { initials: 'LT', name: 'Lezlie Tram Le' },
      { initials: 'KS', name: 'Kameron Schram' },
      { initials: 'MH', name: 'Michael Hough' },
    ],
    days: [
      {
        date: '31/5',
        dow: 'Thứ Bảy',
        title: 'Đón đoàn · Định hướng chuyến đi',
        items: [
          'Đón đoàn tại sân bay Tân Sơn Nhất',
          'Nhận phòng · nghỉ ngơi',
          'Dinner briefing — giới thiệu lịch trình và ngành hàng',
        ],
      },
      {
        date: '1/6',
        dow: 'Chủ Nhật',
        title: 'Tham quan nhà máy — Gỗ & Nội thất',
        items: [
          'An Cuong Wood — ván công nghiệp, nội thất gỗ',
          'Phu Tai JSC — đồ nội thất xuất khẩu',
          'Họp tổng kết cuối ngày',
        ],
      },
      {
        date: '2/6',
        dow: 'Thứ Hai',
        title: 'Tham quan nhà máy — Sàn & Vật liệu ốp lát',
        items: [
          'Nhà máy sàn SPC / LVT',
          'Nhà máy đá thạch anh & gạch',
          'Working session — đánh giá sản phẩm và thương mại',
        ],
      },
      {
        date: '3/6',
        dow: 'Thứ Ba',
        title: 'Tham quan nhà máy — Cửa & Cửa sổ',
        items: [
          'Amy Grupo — cửa & vách kính',
          'Nhà máy cửa uPVC / nhôm',
          '1-1 session giữa buyer và nhà máy',
        ],
      },
      {
        date: '4/6',
        dow: 'Thứ Tư',
        title: 'Tham quan nhà máy — Thép & Kim loại',
        items: [
          'Dai Dung — kết cấu thép, nhà tiền chế',
          'Tonmat Group — mái thép & tấm ốp',
          'Họp tổng kết tuần · định hướng Hà Nội',
        ],
      },
      {
        date: '5/6',
        dow: 'Thứ Năm',
        title: 'Working day · Thương thảo & Tổng kết HCM',
        items: [
          '1-1 working sessions theo yêu cầu',
          'Tổng kết đánh giá nhà máy HCM',
          'Gala dinner — kết nối đoàn và đối tác',
        ],
      },
      {
        date: '6/6',
        dow: 'Thứ Sáu',
        title: 'Bay HCM → Hà Nội',
        items: [
          'Chuyến bay buổi sáng',
          'Nhận phòng tại Hà Nội',
          'Briefing chiều — lịch trình Hà Nội',
        ],
      },
    ],
  },
  {
    label: 'Đợt 2',
    dates: '7/6 – 12/6',
    city: 'Hà Nội',
    attendees: [
      { initials: 'LT', name: 'Lezlie Tram Le' },
      { initials: 'RR', name: 'Ricardo Rubiano' },
      { initials: 'LD', name: 'Loc Dang' },
    ],
    days: [
      {
        date: '7/6',
        dow: 'Thứ Bảy',
        title: 'Tham quan nhà máy — Cửa & Cửa sổ cao cấp',
        items: [
          'BM Windows — cửa nhôm, cửa sổ nhập khẩu',
          'Eurowindow — cửa uPVC & kính cao cấp',
          'Working session buổi chiều',
        ],
      },
      {
        date: '8/6',
        dow: 'Chủ Nhật',
        title: 'Tham quan nhà máy — Gỗ & Tủ bếp',
        items: [
          'AA Corporation — nội thất, tủ bếp xuất khẩu',
          'An Phat Holdings — nhựa kỹ thuật, vật liệu xanh',
          'Họp đánh giá sản phẩm buổi chiều',
        ],
      },
      {
        date: '9/6',
        dow: 'Thứ Hai',
        title: 'Briefing chiến lược — Hoa Phat Group',
        items: [
          'Briefing Hoa Phat Group — thép, mái tôn, vật liệu xây dựng',
          'Không tham quan xưởng — session trao đổi chiến lược',
          'Buổi chiều: 1-1 thương thảo theo nhà máy',
        ],
      },
      {
        date: '10/6',
        dow: 'Thứ Ba',
        title: 'Working day · Thương thảo thương mại',
        items: [
          '1-1 sessions — giá, MOQ, điều khoản',
          'Review hồ sơ nhà máy và chứng chỉ',
          'Dự thảo term sheet với các đối tác tiềm năng',
        ],
      },
      {
        date: '11/6',
        dow: 'Thứ Tư',
        title: 'Working day · Finalize & Ký kết',
        items: [
          'Hoàn thiện điều khoản hợp tác',
          'Ký MOU / LOI với các đối tác đã thống nhất',
          'Closing dinner — toàn bộ đoàn và đối tác nhà máy',
        ],
      },
      {
        date: '12/6',
        dow: 'Thứ Năm',
        title: 'Ngày cuối · Chia tay & Khởi hành',
        items: [
          'Buổi sáng tự do',
          'Check-out · tiễn đoàn ra sân bay',
          '100B bắt đầu quy trình follow-up sau chuyến đi',
        ],
      },
    ],
  },
];

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
    photo: '/logos/Michael%20Hough.png',
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
        <span className="font-display text-gradient-gold">5</span> chủ đầu tư và chủ thầu.
        <br />
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

      {/* SCHEDULE — 2 đợt timeline (sau khi giới thiệu 5 người) */}
      <div id="lich-trinh" className="mt-20 lg:mt-24">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug mb-3 max-w-4xl">
          Lịch trình{' '}
          <em className="font-serif italic text-gradient-gold">
            <span className="font-display not-italic">31</span> tháng 5 –{' '}
            <span className="font-display not-italic">12</span> tháng 6
          </em>
        </h3>
        <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed max-w-3xl mb-10">
          Chia thành 2 đợt theo thị trường Nam – Bắc. Lịch chi tiết sẽ được gửi đến nhà máy sau
          khi xác nhận tham gia.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {TRIPS.map((t) => (
            <div
              key={t.label}
              className="rounded-3xl bg-bg-card/70 border border-border-subtle overflow-hidden"
            >
              {/* Trip header */}
              <div className="p-6 lg:p-8 border-b border-border-subtle">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl lg:text-4xl font-display text-gradient-gold leading-none font-medium">
                        {t.label}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                        {t.dates}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg font-bold font-sans text-text-heading">
                      {t.city}
                    </p>
                  </div>
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] text-text-body font-semibold mb-3">
                  Khách tham gia
                </p>
                <ul className="flex flex-wrap gap-3">
                  {t.attendees.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-center gap-2.5 bg-bg-alt rounded-full pl-1 pr-4 py-1
                                 border border-border-subtle"
                    >
                      <span
                        className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/40
                                   flex items-center justify-center text-[11px] font-semibold text-brand-gold"
                      >
                        {a.initials}
                      </span>
                      <span className="text-sm font-medium text-text-heading">{a.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day-by-day */}
              <ul>
                {t.days.map((d, di) => (
                  <li
                    key={d.date}
                    className={`grid grid-cols-12 gap-4 lg:gap-6 px-6 lg:px-8 py-5 ${
                      di < t.days.length - 1 ? 'border-b border-border-subtle/50' : ''
                    }`}
                  >
                    <div className="col-span-12 md:col-span-3 lg:col-span-2 md:border-r md:border-border-subtle/50 md:pr-4">
                      <p className="font-display text-2xl lg:text-3xl text-gradient-gold leading-none">
                        {d.date}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-text-body font-semibold mt-2">
                        {d.dow}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-9 lg:col-span-10">
                      <h4 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug mb-3">
                        {d.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {d.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-heading font-light leading-relaxed"
                          >
                            <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
