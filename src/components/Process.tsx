import { ArrowDown } from 'lucide-react';
import { Section } from './Section';

interface Step {
  n: string;
  title: string;
  detail: string;
  objective: string;
}

interface Phase {
  n: string;
  timeline: string;
  name: string;
  accent: string;
  steps: Step[];
}

const PHASES: Phase[] = [
  {
    n: '01',
    timeline: 'Quý 1',
    name: 'Xuất khẩu',
    accent: 'lô hàng đầu tiên',
    steps: [
      {
        n: '01',
        title: 'Đánh giá nhà máy',
        detail: 'Tham quan · năng lực sản xuất · QC · chứng chỉ.',
        objective: 'Xác định khả năng đáp ứng dự án.',
      },
      {
        n: '02',
        title: 'Khảo sát thương mại',
        detail: 'Giá · MOQ · thanh toán · vận chuyển · co-branding.',
        objective: 'Thiết lập điều kiện thương mại rõ ràng.',
      },
      {
        n: '03',
        title: 'Ký hợp đồng',
        detail: 'Khung Nhà máy – Thương mại – Chiến lược + giấy chứng nhận đại lý.',
        objective: 'Chính thức hóa hợp tác hai bên.',
      },
      {
        n: '04',
        title: 'Xuất khẩu đơn đầu tiên',
        detail: 'Sản xuất · QC · vận chuyển · phản hồi thị trường.',
        objective: 'Khởi động dòng doanh thu thực.',
      },
    ],
  },
  {
    n: '02',
    timeline: 'Quý 2 – 3',
    name: 'Định hướng &',
    accent: 'mở rộng hợp tác',
    steps: [
      {
        n: '05',
        title: 'Định hướng hợp tác',
        detail: 'Phát triển sản phẩm mới · mở rộng thị trường Mỹ và mục tiêu khác.',
        objective: 'Xây dựng khung chiến lược dài hạn.',
      },
      {
        n: '06',
        title: 'Mở rộng hợp tác',
        detail: '100Bold hỗ trợ branding · marketing · truyền thông quốc tế.',
        objective: 'Tăng giá trị thương hiệu Việt.',
      },
    ],
  },
  {
    n: '03',
    timeline: 'Quý 4',
    name: 'Thương hiệu &',
    accent: 'hiện diện quốc tế',
    steps: [
      {
        n: '07',
        title: 'Co-develop brand',
        detail: 'Thương hiệu chung hoặc dòng sản phẩm độc quyền cho thị trường quốc tế.',
        objective: 'Thương hiệu Việt cạnh tranh toàn cầu.',
      },
      {
        n: '08',
        title: 'Văn phòng đại diện',
        detail: 'Showroom chung tại Mỹ · kết nối khách hàng và dự án quốc tế.',
        objective: 'Hiện diện thương mại bền vững.',
      },
    ],
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="relative bg-bg-card rounded-2xl p-6 lg:p-7 border border-border-subtle
                 hover:border-brand-gold/40 transition-colors flex flex-col gap-4 h-full"
    >
      <div
        className="w-12 h-12 rounded-full bg-bg-dark border border-brand-gold/50
                   flex items-center justify-center shrink-0
                   text-xl font-display text-gradient-gold leading-none font-medium"
      >
        {step.n}
      </div>
      <h4 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug">
        {step.title}
      </h4>
      <p className="text-sm text-text-body font-light leading-relaxed">{step.detail}</p>
      <p className="mt-auto pt-4 border-t border-border-subtle text-xs lg:text-sm text-text-muted font-serif italic font-light leading-relaxed">
        → {step.objective}
      </p>
    </div>
  );
}

function PhaseBlock({ phase, isLast }: { phase: Phase; isLast: boolean }) {
  const fullWidth = phase.steps.length === 4;
  return (
    <>
      <div className="relative">
        {/* Phase header */}
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center mb-8 lg:mb-10">
          <div className="col-span-12 lg:col-span-2">
            <span className="text-6xl md:text-7xl lg:text-8xl font-display text-gradient-gold leading-none">
              {phase.n}
            </span>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
              Giai đoạn {phase.n} · {phase.timeline}
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-text-heading leading-snug">
              {phase.name}{' '}
              <em className="font-serif italic text-gradient-gold">{phase.accent}</em>
            </h3>
          </div>
        </div>

        {/* Steps grid */}
        <div
          className={
            fullWidth
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 lg:max-w-3xl lg:mx-auto'
          }
        >
          {phase.steps.map((s) => (
            <StepCard key={s.n} step={s} />
          ))}
        </div>
      </div>

      {/* Phase connector */}
      {!isLast && (
        <div aria-hidden="true" className="flex justify-center my-12 lg:my-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 lg:h-16 bg-gradient-to-b from-brand-gold/40 to-brand-gold/0" />
            <ArrowDown size={16} strokeWidth={1.5} className="text-brand-gold/60" />
          </div>
        </div>
      )}
    </>
  );
}

export function Process() {
  return (
    <Section id="quy-trinh" eyebrow="Quy trình hợp tác">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Lộ trình 8 bước — từ nhà máy đến{' '}
        <em className="font-serif italic text-gradient-gold">hiện diện toàn cầu</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-16">
        Ba giai đoạn · một năm · đầu cuối — từ xuất khẩu container đầu tiên đến co-develop thương
        hiệu Việt cho thị trường quốc tế.
      </p>

      <div>
        {PHASES.map((phase, i) => (
          <PhaseBlock key={phase.n} phase={phase} isLast={i === PHASES.length - 1} />
        ))}
      </div>
    </Section>
  );
}
