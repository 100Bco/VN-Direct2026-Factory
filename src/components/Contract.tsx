import { FileText, Calendar, Handshake, ArrowRight } from 'lucide-react';
import { Section } from './Section';

const CONTRACT_PDF = '/docs/hop-dong-mau-vn-direct-2026.pdf';
const BOOKING_MAILTO =
  'mailto:global@100b.co?subject=VN%20Direct%202026%20-%20%C4%90%E1%BA%B7t%20l%E1%BB%8Bch%20tham%20quan';
const AGENT_MAILTO =
  'mailto:global@100b.co?subject=VN%20Direct%202026%20-%20H%E1%BB%A3p%20t%C3%A1c%20%C4%91%E1%BA%A1i%20l%C3%BD%20b%C3%A1n%20h%C3%A0ng';

const ACTIONS = [
  {
    icon: FileText,
    label: 'Hợp đồng mẫu',
    desc: 'Xem biên bản hợp đồng khung 100B áp dụng cho chương trình.',
    href: CONTRACT_PDF,
    external: true,
  },
  {
    icon: Calendar,
    label: 'Đặt lịch tham quan',
    desc: 'Hẹn 100B đến khảo sát nhà máy trước khi đoàn đến.',
    href: BOOKING_MAILTO,
    external: false,
  },
  {
    icon: Handshake,
    label: 'Hợp tác đại lý bán hàng',
    desc: 'Mở kênh phân phối song song qua mạng lưới 100B.',
    href: AGENT_MAILTO,
    external: false,
  },
];

export function Contract() {
  return (
    <Section id="hop-tac">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-12
                   max-w-4xl"
      >
        Chọn cách <em className="font-serif italic text-gradient-gold">bắt đầu</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {ACTIONS.map(({ icon: Icon, label, desc, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="group relative bg-bg-card rounded-2xl p-7 lg:p-8 border border-border-subtle
                       hover:border-brand-gold hover:bg-bg-card-hover transition-colors
                       flex flex-col gap-5"
          >
            <div
              className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/30
                         flex items-center justify-center shrink-0"
            >
              <Icon size={20} className="text-brand-gold" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold font-sans text-text-heading leading-snug mb-2">
                {label}
              </h3>
              <p className="text-sm text-text-body font-light leading-relaxed">{desc}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
              {external ? 'Mở tài liệu' : 'Liên hệ ngay'}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
