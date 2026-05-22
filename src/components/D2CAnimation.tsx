export function D2CAnimation() {
  return (
    <div className="w-full">
      <style>{`
        .trad-node,
        .d2c-node {
          opacity: 0;
          animation: nodeFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes nodeFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 4 mũi tên truyền thống — fade ra cùng middlemen */
        .trad-arrow-cycle {
          animation: tradArrowCycle 6s ease-in-out infinite;
        }

        @keyframes tradArrowCycle {
          0%, 20%   { opacity: 1; }
          35%, 75%  { opacity: 0; }
          90%, 100% { opacity: 1; }
        }

        /* 2 mũi tên D2C — hiện ra cùng emblem 100B */
        .d2c-arrow-cycle {
          animation: d2cArrowCycle 6s ease-in-out infinite;
        }

        @keyframes d2cArrowCycle {
          0%, 25%   { opacity: 0; }
          40%, 70%  { opacity: 1; }
          85%, 100% { opacity: 0; }
        }

        .draw-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawIn 1.2s ease-out forwards;
        }

        @keyframes drawIn { to { stroke-dashoffset: 0; } }

        .emblem-100b {
          transform-origin: 450px 100px;
          transform-box: view-box;
          animation: emblemBreath 3.5s ease-in-out infinite;
        }

        @keyframes emblemBreath {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }

        /* Middle traditional nodes — fade ra để nhường chỗ cho emblem 100B */
        .trad-vanish {
          transform-origin: center;
          transform-box: fill-box;
          animation: vanishCycle 6s ease-in-out infinite;
        }

        @keyframes vanishCycle {
          0%, 20%   { opacity: 1; transform: scale(1); filter: blur(0); }
          35%, 75%  { opacity: 0; transform: scale(0.7); filter: blur(6px); }
          90%, 100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        /* Emblem 100B hiện ra thay thế 3 middlemen, phóng to + clear blur */
        .trad-emblem-swap {
          transform-origin: center;
          transform-box: fill-box;
          animation: emblemSwap 6s ease-in-out infinite;
        }

        @keyframes emblemSwap {
          0%, 25%   { opacity: 0; transform: scale(0.4); filter: blur(8px); }
          40%, 70%  { opacity: 1; transform: scale(1); filter: blur(0); }
          85%, 100% { opacity: 0; transform: scale(0.4); filter: blur(8px); }
        }

        /* Gạch chéo đỏ trên middlemen — báo hiệu sẽ bị thay thế */
        .trad-strike {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          opacity: 0;
          animation: strikeCycle 6s ease-in-out infinite;
        }

        @keyframes strikeCycle {
          0%, 10%   { stroke-dashoffset: 80; opacity: 0; }
          15%       { opacity: 1; stroke-dashoffset: 80; }
          25%, 32%  { opacity: 1; stroke-dashoffset: 0; }
          40%, 100% { opacity: 0; stroke-dashoffset: 0; }
        }

        .delay-0 { animation-delay: 0.1s; }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.5s; }
        .delay-3 { animation-delay: 0.7s; }
        .delay-4 { animation-delay: 0.9s; }
        .delay-5 { animation-delay: 1.1s; }
        .delay-6 { animation-delay: 1.3s; }
        .delay-7 { animation-delay: 1.5s; }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* SVG Shared Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <radialGradient id="emblemDark" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#3A3835" />
            <stop offset="100%" stopColor="#161513" />
          </radialGradient>

          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.8" />
          </filter>

          {/* Gold glow filter — spotlight effect dành riêng cho 100B emblem */}
          <filter id="emblemGoldGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#C3A374" floodOpacity="0.65" />
          </filter>

          <symbol id="iconFactory" viewBox="0 0 24 24">
            <path
              d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V8L2 13Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M17 18h1M12 18h1M7 18h1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </symbol>
          <symbol id="iconBox" viewBox="0 0 40 40">
            <path d="M8 14 L20 8 L32 14 L20 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 14 V30 L20 36 V20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M32 14 V30 L20 36" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </symbol>
          <symbol id="iconShop" viewBox="0 0 40 40">
            <rect x="6" y="16" width="28" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 16 L8 8 H32 L36 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="16" x2="12" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <line x1="20" y1="16" x2="20" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <line x1="28" y1="16" x2="28" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          </symbol>
          <symbol id="iconPerson" viewBox="0 0 40 40">
            <circle cx="20" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 36 C10 26 14 22 20 22 C26 22 30 26 30 36" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </symbol>
          <symbol id="iconTruck" viewBox="0 0 40 40">
            <rect x="4" y="14" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24 18 H32 L36 22 V28 H24" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="30" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="29" cy="30" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </symbol>
          <symbol id="arrowShape" viewBox="0 0 28 16" overflow="visible">
            <path
              d="M2 8 L22 8 M16 2 L22 8 L16 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
        </defs>
      </svg>

      {/* Top title */}
      <div className="text-center mb-8 text-[11px] uppercase tracking-[0.22em] text-text-body font-semibold">
        Sự chuyển dịch của mô hình phân phối
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-brand-gold/70 mb-6 animate-pulse">
        <span>⟵</span>
        <span>Vuốt ngang để xem đầy đủ biểu đồ</span>
        <span>⟶</span>
      </div>

      <div className="overflow-x-auto hide-scrollbar -mx-8 px-8 lg:mx-0 lg:px-0">
        <div className="min-w-[900px]">
          {/* MORPHING ROW — Truyền thống → D2C */}
          <svg viewBox="0 0 900 200" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
            <line x1="122" y1="90" x2="238" y2="90" className="draw-line delay-0" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
            <line x1="302" y1="90" x2="418" y2="90" className="draw-line delay-1" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
            <line x1="482" y1="90" x2="598" y2="90" className="draw-line delay-2" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
            <line x1="662" y1="90" x2="778" y2="90" className="draw-line delay-3" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />

            {/* 4 mũi tên truyền thống */}
            <g color="#C3A374" className="trad-arrow-cycle"><use href="#arrowShape" x="156" y="82" width="48" height="16" /></g>
            <g color="#C3A374" className="trad-arrow-cycle"><use href="#arrowShape" x="336" y="82" width="48" height="16" /></g>
            <g color="#C3A374" className="trad-arrow-cycle"><use href="#arrowShape" x="516" y="82" width="48" height="16" /></g>
            <g color="#C3A374" className="trad-arrow-cycle"><use href="#arrowShape" x="696" y="82" width="48" height="16" /></g>

            {/* 2 mũi tên D2C — Nhà máy → 100B → Chủ đầu tư */}
            <g color="#C3A374" className="d2c-arrow-cycle"><use href="#arrowShape" x="238" y="82" width="60" height="16" /></g>
            <g color="#C3A374" className="d2c-arrow-cycle"><use href="#arrowShape" x="602" y="82" width="60" height="16" /></g>

            {/* Node 1: Factory — hiện luôn */}
            <g>
              <circle cx="90" cy="90" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
              <g color="#C3A374" transform="translate(70 70)"><use href="#iconFactory" width="40" height="40" /></g>
              <text x="90" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Nhà máy</text>
            </g>

            {/* Node 2: Distributor */}
            <g className="trad-vanish">
              <circle cx="270" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
              <g color="#E0DCD3" transform="translate(250 70)"><use href="#iconBox" width="40" height="40" /></g>
              <text x="270" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà phân phối</text>
            </g>

            {/* Node 3: Wholesaler */}
            <g className="trad-vanish">
              <circle cx="450" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
              <g color="#E0DCD3" transform="translate(430 70)"><use href="#iconTruck" width="40" height="40" /></g>
              <text x="450" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà bán sỉ</text>
            </g>

            {/* Node 4: Retailer */}
            <g className="trad-vanish">
              <circle cx="630" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
              <g color="#E0DCD3" transform="translate(610 70)"><use href="#iconShop" width="40" height="40" /></g>
              <text x="630" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà bán lẻ</text>
            </g>

            {/* Strikethrough đỏ — gạch chéo middlemen ngay trước khi biến mất */}
            <line className="trad-strike" x1="248" y1="68" x2="292" y2="112" stroke="#B84A3E" strokeWidth="2.5" strokeLinecap="round" />
            <line className="trad-strike" x1="428" y1="68" x2="472" y2="112" stroke="#B84A3E" strokeWidth="2.5" strokeLinecap="round" />
            <line className="trad-strike" x1="608" y1="68" x2="652" y2="112" stroke="#B84A3E" strokeWidth="2.5" strokeLinecap="round" />

            {/* Replacement: 100B emblem hiện ra thay thế 3 middlemen */}
            <g className="trad-emblem-swap">
              <circle cx="450" cy="90" r="36" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#emblemGoldGlow)" />
              <image
                href="/logos/100B%20Emblem.png"
                x="416"
                y="56"
                width="68"
                height="68"
                preserveAspectRatio="xMidYMid meet"
              />
              <text x="450" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">100B</text>
              <text x="450" y="166" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Đối tác chiến lược</text>
            </g>

            {/* Node 5: Buyer (Chủ đầu tư & chủ thầu) — hiện luôn */}
            <g>
              <circle cx="810" cy="90" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
              <g color="#C3A374" transform="translate(790 70)"><use href="#iconPerson" width="40" height="40" /></g>
              <text x="810" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Chủ đầu tư</text>
              <text x="810" y="166" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">&amp; chủ thầu</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Stats Block — 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 pt-10 border-t border-border-subtle/50">
        <div className="text-center flex flex-col items-center">
          <div className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none h-14 lg:h-16 flex items-center justify-center mb-4">
            1
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed max-w-[220px]">
            Đối tác chiến lược duy nhất
            <br />
            không phải trung gian
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none h-14 lg:h-16 flex items-center justify-center mb-4">
            BRANDING
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed max-w-[220px]">
            Sở hữu kênh · Kiểm soát giá
            <br />
            Làm chủ thị trường
          </div>
        </div>
      </div>
    </div>
  );
}
