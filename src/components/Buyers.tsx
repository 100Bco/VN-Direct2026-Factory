'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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

interface Visit {
  time?: string;
  label: string;
  pill?: string;
}

interface DayPlan {
  date: string;
  dow: string;
  visits: Visit[];
}

interface Segment {
  location: string;
  dates: string;
  intro?: string;
  days?: DayPlan[];
  pendingFactories?: string[];
  highlight?: string;
}

interface Trip {
  label: string;
  dates: string;
  note?: string;
  attendees: { initials: string; name: string }[];
  segments: Segment[];
}

const TRIPS: Trip[] = [
  {
    label: 'ĐỢT 1',
    dates: '31/5 – 6/6',
    attendees: [
      { initials: 'LT', name: 'Lezlie Tram Le' },
      { initials: 'KS', name: 'Kameron Schram' },
      { initials: 'MH', name: 'Michael Hough' },
    ],
    segments: [
      {
        location: 'TP. Hồ Chí Minh',
        dates: '31/5 – 3/6',
        days: [
          {
            date: '31/5',
            dow: 'Chủ Nhật',
            visits: [{ label: 'Đoàn nhập cảnh · Dinner briefing' }],
          },
          {
            date: '1/6',
            dow: 'Thứ Hai',
            visits: [
              { time: 'Sáng', label: 'BM Windows' },
              { time: 'Sáng', label: 'Dai Dung Corporation' },
              { time: 'Chiều', label: 'An Cuong Wood' },
            ],
          },
          {
            date: '2/6',
            dow: 'Thứ Ba',
            visits: [
              { label: 'Phu Tai + Vina G7' },
              { label: 'Phu Tai Quartz' },
            ],
          },
          {
            date: '3/6',
            dow: 'Thứ Tư',
            visits: [
              { time: 'Sáng', label: 'AA Corporation' },
              { time: 'Chiều', label: 'Checkout · ra sân bay → Hà Nội' },
            ],
          },
        ],
      },
      {
        location: 'Hà Nội',
        dates: '4/6 – 6/6',
        days: [
          {
            date: '4/6',
            dow: 'Thứ Năm',
            visits: [{ label: 'EuroStark (EuP Group)' }],
          },
          {
            date: '5/6',
            dow: 'Thứ Sáu',
            visits: [
              { label: 'Amy Grupo' },
              { label: 'The One & Jager' },
            ],
          },
          {
            date: '6/6',
            dow: 'Thứ Bảy',
            visits: [
              { label: 'Woodsland' },
              { label: 'Anphat Holdings — AnPro & An Cuong Flooring' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'ĐỢT 2',
    dates: '7/6 – 13/6',
    attendees: [
      { initials: 'LT', name: 'Lezlie Tram Le' },
      { initials: 'RR', name: 'Ricardo Rubiano' },
      { initials: 'LD', name: 'Loc Dang' },
    ],
    segments: [
      {
        location: 'Hạ Long',
        dates: '7/6',
        intro: 'Đoàn join chuyến du thuyền tại Hạ Long trước khi bắt đầu lịch tham quan vòng hai.',
      },
      {
        location: 'Hà Nội',
        dates: '8/6 – 10/6',
        intro:
          'Vòng tham quan thứ hai cho các nhà máy phía Bắc đã ghé ở ĐỢT 1, đồng thời mở slot cho các đối tác cần đánh giá chuyên sâu hơn.',
        highlight: '10/6 · Tonmat Group (đã xác nhận)',
        pendingFactories: [
          'EuroStark (EuP Group)',
          'Amy Grupo',
          'The One & Jager',
          'Woodsland',
          'Anphat Holdings — AnPro & An Cuong Flooring',
        ],
      },
      {
        location: 'TP. Hồ Chí Minh',
        dates: '11/6 – 13/6',
        intro:
          'Vòng tham quan thứ hai cho các nhà máy phía Nam đã ghé ở ĐỢT 1 (trừ AA Corporation), hoặc các đối tác cần đánh giá sâu hơn.',
        pendingFactories: [
          'An Cuong Wood',
          'BM Windows',
          'Phu Tai + Vina G7',
          'Phu Tai Quartz',
          'Dai Dung Corporation',
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

  // Accordion state for trip schedule — default: Đợt 1 mở, Đợt 2 đóng
  const [openTrips, setOpenTrips] = useState<Set<string>>(new Set(['ĐỢT 1']));
  const toggleTrip = (label: string) => {
    setOpenTrips((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

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
            <span className="font-display not-italic">13</span> tháng 6
          </em>
        </h3>
        <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed max-w-3xl mb-10">
          Chia thành 2 đợt theo thị trường Nam – Bắc. Lịch chi tiết sẽ được gửi đến nhà máy sau
          khi xác nhận tham gia.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {TRIPS.map((t) => {
            const isOpen = openTrips.has(t.label);
            const panelId = `trip-${t.label.replace(/\s+/g, '-')}`;
            return (
              <div
                key={t.label}
                className="rounded-3xl bg-bg-card/70 border border-border-subtle overflow-hidden"
              >
                {/* Trip header — clickable to toggle */}
                <button
                  type="button"
                  onClick={() => toggleTrip(t.label)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full text-left p-6 lg:p-8 hover:bg-bg-card transition-colors
                             flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <span className="text-3xl lg:text-4xl font-display text-gradient-gold leading-none font-medium">
                        {t.label}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                        {t.dates}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg font-bold font-sans text-text-heading mb-5">
                      {t.segments.map((s) => s.location).join(' · ')}
                    </p>

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

                  {/* Chevron */}
                  <div
                    className={`shrink-0 mt-1 w-10 h-10 rounded-full border border-brand-gold/40
                                flex items-center justify-center transition-all
                                ${
                                  isOpen
                                    ? 'rotate-180 bg-brand-gold/10 border-brand-gold'
                                    : 'group-hover:border-brand-gold/70'
                                }`}
                  >
                    <ChevronDown
                      size={18}
                      className="text-brand-gold"
                      strokeWidth={2}
                    />
                  </div>
                </button>

                {/* Day-by-day — animated collapse */}
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out
                              ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border-subtle">
                      {t.note && (
                        <p className="px-6 lg:px-8 py-5 text-sm lg:text-base text-text-heading font-serif italic font-light leading-relaxed border-b border-border-subtle/50">
                          {t.note}
                        </p>
                      )}

                      <ul>
                        {t.segments.map((seg, si) => (
                          <li
                            key={seg.location + seg.dates}
                            className={`grid grid-cols-12 gap-4 lg:gap-6 px-6 lg:px-8 py-5 ${
                              si < t.segments.length - 1
                                ? 'border-b border-border-subtle/50'
                                : ''
                            }`}
                          >
                            <div className="col-span-12 md:col-span-4 lg:col-span-3 md:border-r md:border-border-subtle/50 md:pr-4">
                              <p className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug mb-1">
                                {seg.location}
                              </p>
                              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                                {seg.dates}
                              </p>
                            </div>
                            <div className="col-span-12 md:col-span-8 lg:col-span-9">
                              {seg.intro && (
                                <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed mb-3">
                                  {seg.intro}
                                </p>
                              )}
                              {seg.highlight && (
                                <span
                                  className="inline-block mb-3 px-3 py-1.5 rounded-full
                                             border border-brand-gold/60 bg-brand-gold/10
                                             text-brand-gold text-[11px] font-semibold leading-snug"
                                >
                                  {seg.highlight}
                                </span>
                              )}

                              {/* Day-by-day plan (Đợt 1 confirmed) */}
                              {seg.days && seg.days.length > 0 && (
                                <ul className="space-y-4 mt-2">
                                  {seg.days.map((dp) => (
                                    <li key={dp.date} className="grid grid-cols-12 gap-3">
                                      <div className="col-span-12 sm:col-span-3">
                                        <p className="font-display text-xl lg:text-2xl text-gradient-gold leading-none">
                                          {dp.date}
                                        </p>
                                        <p className="text-[10px] uppercase tracking-[0.18em] text-text-body font-semibold mt-1">
                                          {dp.dow}
                                        </p>
                                      </div>
                                      <ul className="col-span-12 sm:col-span-9 space-y-1.5">
                                        {dp.visits.map((v, vi) => (
                                          <li
                                            key={v.label + vi}
                                            className="flex items-start gap-2 text-sm text-text-heading font-light leading-relaxed flex-wrap"
                                          >
                                            <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                                            {v.time && (
                                              <span className="text-[10px] uppercase tracking-[0.18em] text-brand-gold font-semibold pt-0.5 shrink-0">
                                                {v.time}
                                              </span>
                                            )}
                                            <span>{v.label}</span>
                                            {v.pill && (
                                              <span
                                                className="text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 rounded-full
                                                           border border-brand-gold/50 text-brand-gold font-semibold"
                                              >
                                                {v.pill}
                                              </span>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {/* Pending factories (Đợt 2 tentative) */}
                              {seg.pendingFactories && seg.pendingFactories.length > 0 && (
                                <ul className="space-y-1.5 mt-2">
                                  {seg.pendingFactories.map((f) => (
                                    <li
                                      key={f}
                                      className="flex items-start gap-2 text-sm text-text-heading font-light leading-relaxed"
                                    >
                                      <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
