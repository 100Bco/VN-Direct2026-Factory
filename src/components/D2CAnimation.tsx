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

        .d2c-arrow-1 { animation: d2cArrow 3s ease-in-out infinite; animation-delay: 1.8s; }
        .d2c-arrow-2 { animation: d2cArrow 3s ease-in-out infinite; animation-delay: 2.4s; }

        @keyframes d2cArrow {
          0%   { opacity: 0; transform: translateX(-18px); }
          20%  { opacity: 1; transform: translateX(0); }
          50%  { opacity: 1; transform: translateX(0); }
          75%  { opacity: 0; transform: translateX(18px); }
          100% { opacity: 0; transform: translateX(18px); }
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
          <symbol id="iconCross" viewBox="0 0 24 24">
            <line x1="4" y1="4" x2="20" y2="20" stroke="#B84A3E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="#B84A3E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
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
          {/* TRADITIONAL ROW LABEL */}
          <div className="text-center mb-4 text-[10px] uppercase tracking-[0.18em] text-text-body/60">
            Truyền thống — đang lỗi thời
          </div>

          {/* TRADITIONAL ROW */}
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

            {/* Node 2: Distributor (struck out) */}
            <g className="trad-node delay-1" opacity="0.45">
              <circle cx="270" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" opacity="0.7" />
              <g color="#E0DCD3" transform="translate(250 70)"><use href="#iconBox" width="40" height="40" /></g>
              <use href="#iconCross" x="246" y="66" width="48" height="48" />
              <text x="270" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" opacity="0.5">Nhà phân phối</text>
            </g>

            {/* Node 3: Wholesaler (struck out) */}
            <g className="trad-node delay-2" opacity="0.45">
              <circle cx="450" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" opacity="0.7" />
              <g color="#E0DCD3" transform="translate(430 70)"><use href="#iconTruck" width="40" height="40" /></g>
              <use href="#iconCross" x="426" y="66" width="48" height="48" />
              <text x="450" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" opacity="0.5">Nhà bán sỉ</text>
            </g>

            {/* Node 4: Retailer (struck out) */}
            <g className="trad-node delay-3" opacity="0.45">
              <circle cx="630" cy="90" r="28" fill="url(#emblemDark)" stroke="#E0DCD3" strokeWidth="1" filter="url(#dropShadow)" opacity="0.7" />
              <g color="#E0DCD3" transform="translate(610 70)"><use href="#iconShop" width="40" height="40" /></g>
              <use href="#iconCross" x="606" y="66" width="48" height="48" />
              <text x="630" y="146" textAnchor="middle" fill="#E0DCD3" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" opacity="0.5">Nhà bán lẻ</text>
            </g>

            {/* Node 5: Consumer */}
            <g className="trad-node delay-4">
              <circle cx="810" cy="90" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
              <g color="#C3A374" transform="translate(790 70)"><use href="#iconPerson" width="40" height="40" /></g>
              <text x="810" y="148" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Người mua</text>
            </g>
          </svg>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-border-subtle" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-gold/60 font-semibold whitespace-nowrap">
              Được thay thế bởi
            </span>
            <div className="flex-1 h-px bg-border-subtle" />
          </div>

          {/* D2C ROW LABEL */}
          <div className="text-center mb-4 text-[10px] uppercase tracking-[0.18em] text-brand-gold/80 font-semibold">
            D2C — Mô hình mới
          </div>

          {/* D2C ROW */}
          <svg viewBox="0 0 900 200" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
            <line x1="222" y1="100" x2="378" y2="100" className="draw-line delay-5" stroke="#C3A374" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
            <line x1="522" y1="100" x2="678" y2="100" className="draw-line delay-6" stroke="#C3A374" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

            <g color="#C3A374" className="d2c-arrow-1"><use href="#arrowShape" x="260" y="92" width="60" height="16" /></g>
            <g color="#C3A374" className="d2c-arrow-2"><use href="#arrowShape" x="560" y="92" width="60" height="16" /></g>

            {/* Node 1: Factory */}
            <g className="d2c-node delay-5">
              <circle cx="180" cy="100" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
              <g color="#C3A374" transform="translate(160 80)"><use href="#iconFactory" width="40" height="40" /></g>
              <text x="180" y="158" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Nhà máy</text>
            </g>

            {/* Node 2: 100B EMBLEM (center) */}
            <g className="d2c-node delay-6">
              <circle cx="450" cy="100" r="36" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="2" filter="url(#dropShadow)" />
              <image
                href="/logos/100B%20Emblem.png"
                x="416"
                y="66"
                width="68"
                height="68"
                preserveAspectRatio="xMidYMid meet"
              />
              <text x="450" y="158" textAnchor="middle" fill="#C3A374" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" letterSpacing="0.05em">100B</text>
              <text x="450" y="178" textAnchor="middle" fill="#C3A374" fontFamily="Cormorant Garamond, serif" fontSize="13" fontStyle="italic" opacity="0.85">Đối tác chiến lược</text>
            </g>

            {/* Node 3: Buyer (Chủ đầu tư & chủ thầu) */}
            <g className="d2c-node delay-7">
              <circle cx="720" cy="100" r="32" fill="url(#emblemDark)" stroke="#C3A374" strokeWidth="1.5" filter="url(#dropShadow)" />
              <g color="#C3A374" transform="translate(700 80)"><use href="#iconPerson" width="40" height="40" /></g>
              <text x="720" y="158" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">Chủ đầu tư</text>
              <text x="720" y="176" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500">&amp; chủ thầu</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Stats Block */}
      <div className="flex flex-wrap justify-center md:justify-around gap-10 mt-12 pt-10 border-t border-border-subtle/50">
        <div className="text-center max-w-[200px]">
          <div className="font-display text-4xl lg:text-5xl text-text-body leading-none mb-4">
            15–30%
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Biên lợi nhuận
            <br />
            mỗi lớp trung gian ăn mất
          </div>
        </div>
        <div className="text-center max-w-[200px]">
          <div className="font-display text-4xl lg:text-5xl text-gradient-gold leading-none mb-4">
            1
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Đối tác chiến lược duy nhất
            <br />
            không phải trung gian
          </div>
        </div>
        <div className="text-center max-w-[200px]">
          <div className="font-display text-2xl lg:text-3xl text-gradient-gold leading-tight mb-4">
            Thương hiệu
            <br />
            riêng
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-text-body leading-relaxed">
            Sở hữu kênh · Kiểm soát giá
            <br />
            Làm chủ thị trường
          </div>
        </div>
      </div>
    </div>
  );
}
