'use client';

import { useState } from 'react';
import { Calendar, Users, LineChart, Building } from 'lucide-react';

const STATS = [
  { icon: Calendar, num: '7', text: 'ngày thực địa tại Việt Nam' },
  { icon: Users, num: '5', text: 'nhà phát triển bất động sản hàng đầu từ Hoa Kỳ' },
  { icon: LineChart, num: '$500M+', text: 'tổng danh mục dự án đang triển khai' },
  { icon: Building, num: '10–13', text: 'nhà máy được tuyển chọn tham gia' },
];

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <header
      id="top"
      className="relative min-h-[100svh] md:min-h-screen flex items-center
                 pt-28 pb-10 md:pt-32 md:pb-20 overflow-hidden bg-black"
    >
      {/* Full-bleed background video — iframe pattern từ site mẹ (uncropped) */}
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
        {/* Gradient overlay — bottom tối cho stat cards, top gần như trong suốt */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85
                     pointer-events-none"
        />
      </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Eyebrow pills */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10 md:mb-14">
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

          <p className="font-serif italic text-base md:text-lg text-text-body mb-4 md:mb-6">
            30 tháng 05 – 06 tháng 06, 2026
          </p>

          {/* H1 — 3 dòng */}
          <h1
            className="font-display tracking-tight leading-[0.95]
                       text-[52px] md:text-8xl lg:text-[120px] mb-8 md:mb-10"
          >
            <span className="block text-text-heading">VIETNAM</span>
            <span className="block text-gradient-gold">DIRECT</span>
            <span className="block italic opacity-15 text-text-heading">2026</span>
          </h1>

          {/* Lead */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-text-body font-light leading-relaxed
                       max-w-3xl mb-12 md:mb-16"
          >
            <span className="text-text-heading font-normal">
              Đưa nhà máy đến tận tay các nhà phát triển chiến lược tại Texas.
            </span>{' '}
            Trực tiếp từ nhà máy đến tay người ra quyết định.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {STATS.map(({ icon: Icon, num, text }) => (
              <div
                key={num + text}
                className="bg-bg-card/70 backdrop-blur-md rounded-2xl border border-white/10
                           hover:border-brand-gold/50 transition-colors p-5 lg:p-6
                           flex flex-col gap-4"
              >
                <Icon size={22} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                <div className="text-4xl lg:text-5xl font-display text-text-heading leading-none">
                  {num}
                </div>
                <p className="text-sm lg:text-base font-sans font-light text-text-body leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
    </header>
  );
}
