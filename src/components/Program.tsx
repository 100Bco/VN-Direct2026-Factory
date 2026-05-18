import { Building2, MessageSquare, Package, Check } from 'lucide-react';
import { Section } from './Section';

const FORMATS = [
  {
    icon: Building2,
    title: 'Factory Visit',
    detail:
      'Đoàn đến tận nhà máy, tham quan dây chuyền, kho thành phẩm, showroom. 90–120 phút mỗi nhà máy.',
  },
  {
    icon: MessageSquare,
    title: '1-on-1 Briefing',
    detail:
      'Hội đàm trực tiếp với từng buyer về spec, volume, certifications, lead time, MOQ, payment terms.',
  },
  {
    icon: Package,
    title: 'Sample & Documentation',
    detail:
      'Mỗi nhà máy chuẩn bị bộ sample + tech sheet tiếng Anh. 100B hỗ trợ dịch & format.',
  },
];

const OBJECTIVES = [
  'Tìm hiểu năng lực sản xuất, sản phẩm và quy trình của Quý Nhà máy.',
  'Trao đổi nhu cầu thực tế từ thị trường Texas (spec, volume, certification).',
  'Đặt nền móng cho hợp tác xuất khẩu bền vững, lâu dài.',
];

export function Program() {
  return (
    <Section id="chuong-trinh" eyebrow="Chương trình">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        7 ngày. 10–13 nhà máy được tuyển chọn.{' '}
        <em className="font-serif italic text-gradient-gold">Hợp tác thực chất.</em>
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        VN Direct 2026 là chương trình{' '}
        <span className="text-text-heading font-normal">Build Better Series</span> của 100B — đưa
        đoàn buyers chiến lược từ Texas đến trực tiếp các nhà máy hàng đầu Việt Nam trong ngành
        VLXD & nội thất. Mỗi nhà máy được visit tại địa điểm sản xuất, briefing kỹ thuật, đối
        thoại nhu cầu thực tế.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
        {FORMATS.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/30
                            flex items-center justify-center">
              <Icon size={22} className="text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl lg:text-2xl font-serif text-text-heading leading-snug">
              {title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {detail}
            </p>
          </div>
        ))}
      </div>

      <div className="relative p-8 lg:p-10 rounded-3xl bg-bg-card border border-border-subtle overflow-hidden">
        <span className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold rounded-l-3xl" />
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5">
          Mục tiêu chuyến đi
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {OBJECTIVES.map((o) => (
            <li key={o} className="flex items-start gap-3">
              <div className="w-6 h-6 icon-silver-gradient shrink-0">
                <Check className="text-[#111]" size={14} strokeWidth={3} />
              </div>
              <span className="text-sm lg:text-base text-text-body font-light leading-relaxed">
                {o}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
