import { Section } from './Section';

const BENEFITS = [
  {
    n: '01',
    title: 'Visit trực tiếp tại nhà máy',
    body: 'Không phải 1-1 meeting trong booth hội chợ. Buyers đến tận factory floor, thấy dây chuyền, kiểm tra QC, gặp đội kỹ thuật.',
  },
  {
    n: '02',
    title: 'Briefing 1-on-1 với buyers',
    body: 'Mỗi buyer brief riêng về dự án của họ. Bạn nghe trực tiếp spec, volume, timeline — không qua RFQ giấy.',
  },
  {
    n: '03',
    title: 'Pre-vetted leads',
    body: 'Buyers đã có pipeline active, ngân sách phân bổ, và đang ra quyết định mua trong 6–18 tháng tới. Không phải prospects giai đoạn nghiên cứu.',
  },
  {
    n: '04',
    title: 'Direct factory-to-developer',
    body: 'Không qua agent, không qua distributor, không qua broker. Quan hệ trực tiếp giữa nhà máy và người ra quyết định mua.',
  },
  {
    n: '05',
    title: 'Hợp tác dài hạn 3–5 năm',
    body: 'Mỗi buyer trong đoàn đều tìm partnership lâu dài để đảm bảo consistency. Không phải deal one-off.',
  },
  {
    n: '06',
    title: 'Marketing exposure',
    body: 'Nhà máy được feature trên kênh truyền thông 100B, LT Commercial Group, và case study của Build Better Series.',
  },
];

export function Benefits() {
  return (
    <Section id="loi-ich" eyebrow="Lợi ích">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-14
                   max-w-4xl"
      >
        Khi nhà máy của Quý vị{' '}
        <em className="font-serif italic text-gradient-gold">có tên trong chương trình</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {BENEFITS.map((b) => (
          <div
            key={b.n}
            className="group bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 hover:bg-bg-card-hover transition-colors
                       flex flex-col gap-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display text-gradient-gold leading-none font-medium">
                {b.n}
              </span>
              <span className="h-px flex-1 bg-border-subtle group-hover:bg-brand-gold/30 transition-colors" />
            </div>
            <h3 className="text-lg lg:text-xl font-serif text-text-heading leading-snug">
              {b.title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
