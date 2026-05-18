import { Section } from './Section';

const INDUSTRIES = [
  'Sàn (gỗ kỹ thuật, nhựa cứng, nhựa phủ veneer, gạch)',
  'Cửa và cửa sổ (nhựa cứng, nhôm, kính)',
  'Tủ bếp và nội thất gỗ',
  'Đá thạch anh và đá tự nhiên',
  'Mái và tấm thép',
  'Tấm ốp tường và vách ngoài',
  'Thiết bị vệ sinh',
  'Phụ kiện kim loại',
];

export function Industries() {
  return (
    <Section id="nganh-uu-tien" eyebrow="Ngành ưu tiên">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-14
                   max-w-4xl"
      >
        Vật liệu xây dựng và{' '}
        <em className="font-serif italic text-gradient-gold">nội thất cao cấp</em>.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={ind}
            className="group relative bg-bg-card rounded-2xl p-5 lg:p-6 border border-border-subtle
                       hover:border-brand-gold/40 hover:bg-bg-card-hover transition-colors
                       flex items-start gap-4"
          >
            <span className="text-sm font-display text-gradient-gold leading-none font-medium pt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">{ind}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
