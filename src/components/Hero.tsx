'use client';

import { useState } from 'react';

const STATS = [
  { num: '7', text: 'ngày thực địa tại Việt Nam' },
  { num: '5', text: 'nhà phát triển bất động sản hàng đầu từ Hoa Kỳ' },
  { num: '$500M+', text: 'tổng danh mục dự án đang triển khai' },
  { num: '10–13', text: 'nhà máy được tuyển chọn tham gia' },
];

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <header
      id="top"
      className="relative min-h-[100svh] md:min-h-screen flex items-center
                 pt-20 pb-4 md:pt-32 md:pb-20 overflow-hidden bg-black"
    >
      {/* Background video container — full bleed mọi breakpoint, nav floating đè trên */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      pointer-events-none transition-opacity duration-700
                      w-[max(356vh,100vw)] h-[max(200vh,56.25vw)]
                      md:w-[max(177.77vh,100vw)] md:h-[max(56.25vw,100vh)]
                      ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        >
          <iframe
            src="https://fast.wistia.net/embed/iframe/9hbymhvynw?autoPlay=true&muted=true&silentAutoPlay=allow&playsinline=true&playsInline=true&endVideoBehavior=loop&videoFoam=true&controlsVisibleOnLoad=false&playButton=false&smallPlayButton=false&playbar=false&fullscreenButton=false&settingsControl=false&volumeControl=false&playbackRateControl=false&captions=false&wmode=transparent"
            title="Vietnam Direct 2026 hero reel"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            onLoad={() => setVideoReady(true)}
            className="absolute inset-0 w-full h-full"
            frameBorder={0}
          />
        </div>
        {/* Gradient overlay — đậm dưới (stat cards), trong suốt trên (nav floating đẹp) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Eyebrow pills */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]
                         px-3 py-1.5 border border-brand-gold/60 text-brand-gold
                         font-medium rounded-full whitespace-nowrap bg-black/30 backdrop-blur-sm"
            >
              Build Better Series — Thư mời tham quan nhà máy
            </span>
            <span
              className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]
                         px-3 py-1.5 border border-white/30 text-white
                         font-medium rounded-full whitespace-nowrap bg-black/30 backdrop-blur-sm"
            >
              30/05 – 06/06/2026
            </span>
          </div>

          <p className="italic font-light text-sm md:text-base text-text-body mb-3 md:mb-4">
            30 tháng 05 – 06 tháng 06, 2026
          </p>

          {/* H1 — 3 dòng */}
          <h1
            className="font-display tracking-tight leading-[0.92]
                       text-[48px] md:text-7xl lg:text-[96px] mb-6 md:mb-8"
          >
            <span className="block text-text-heading">VIETNAM</span>
            <span className="block text-gradient-gold">DIRECT</span>
            <span className="block italic opacity-15 text-text-heading">2026</span>
          </h1>

          {/* Lead */}
          <p
            className="text-base md:text-lg lg:text-xl text-text-body font-light leading-relaxed
                       max-w-3xl mb-8 md:mb-10"
          >
            <span className="text-text-heading font-normal">
              Đưa nhà máy đến tận tay các nhà phát triển chiến lược tại Texas.
            </span>{' '}
            Trực tiếp từ nhà máy đến tay người ra quyết định.
          </p>

          {/* Stat row — compact pills, không icon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {STATS.map(({ num, text }) => (
              <div
                key={num + text}
                className="bg-bg-card/70 backdrop-blur-md rounded-xl border border-white/10
                           hover:border-brand-gold/50 transition-colors px-4 py-3 md:px-5 md:py-4
                           flex items-baseline gap-3"
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
