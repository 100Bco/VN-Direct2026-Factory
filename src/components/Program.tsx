import { Building2, MessageSquare, Package, Check } from 'lucide-react';
import { Section } from './Section';

const FORMATS = [
  {
    icon: Building2,
    title: 'Thăm quan thực địa',
    detail:
      'Đoàn đến tận nhà máy, tham quan dây chuyền sản xuất, kho thành phẩm và khu trưng bày sản phẩm. Thời lượng từ 90 đến 120 phút mỗi nhà máy.',
  },
  {
    icon: MessageSquare,
    title: 'Trao đổi trực tiếp',
    detail:
      'Hội đàm riêng với từng nhà phát triển về thông số kỹ thuật, sản lượng, chứng nhận, thời gian giao hàng, đơn hàng tối thiểu và điều kiện thanh toán.',
  },
  {
    icon: Package,
    title: 'Hồ sơ kỹ thuật và mẫu sản phẩm',
    detail:
      'Mỗi nhà máy chuẩn bị bộ mẫu sản phẩm kèm tài liệu kỹ thuật bằng tiếng Anh. 100B hỗ trợ biên dịch và chuẩn hóa định dạng.',
  },
];

const OBJECTIVES = [
  'Tìm hiểu năng lực sản xuất, sản phẩm và quy trình của Quý nhà máy.',
  'Trao đổi nhu cầu thực tế từ thị trường Texas về thông số kỹ thuật, sản lượng và chứng nhận.',
  'Đặt nền móng cho quan hệ hợp tác xuất khẩu bền vững và lâu dài.',
];

export function Program() {
  return (
    <Section id="chuong-trinh" eyebrow="Chương trình">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mb-6
                   max-w-4xl"
      >
        7 ngày. 10–13 nhà máy được tuyển chọn.{' '}
        <em className="italic text-gradient-gold">Hợp tác có chiều sâu.</em>
      </h2>

      <p className="text-base md:text-lg text-text-body font-light leading-relaxed max-w-3xl mb-14">
        VN Direct 2026 là chương trình{' '}
        <span className="text-text-heading font-normal">Build Better Series</span> của 100B — đưa
        đoàn nhà phát triển chiến lược từ Texas đến trực tiếp các nhà máy hàng đầu Việt Nam trong
        lĩnh vực vật liệu xây dựng và nội thất. Mỗi nhà máy được thăm tại địa điểm sản xuất, trao
        đổi kỹ thuật chuyên sâu và đối thoại trực tiếp về nhu cầu thực tế.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
        {FORMATS.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="bg-bg-card rounded-2xl p-7 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
          >
            <div
              className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30
                            flex items-center justify-center shrink-0"
            >
              <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-text-heading leading-snug">
              {title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {detail}
            </p>
          </div>
        ))}
      </div>

      <div className="relative p-7 lg:p-10 rounded-2xl bg-bg-card border border-border-subtle overflow-hidden">
        <span className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-gold mb-5">
          Mục tiêu của chuyến đi
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {OBJECTIVES.map((o) => (
            <li key={o} className="flex items-start gap-3">
              <div className="w-6 h-6 icon-silver-gradient shrink-0 mt-0.5">
                <Check className="text-[#111]" size={13} strokeWidth={3} />
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
