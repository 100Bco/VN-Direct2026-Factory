import { Fragment } from 'react';

const TRAD_NODES = ['Nhà máy', 'Phân phối', 'Bán sỉ', 'Bán lẻ', 'Người mua'];
const TRAD_LOSSES = ['−15%', '−20%', '−25%', '−30%'];

const DIRECT_NODES = ['Nhà máy', 'Người mua'];

function Node({
  name,
  highlighted = false,
  faded = false,
}: {
  name: string;
  highlighted?: boolean;
  faded?: boolean;
}) {
  return (
    <div
      className={`px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-medium
                  whitespace-nowrap shrink-0 transition-colors ${
                    highlighted
                      ? 'bg-brand-gold/10 border border-brand-gold text-brand-gold'
                      : faded
                        ? 'bg-bg-card/60 border border-border-subtle text-text-muted'
                        : 'bg-bg-card border border-border-subtle text-text-body'
                  }`}
    >
      {name}
    </div>
  );
}

function Arrow({
  label,
  tone,
  delay = 0,
}: {
  label?: string;
  tone: 'pain' | 'gain';
  delay?: number;
}) {
  const isGain = tone === 'gain';
  return (
    <div className="relative flex-1 min-w-[36px] md:min-w-[60px] h-px flex items-center justify-center">
      {/* Static line */}
      <div
        className={`absolute inset-x-0 top-1/2 -translate-y-1/2 ${
          isGain
            ? 'h-px bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0'
            : 'border-t border-dashed border-border-subtle'
        }`}
      />
      {/* Traveling dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1/2 w-1.5 h-1.5 rounded-full ${
          isGain ? 'bg-brand-gold shadow-[0_0_12px_rgba(195,163,116,0.6)]' : 'bg-text-muted/70'
        }`}
        style={{ animation: `travel-x ${isGain ? '2.6s' : '2.4s'} linear ${delay}s infinite` }}
      />
      {/* Loss label */}
      {label && (
        <span
          className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] uppercase
                     tracking-[0.18em] text-text-muted font-semibold font-display whitespace-nowrap"
          style={{ animation: `pulse-fade 2.6s ease-in-out ${delay}s infinite` }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

interface FlowProps {
  label: string;
  tone: 'pain' | 'gain';
  nodes: string[];
  losses?: string[];
  share: number;
  total: string;
  caption?: string;
}

function FlowRow({ label, tone, nodes, losses, share, total, caption }: FlowProps) {
  const isGain = tone === 'gain';
  return (
    <div className="space-y-8">
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-px ${isGain ? 'bg-brand-gold' : 'bg-border-subtle'}`} />
        <p
          className={`text-[11px] uppercase tracking-[0.22em] font-semibold ${
            isGain ? 'text-brand-gold' : 'text-text-muted'
          }`}
        >
          {label}
        </p>
      </div>

      {/* Flow chain */}
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 pt-4 overflow-x-auto pb-2">
        {nodes.map((name, i) => (
          <Fragment key={`${tone}-${i}`}>
            <Node
              name={name}
              highlighted={isGain && (i === 0 || i === nodes.length - 1)}
              faded={!isGain}
            />
            {i < nodes.length - 1 && (
              <Arrow label={losses?.[i]} tone={tone} delay={i * 0.45} />
            )}
          </Fragment>
        ))}
      </div>

      {/* Result bar */}
      <div className="flex items-center gap-4 lg:gap-6">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-text-muted font-semibold w-28 md:w-36 shrink-0 leading-snug">
          Nhà máy nhận
        </p>
        <div className="flex-1 h-2 bg-bg-card rounded-full overflow-hidden relative">
          <div
            className={`h-full rounded-full transition-all ${
              isGain
                ? 'bg-gradient-to-r from-brand-gold-dim via-brand-gold to-brand-gold-hover'
                : 'bg-text-muted/40'
            }`}
            style={{ width: `${share}%` }}
          />
        </div>
        <span
          className={`text-xl md:text-2xl lg:text-3xl font-display leading-none shrink-0 ${
            isGain ? 'text-gradient-gold' : 'text-text-muted'
          }`}
        >
          {total}
        </span>
      </div>

      {caption && (
        <p className="text-xs text-text-muted font-serif italic font-light text-right -mt-4">
          {caption}
        </p>
      )}
    </div>
  );
}

export function D2CAnimation() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <FlowRow
        label="Truyền thống — 4 lớp trung gian"
        tone="pain"
        nodes={TRAD_NODES}
        losses={TRAD_LOSSES}
        share={30}
        total="$30"
        caption="trên mỗi $100 khách hàng cuối trả"
      />

      <FlowRow
        label="D2C — Vietnam Direct"
        tone="gain"
        nodes={DIRECT_NODES}
        share={85}
        total="$85"
        caption="trên mỗi $100 khách hàng cuối trả"
      />
    </div>
  );
}
