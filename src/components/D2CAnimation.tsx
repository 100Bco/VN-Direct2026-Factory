export function D2CAnimation() {
  return (
    <div className="w-full">
      <style>{`
        .trad-node {
          opacity: 0;
          animation: nodeFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes nodeFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .trad-arrow { opacity: 0; }
        .trad-arrow-1 { animation: arrowSegTrad 4s ease-in-out infinite; animation-delay: 1.5s; }
        .trad-arrow-2 { animation: arrowSegTrad 4s ease-in-out infinite; animation-delay: 2.2s; }
        .trad-arrow-3 { animation: arrowSegTrad 4s ease-in-out infinite; animation-delay: 2.9s; }
        .trad-arrow-4 { animation: arrowSegTrad 4s ease-in-out infinite; animation-delay: 3.6s; }

        @keyframes arrowSegTrad {
          0%   { opacity: 0; transform: translateX(-15px); }
          15%  { opacity: 1; transform: translateX(0); }
          30%  { opacity: 1; transform: translateX(0); }
          45%  { opacity: 0; transform: translateX(15px); }
          100% { opacity: 0; transform: translateX(15px); }
        }

        .draw-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawIn 1.2s ease-out forwards;
        }

        @keyframes drawIn { to { stroke-dashoffset: 0; } }

        .delay-0 { animation-delay: 0.1s; }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.5s; }
        .delay-3 { animation-delay: 0.7s; }
        .delay-4 { animation-delay: 0.9s; }

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

          <symbol id="iconFactory" viewBox="0 0 40 40">
            <rect x="6" y="14" width="28" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 14 L14 6 L22 14 M22 14 L30 6 L38 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="11" y="22" width="4" height="6" fill="currentColor" opacity="0.8" />
            <rect x="18" y="22" width="4" height="6" fill="currentColor" opacity="0.8" />
            <rect x="25" y="22" width="4" height="6" fill="currentColor" opacity="0.8" />
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

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-brand-gold/70 mb-6 animate-pulse">
        <span>⟵</span>
        <span>Vuốt ngang để xem đầy đủ biểu đồ</span>
        <span>⟶</span>
      </div>

      <div className="overflow-x-auto hide-scrollbar -mx-8 px-8 lg:mx-0 lg:px-0">
        <div className="min-w-[900px]">
          {/* TRADITIONAL ROW */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-border-subtle"></div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-text-body font-medium">
                Truyền thống
              </div>
              <div className="w-10 h-px bg-border-subtle"></div>
            </div>

            <svg viewBox="0 0 900 180" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
              <line x1="122" y1="90" x2="238" y2="90" className="draw-line delay-0" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
              <line x1="302" y1="90" x2="418" y2="90" className="draw-line delay-1" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
              <line x1="482" y1="90" x2="598" y2="90" className="draw-line delay-2" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />
              <line x1="662" y1="90" x2="778" y2="90" className="draw-line delay-3" stroke="#937C54" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />

              <g color="#C3A374" className="trad-arrow trad-arrow-1"><use href="#arrowShape" x="156" y="82" width="48" height="16" /></g>
              <g color="#C3A374" className="trad-arrow trad-arrow-2"><use href="#arrowShape" x="336" y="82" width="48" height="16" /></g>
              <g color="#C3A374" className="trad-arrow trad-arrow-3"><use href="#arrowShape" x="516" y="82" width="48" height="16" /></g>
              <g color="#C3A374" className="trad-arrow trad-arrow-4"><use href="#arrowShape" x="696" y="82" width="48" height="16" /></g>

              {/* Node 1: Factory */}
              <g className="trad-node delay-0">
                <circle cx="90" cy="90" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
                <g color="#C3A374" transform="translate(70 70)"><use href="#iconFactory" width="40" height="40" /></g>
                <text x="90" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Nhà máy</text>
              </g>

              {/* Node 2: Distributor */}
              <g className="trad-node delay-1">
                <circle cx="270" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
                <g color="#E0DCD3" transform="translate(250 70)"><use href="#iconBox" width="40" height="40" /></g>
                <text x="270" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà phân phối</text>
              </g>

              {/* Node 3: Wholesaler */}
              <g className="trad-node delay-2">
                <circle cx="450" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
                <g color="#E0DCD3" transform="translate(430 70)"><use href="#iconTruck" width="40" height="40" /></g>
                <text x="450" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà bán sỉ</text>
              </g>

              {/* Node 4: Retailer */}
              <g className="trad-node delay-3">
                <circle cx="630" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" />
                <g color="#E0DCD3" transform="translate(610 70)"><use href="#iconShop" width="40" height="40" /></g>
                <text x="630" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500">Nhà bán lẻ</text>
              </g>

              {/* Node 5: Consumer */}
              <g className="trad-node delay-4">
                <circle cx="810" cy="90" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
                <g color="#C3A374" transform="translate(790 70)"><use href="#iconPerson" width="40" height="40" /></g>
                <text x="810" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Người mua</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Block */}
      <div className="flex flex-wrap justify-center md:justify-around gap-10 mt-12 pt-10 border-t border-border-subtle/50">
        <div className="text-center max-w-[200px]">
          <div className="font-display text-4xl lg:text-5xl text-text-body leading-none mb-4">
            15–30%
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Hao hụt lợi nhuận tại
            <br />
            mỗi mắt xích trung gian
          </div>
        </div>
        <div className="text-center max-w-[200px]">
          <div className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none mb-4">
            0
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Lớp trung gian phân phối
            <br />
            (D2C Direct)
          </div>
        </div>
        <div className="text-center max-w-[200px]">
          <div className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none mb-4">
            2–3×
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Biên lợi nhuận tăng thêm
            <br />
            trả về cho nhà máy
          </div>
        </div>
      </div>
    </div>
  );
}
