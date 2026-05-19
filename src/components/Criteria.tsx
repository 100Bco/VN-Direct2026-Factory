import { Check } from 'lucide-react';
import { Section } from './Section';

const CRITERIA = [
  {
    title: 'Năng lực sản xuất ổn định',
    body: 'Đã có kinh nghiệm xuất khẩu hoặc đáp ứng đơn hàng quốc tế.',
  },
  {
    title: 'Chứng chỉ quốc tế',
    body: 'ASTM · ISO · FSC · LEED · Greenguard — ưu tiên có ít nhất một chứng chỉ phù hợp với ngành.',
  },
  {
    title: 'Sản phẩm phân khúc cao cấp',
    body: 'Phù hợp với thị trường nhà ở và bất động sản thương mại cao cấp tại Hoa Kỳ.',
  },
  {
    title: 'Tài liệu kỹ thuật bằng tiếng Anh',
    body: 'Sẵn sàng cung cấp tài liệu kỹ thuật, MSDS, mẫu sản phẩm và báo cáo kiểm soát chất lượng.',
  },
  {
    title: 'Cam kết hợp tác dài hạn',
    body: 'Sẵn sàng đầu tư cho quan hệ đối tác 3 – 5 năm, không phải giao dịch một lần.',
  },
];

const INDUSTRIES = [
  'Sàn (gỗ kỹ thuật, nhựa cứng SPC, nhựa phủ veneer LVT, gạch)',
  'Cửa và cửa sổ (uPVC, nhôm, kính)',
  'Tủ bếp và nội thất gỗ',
  'Đá thạch anh và đá tự nhiên',
  'Mái và tấm thép',
  'Tấm ốp tường và vách ngoài',
  'Thiết bị vệ sinh',
  'Phụ kiện kim loại',
];

export function Criteria() {
  return (
    <Section id="tieu-chi">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Tiêu chí{' '}
        <em className="font-serif italic text-gradient-gold">tuyển chọn nhà máy</em>.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left — 5 checklist */}
        <ul className="lg:col-span-7 flex flex-col gap-4">
          {CRITERIA.map((c) => (
            <li
              key={c.title}
              className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl bg-bg-card
                         border border-border-subtle hover:border-brand-gold/40 transition-colors"
            >
              <div className="w-7 h-7 icon-silver-gradient shrink-0 mt-0.5">
                <Check className="text-[#111]" size={16} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug mb-1">
                  {c.title}
                </h3>
                <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Right — Industries panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative rounded-3xl bg-bg-alt border border-border-subtle p-8 lg:p-10 overflow-hidden">
            <span className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
              Ngành ưu tiên
            </p>
            <h3 className="text-2xl lg:text-3xl font-serif font-light text-text-heading leading-snug mb-6">
              Vật liệu xây dựng và{' '}
              <em className="font-serif italic text-gradient-gold">nội thất cao cấp</em>.
            </h3>
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
        </div>
      </div>
    </Section>
  );
}
