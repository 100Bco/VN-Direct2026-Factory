import { Section } from './Section';

interface Step {
  n: string;
  title: string;
  detail: string;
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
    accent: 'lô đầu tiên',
    steps: [
      { n: '01', title: 'Đánh giá nhà máy', detail: 'Tham quan · QC · chứng chỉ.' },
      { n: '02', title: 'Khảo sát thương mại', detail: 'Giá · MOQ · thanh toán.' },
      { n: '03', title: 'Ký hợp đồng', detail: 'Khung 3 bên + giấy chứng nhận đại lý.' },
      { n: '04', title: 'Xuất khẩu đơn đầu', detail: 'Sản xuất · QC · vận chuyển.' },
    ],
  },
  {
    n: '02',
    timeline: 'Quý 2 – 3',
    name: 'Định hướng &',
    accent: 'mở rộng',
    steps: [
      { n: '05', title: 'Định hướng hợp tác', detail: 'Sản phẩm mới · thị trường Mỹ.' },
      { n: '06', title: 'Mở rộng hợp tác', detail: '100Bold · branding · truyền thông.' },
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
        detail: 'Thương hiệu chung · dòng sản phẩm độc quyền.',
      },
      { n: '08', title: 'Văn phòng đại diện', detail: 'Showroom Mỹ · kết nối quốc tế.' },
    ],
  },
];

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div
      className="relative bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle
                 hover:border-brand-gold/40 transition-colors flex flex-col"
    >
      {/* Phase header */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-4xl font-display text-gradient-gold leading-none font-medium">
          {phase.n}
        </span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
          {phase.timeline}
        </span>
      </div>
      <h3 className="text-xl lg:text-2xl font-serif font-light text-text-heading leading-snug mb-6">
        {phase.name}{' '}
        <em className="font-serif italic text-gradient-gold">{phase.accent}</em>
      </h3>

      {/* Steps */}
      <ul className="flex flex-col gap-3 lg:gap-4 mt-auto">
        {phase.steps.map((s) => (
          <li
            key={s.n}
            className="flex items-start gap-4 pt-3 lg:pt-4 border-t border-border-subtle"
          >
            <span className="text-xl font-display text-gradient-gold font-medium leading-none mt-0.5 shrink-0">
              {s.n}
            </span>
            <div className="min-w-0">
              <p className="text-sm lg:text-base font-bold font-sans text-text-heading leading-snug">
                {s.title}
              </p>
              <p className="text-xs lg:text-sm text-text-muted font-light leading-relaxed mt-1">
                {s.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Process() {
  return (
    <Section id="quy-trinh">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Lộ trình 8 bước — từ nhà máy đến{' '}
        <em className="font-serif italic text-gradient-gold">hiện diện toàn cầu</em>.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.n} phase={phase} />
        ))}
      </div>
    </Section>
  );
}
