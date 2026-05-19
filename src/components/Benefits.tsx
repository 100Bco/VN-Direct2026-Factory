import { Building2, Users, ShieldCheck, ArrowRight, Handshake, Megaphone } from 'lucide-react';
import { Section } from './Section';

const BENEFITS = [
  {
    icon: Building2,
    title: 'Visit trực tiếp tại xưởng',
    body: 'Buyers đến tận nhà máy — quan sát dây chuyền, kiểm tra QC, gặp đội kỹ thuật. Không phải gặp gỡ trong gian hàng hội chợ.',
  },
  {
    icon: Users,
    title: 'Đối thoại 1-on-1 với buyers',
    body: 'Mỗi nhà phát triển trình bày trực tiếp nhu cầu dự án. Quý nhà máy nghe được spec, sản lượng, tiến độ — không qua bảng báo giá giấy.',
  },
  {
    icon: ShieldCheck,
    title: 'Khách hàng đã thẩm định',
    body: 'Buyers có danh mục dự án đang triển khai, ngân sách phân bổ và quyết định mua trong 6–18 tháng tới.',
  },
  {
    icon: ArrowRight,
    title: 'Kết nối trực tiếp',
    body: 'Không qua đại lý, không qua nhà phân phối, không qua môi giới. Quan hệ trực tiếp với người ra quyết định mua hàng.',
  },
  {
    icon: Handshake,
    title: 'Hợp tác dài hạn 3 – 5 năm',
    body: 'Mỗi buyer đều tìm đối tác lâu dài, đảm bảo tính nhất quán trong chuỗi cung ứng — không phải giao dịch đơn lẻ.',
  },
  {
    icon: Megaphone,
    title: 'Hiện diện truyền thông',
    body: 'Nhà máy được giới thiệu trên kênh truyền thông 100B, LT Commercial Group và bộ tài liệu nghiên cứu điển hình Build Better Series.',
  },
];

export function Benefits() {
  return (
    <Section
      id="quyen-loi"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12 max-w-4xl">
        Khi nhà máy của Quý vị{' '}
        <em className="font-serif italic text-gradient-gold">có tên trong chương trình</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 transition-colors flex flex-col gap-4"
          >
            <div
              className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30
                         flex items-center justify-center shrink-0"
            >
              <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading leading-snug">
              {title}
            </h3>
            <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
