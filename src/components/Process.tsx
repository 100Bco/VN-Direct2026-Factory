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
  note?: string;
  steps: Step[];
  highlight?: boolean;
}

const PHASES: Phase[] = [
  {
    n: '01',
    timeline: 'Quý 1',
    name: 'Đối tác xúc tiến thương mại',
    steps: [
      { n: '01', title: 'Đánh giá nhà máy', detail: 'Tham quan · QC · chứng chỉ.' },
      { n: '02', title: 'Khảo sát thương mại', detail: 'Chính sách chiết khấu · Giá · MOQ · Thanh toán.' },
      { n: '03', title: 'Ký hợp đồng', detail: 'Khung 3 bên · chứng nhận đại lý.' },
      { n: '04', title: 'Đơn hàng đầu tiên', detail: 'Sản xuất · QC · vận chuyển.' },
    ],
  },
  {
    n: '02',
    timeline: 'Quý 2 – 3',
    name: 'Mở rộng hợp tác',
    steps: [
      {
        n: '05',
        title: 'Branding & truyền thông',
        detail: 'Xây dựng nhận diện · câu chuyện thương hiệu.',
      },
      {
        n: '06',
        title: 'Phát triển thị trường',
        detail: 'Mở rộng kênh · thêm sản phẩm · thêm buyer.',
      },
    ],
  },
  {
    n: '03',
    timeline: 'Quý 4',
    name: 'Cùng xây thương hiệu riêng',
    note: 'Áp dụng cho các nhà máy gia công',
    highlight: true,
    steps: [
      {
        n: '07',
        title: 'Co-develop thương hiệu',
        detail: 'Thương hiệu chung · dòng sản phẩm độc quyền.',
      },
      {
        n: '08',
        title: 'Hiện diện quốc tế',
        detail: 'Showroom Mỹ · văn phòng đại diện.',
      },
    ],
  },
];

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 border transition-colors flex flex-col
                  ${
                    phase.highlight
                      ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(195,163,116,0.12),rgba(195,163,116,0.04))] border-brand-gold/50 hover:border-brand-gold shadow-[inset_0_0_40px_rgba(195,163,116,0.05)]'
                      : 'bg-bg-card border-border-subtle hover:border-brand-gold/40'
                  }`}
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
      <h3
        className={`text-xl lg:text-2xl font-serif font-light leading-snug mb-2 ${
          phase.highlight ? 'text-brand-gold' : 'text-text-heading'
        }`}
      >
        {phase.name}
      </h3>
      {phase.note && (
        <p className="text-xs text-text-body font-light italic font-serif mb-6">{phase.note}</p>
      )}
      {!phase.note && <div className="mb-4" />}

      {/* Steps */}
      <ul className="flex flex-col gap-3 lg:gap-4">
        {phase.steps.map((s) => (
          <li
            key={s.n}
            className="flex items-start gap-4 pt-3 lg:pt-4 border-t border-border-subtle"
          >
            <span className="text-xl font-display text-gradient-gold font-medium leading-none mt-0.5 shrink-0">
              {s.n}
            </span>
            <div className="min-w-0">
              <p
                className={`text-sm lg:text-base font-bold font-sans leading-snug ${
                  phase.highlight ? 'text-brand-gold' : 'text-text-heading'
                }`}
              >
                {s.title}
              </p>
              <p className="text-xs lg:text-sm text-text-heading font-light leading-relaxed mt-1">
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
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Từ xưởng sản xuất
        <br />
        đến <em className="font-serif italic text-gradient-gold">thương hiệu quốc tế</em>.
      </h2>

      <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed max-w-3xl mb-12">
        100B không tìm nhà cung cấp. Chúng tôi tìm đối tác để cùng xây dựng thương hiệu riêng trên
        thị trường Mỹ.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.n} phase={phase} />
        ))}
      </div>
    </Section>
  );
}
