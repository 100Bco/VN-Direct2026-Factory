'use client';

import Script from 'next/script';

const STATS = [
  { num: '14', text: 'Ngày tham quan thực tế tại Việt Nam' },
  { num: '5', text: 'Chủ đầu tư & chủ thầu hàng đầu từ Texas' },
  { num: '$50M+', text: 'Tổng giá trị dự án đang triển khai' },
  { num: '10–13', text: 'Nhà máy được tuyển chọn tham gia' },
];

export function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-[100svh] md:min-h-screen flex items-center
                 pt-20 pb-4 md:pt-32 md:pb-20 overflow-hidden bg-black"
    >
      {/* Wistia modern web component scripts */}
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="afterInteractive"
        async
      />
      <Script
        src="https://fast.wistia.com/embed/9hbymhvynw.js"
        strategy="afterInteractive"
        type="module"
        async
      />

      {/* Background video container — full bleed mọi breakpoint */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     pointer-events-none
                     w-[max(356vh,100vw)] h-[max(200vh,56.25vw)]
                     md:w-[max(177.77vh,100vw)] md:h-[max(56.25vw,100vh)]"
        >
          <wistia-player
            media-id="9hbymhvynw"
            aspect="1.7777777777777777"
            autoplay="true"
            muted="true"
            silent-auto-play="true"
            end-video-behavior="loop"
            controls-visible-on-load="false"
            play-button="false"
            small-play-button="false"
            playbar="false"
            fullscreen-button="false"
            settings-control="false"
            volume-control="false"
            playback-rate-control="false"
            captions="false"
            chromeless="true"
            plays-inline="true"
            seo="false"
          />
        </div>

        {/* Gradient overlay — đậm dưới (stat cards), trong suốt trên */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Eyebrow pill */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <span
            className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]
                       px-3 py-1.5 border border-brand-gold/60 text-brand-gold
                       font-medium rounded-full whitespace-nowrap bg-black/30 backdrop-blur-sm"
          >
            Build Better Series — Thư ngỏ hợp tác chiến lược
          </span>
          <span
            className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]
                       px-3 py-1.5 border border-white/30 text-white
                       font-medium rounded-full whitespace-nowrap bg-black/30 backdrop-blur-sm"
          >
            31 tháng 5 – 13 tháng 6 · HCM → Hà Nội
          </span>
        </div>

        {/* H1 — 3 dòng (VIETNAM trắng / DIRECT gradient gold / 2026 italic 15%) */}
        <h1
          className="font-display tracking-tight leading-[0.95]
                     text-[44px] md:text-8xl lg:text-[120px] mb-8 md:mb-10"
        >
          <span className="block text-text-heading">VIETNAM</span>
          <span className="block text-gradient-gold">DIRECT</span>
          <em
            className="block mt-1 md:mt-2 font-display italic font-light
                       text-[44px] md:text-8xl lg:text-[120px] leading-[0.7]
                       text-text-heading opacity-[0.15]"
          >
            2026
          </em>
        </h1>

        {/* Lead */}
        <p
          className="text-lg lg:text-xl text-text-body font-light leading-relaxed
                     max-w-3xl mb-10 md:mb-12"
        >
          <span className="text-text-heading font-normal">
            Đưa nhà máy Việt Nam đến thẳng chủ đầu tư và chủ thầu tại Texas.
          </span>{' '}
          Thẳng từ xưởng sản xuất đến người ra quyết định.
        </p>

        {/* Stat row — compact pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-fr">
          {STATS.map(({ num, text }) => (
            <div
              key={num + text}
              className="bg-bg-card/70 backdrop-blur-md rounded-xl border border-white/10
                         hover:border-brand-gold/50 transition-colors px-5 py-4 md:px-6 md:py-5
                         flex items-center justify-start text-left gap-3"
            >
              <span className="text-2xl md:text-3xl font-display text-text-heading leading-none whitespace-nowrap shrink-0">
                {num}
              </span>
              <span className="text-xs md:text-sm font-light text-text-body leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
