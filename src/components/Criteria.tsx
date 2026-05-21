import { Section } from './Section';

const CRITERIA = [
  {
    title: 'Năng lực xuất khẩu',
    body: 'Đã có kinh nghiệm xuất khẩu hoặc sẵn sàng đáp ứng đơn hàng quốc tế. Ưu tiên nhà máy doanh thu $100M+ với track record xuất khẩu ổn định.',
  },
  {
    title: 'Chứng chỉ quốc tế',
    body: 'ASTM · ISO · FSC · LEED · Greenguard — ưu tiên có ít nhất một chứng chỉ phù hợp thị trường Mỹ.',
  },
  {
    title: 'Phân khúc trung cao cấp',
    body: 'Sản phẩm phù hợp nhà ở và bất động sản thương mại trung cao cấp tại Hoa Kỳ. Không cạnh tranh bằng giá rẻ — cạnh tranh bằng chất lượng và định vị.',
  },
  {
    title: 'Tư duy hợp tác dài hạn',
    body: 'Sẵn sàng đầu tư cho quan hệ 3 đến 5 năm. Cam kết cung cấp giá tốt nhất và ưu tiên năng lực sản xuất cho đối tác chiến lược.',
  },
  {
    title: 'Tài liệu kỹ thuật tiếng Anh',
    body: 'Sẵn sàng cung cấp spec sheet, MSDS, mẫu sản phẩm và báo cáo QC bằng tiếng Anh.',
  },
];

const INDUSTRIES = [
  'Sàn (gỗ kỹ thuật · SPC · LVT · gạch)',
  'Cửa & cửa sổ (uPVC · nhôm · kính)',
  'Tủ bếp & nội thất gỗ',
  'Đá thạch anh & đá tự nhiên',
  'Mái & tấm thép',
  'Tấm ốp tường & vách ngoài',
  'Thiết bị vệ sinh',
  'Phụ kiện kim loại',
];

export function Criteria() {
  return (
    <Section id="tieu-chi">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Chúng tôi tìm đối tác,
        <br />
        không phải{' '}
        <em className="font-serif italic text-gradient-gold">nhà cung cấp</em>.
      </h2>

      <ul className="flex flex-col mb-12">
        {CRITERIA.map((c, i) => (
          <li
            key={c.title}
            className={`grid grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-7 ${
              i < CRITERIA.length - 1 ? 'border-b border-border-subtle/50' : ''
            }`}
          >
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug">
                {c.title}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
                {c.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Industries */}
      <div className="rounded-3xl bg-bg-alt border border-border-subtle p-8 lg:p-10 overflow-hidden relative">
        <span className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
          Ngành ưu tiên
        </p>
        <ul className="flex flex-wrap gap-2">
          {INDUSTRIES.map((ind) => (
            <li
              key={ind}
              className="text-xs lg:text-sm px-3 py-1.5 rounded-full border border-brand-gold/40
                         text-text-heading bg-brand-gold/5 font-medium"
            >
              {ind}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
