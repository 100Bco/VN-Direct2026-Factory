import { Check } from 'lucide-react';
import { Section } from './Section';

const CRITERIA = [
  {
    title: 'Năng lực sản xuất ổn định',
    body: 'Đã có kinh nghiệm xuất khẩu hoặc đáp ứng đơn hàng quốc tế.',
  },
  {
    title: 'Chứng chỉ quốc tế',
    body: 'ASTM / ISO / FSC / LEED / Greenguard — ưu tiên có ≥ 1 chứng chỉ phù hợp ngành.',
  },
  {
    title: 'Sản phẩm phù hợp residential/commercial cao cấp',
    body: 'Hướng tới thị trường Mỹ — không tier-3 commodity.',
  },
  {
    title: 'Tài liệu tiếng Anh',
    body: 'Sẵn sàng cung cấp tech sheet, MSDS, sample, đánh giá QC bằng tiếng Anh.',
  },
  {
    title: 'Cam kết dài hạn',
    body: 'Sẵn sàng đầu tư relationship 3–5 năm, không chỉ deal 1 chuyến.',
  },
];

const INDUSTRIES = [
  'Sàn (gỗ kỹ thuật, SPC, LVT, gạch)',
  'Cửa & cửa sổ (uPVC, nhôm, kính)',
  'Tủ bếp & nội thất gỗ',
  'Đá thạch anh & đá tự nhiên',
  'Mái & tấm thép',
  'Wall panels & wall cladding',
  'Thiết bị vệ sinh',
  'Phụ kiện kim loại',
];

export function Criteria() {
  return (
    <Section id="tieu-chi" eyebrow="Tiêu chí tuyển chọn">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Chúng tôi không chọn theo quy mô.{' '}
        <em className="font-serif italic text-gradient-gold">Chúng tôi chọn theo chất lượng.</em>
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        100B đã làm việc với hàng trăm nhà máy Việt. Chương trình này giới hạn{' '}
        <span className="text-text-heading font-normal">10–13 đơn vị</span> để đảm bảo mỗi nhà máy
        đều có đủ thời gian visit, briefing, và tiếp xúc trực tiếp với buyers. Đây là tiêu chí ưu
        tiên:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <ul className="flex flex-col gap-4">
          {CRITERIA.map((c) => (
            <li
              key={c.title}
              className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl bg-bg-card
                         border border-border-subtle hover:border-brand-gold/30 transition-colors"
            >
              <div className="w-7 h-7 icon-silver-gradient shrink-0 mt-0.5">
                <Check className="text-[#111]" size={16} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold text-text-heading mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-text-body font-light leading-relaxed">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative p-8 lg:p-10 rounded-3xl bg-bg-alt border border-border-subtle h-fit lg:sticky lg:top-28">
          <span className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold rounded-l-3xl" />
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
            Ngành ưu tiên
          </p>
          <h3 className="text-2xl lg:text-3xl font-serif text-text-heading font-light leading-snug mb-6">
            VLXD & nội thất cao cấp.
          </h3>
          <ul className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <li
                key={ind}
                className="text-xs lg:text-sm px-3 py-1.5 rounded-full border border-border-subtle
                           text-text-body bg-bg-card/50"
              >
                {ind}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
