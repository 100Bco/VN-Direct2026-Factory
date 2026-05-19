import { ArrowRight } from 'lucide-react';
import { Section } from './Section';

const TRADITIONAL_STEPS = [
  'Nhà máy',
  'Nhà phân phối',
  'Nhà bán sỉ',
  'Nhà bán lẻ',
  'Người mua',
];

const DIRECT_STEPS = ['Nhà máy', 'Người mua'];

function FlowDiagram({
  label,
  steps,
  tone,
}: {
  label: string;
  steps: string[];
  tone: 'pain' | 'gain';
}) {
  const isGain = tone === 'gain';
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 border ${
        isGain
          ? 'bg-bg-card border-brand-gold/40'
          : 'bg-bg-card border-border-subtle opacity-80'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className={`text-[11px] uppercase tracking-[0.2em] font-semibold ${
            isGain ? 'text-brand-gold' : 'text-text-muted'
          }`}
        >
          {label}
        </span>
        {!isGain && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted/70 font-medium">
            — biên lợi nhuận bị nén
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2 md:gap-3">
            <div
              className={`px-3 py-2 md:px-4 md:py-3 rounded-lg text-xs md:text-sm font-medium
                          whitespace-nowrap ${
                            isGain && (i === 0 || i === steps.length - 1)
                              ? 'bg-brand-gold/10 border border-brand-gold/40 text-brand-gold'
                              : 'bg-bg-alt border border-border-subtle text-text-body'
                          }`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className={isGain ? 'text-brand-gold' : 'text-text-muted'}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <Section id="van-de" eyebrow="Vấn đề">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Nhà máy Việt đang{' '}
        <em className="font-serif italic text-gradient-gold">bán dưới giá trị thực</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-12">
        Trung Quốc đã làm chủ cuộc chơi D2C + logistics. Mô hình phân phối truyền thống đang bị bóp
        chết — và biên lợi nhuận của nhà máy đi cùng với nó.
      </p>

      {/* Visual: D2C vs Traditional Retail */}
      <div className="flex flex-col gap-4 lg:gap-6">
        <FlowDiagram label="Truyền thống" steps={TRADITIONAL_STEPS} tone="pain" />
        <FlowDiagram label="D2C — Vietnam Direct" steps={DIRECT_STEPS} tone="gain" />
      </div>
    </Section>
  );
}
