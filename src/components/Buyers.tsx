import { Section } from './Section';

interface Buyer {
  name: string;
  role: string;
  intro: string;
  bullets: { heading: string; items: string[] }[];
  interest: string;
  initials: string;
}

const BUYERS: Buyer[] = [
  {
    name: 'Lezlie Tram Le',
    role: 'Founder & CEO, LT Commercial Group | Đại diện chính thức 100B tại Texas',
    intro:
      '22+ năm trong bất động sản thương mại Texas. Trực tiếp dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang.',
    bullets: [
      {
        heading: 'Track record',
        items: [
          '$55 triệu USD dự án xây dựng mới',
          '$250+ triệu USD thương vụ M&A',
          'Hàng trăm tài sản: văn phòng, retail, công nghiệp, nhà ở',
        ],
      },
      {
        heading: 'Công nhận',
        items: [
          'Chủ tịch AREAA Austin (2020)',
          'Chủ tịch Manor Economic Development Corporation (EDC)',
          'Austin Under 40 Award — hạng mục Bất động sản (2021)',
          'Trang bìa tạp chí Austin Woman (5/2023)',
          'Asian Chamber of Commerce — Giải thưởng Doanh nghiệp Nổi bật (2019)',
        ],
      },
    ],
    interest: 'Phụ trách kết nối nhà máy VN với thị trường Texas, ngành VLXD & nội thất.',
    initials: 'LT',
  },
  {
    name: 'Michael Hough',
    role: 'General Contractor — Austin, Texas',
    intro:
      '30 năm kinh nghiệm trong xây dựng. Khởi đầu từ cải tạo nhà ở, mở rộng sang xây mới custom homes, hiện tập trung vào multi-family tax credit & dự án HUD.',
    bullets: [
      {
        heading: 'Track record',
        items: [
          'Dự án $10M – $24M quy mô mỗi project',
          'Thị trường: Corpus Christi • Houston • Austin • San Antonio',
          'Chuyên: multi-family, HUD-funded housing',
        ],
      },
    ],
    interest:
      'Quan tâm: vật liệu xây dựng số lượng lớn, đạt chuẩn HUD/local code, supply chain ổn định cho dự án quy mô.',
    initials: 'MH',
  },
  {
    name: 'Kameron Schram',
    role: 'Owner & Founder, Cleo Builders — Boutique Luxury Custom Home Builder, Texas',
    intro:
      'Nhà xây dựng nhà ở cao cấp boutique tại Texas. Tập trung vào craftsmanship, chi tiết thiết kế, và sản phẩm có dấu ấn riêng cho từng khách hàng.',
    bullets: [
      {
        heading: 'Active pipeline ($15M)',
        items: [
          '1 dự án 9-unit đang xây dựng',
          '1 custom home đang xây',
          '4 custom homes đang thiết kế ($2M – $3.2M)',
          '1 tenant finish-out giai đoạn lập kế hoạch',
          '1 custom home cá nhân đang thiết kế',
        ],
      },
    ],
    interest:
      'Quan tâm: long-term partnership với nhà máy chất lượng cao, đảm bảo tính nhất quán, kiểm soát chất lượng, và sản phẩm độc đáo cho khách hàng cao cấp.',
    initials: 'KS',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Real Estate Developer — Rio Grande Valley, Texas | 5 thế hệ phát triển BĐS',
    intro:
      '23+ năm kinh nghiệm. Cựu sinh viên United States Naval Academy và Texas A&M University. Cựu binh US Marine Corps. Sinh ra ở Texas, lớn lên hai bên biên giới Mỹ–Mexico.',
    bullets: [
      {
        heading: 'Active & past portfolio',
        items: [
          'Class-A developments tại Brownsville, Weslaco, San Juan, Harlingen, Pharr, Edinburg, Laredo',
          'Tenants: Olive Garden, Longhorn Steakhouse, AT&T, T-Mobile, Sprint, Panda Express, Dunkin Donuts, McAlister\'s Deli',
          '320-unit apartment complex tại Weslaco (đã sở hữu)',
          '168-unit + 275-unit multi-family đang lên kế hoạch tại Pharr & Edinburg',
          'Single-family developments quy mô 100+ acres: Water\'s Edge (Harlingen), Pecan Grove (Weslaco)',
        ],
      },
    ],
    interest:
      'Mission: "Building a better Valley." Quan tâm: vật liệu cho multi-family và retail Class-A quy mô lớn.',
    initials: 'RR',
  },
  {
    name: 'Mick Hawton',
    role: 'Partner, Headwater (Real Estate Developer) | Bắc Mỹ',
    intro:
      '30+ năm kinh nghiệm trong phát triển kinh doanh và vận hành. Background trải dài qua bất động sản thương mại, leadership development, capital markets, group health insurance và công nghệ. Mang góc nhìn toàn diện từ phát triển dự án đến chiến lược tài chính.',
    bullets: [
      {
        heading: 'Track record & vai trò',
        items: [
          'Partner & cựu Chief Strategy Officer tại Headwater — phát triển BĐS thương mại đầu cuối',
          'Vice President, Capital Markets tại Avison Young (Canada)',
          'Vice President, Operations tại Trig Life Services',
          'Managing Principal tại OneDigital — employee benefits quy mô lớn',
          'Founder Roco Racing và Hawton Print Management',
        ],
      },
      {
        heading: 'Học vấn',
        items: [
          'Master of Public Affairs — Humphrey School of Public Affairs',
          'Bachelor of Arts — University of Minnesota',
        ],
      },
    ],
    interest:
      'Quan tâm: vật liệu cho commercial real estate development, góc nhìn capital markets về chuỗi cung ứng & long-term supply partnership.',
    initials: 'MH',
  },
];

function BuyerCard({ buyer, index }: { buyer: Buyer; index: number }) {
  return (
    <div
      className="relative bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle
                 hover:border-brand-gold/30 transition-colors flex flex-col gap-6"
    >
      <div className="absolute top-6 right-8 text-[36px] font-display text-gradient-gold leading-none font-medium opacity-70">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex items-start gap-4 pr-12">
        <div
          className="w-16 h-16 rounded-full border border-brand-gold/40
                     bg-gradient-to-br from-bg-card-hover to-bg-alt
                     flex items-center justify-center shrink-0
                     font-display text-brand-gold text-xl"
        >
          {buyer.initials}
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-serif text-text-heading leading-snug mb-1">
            {buyer.name}
          </h3>
          <p className="text-[11px] text-brand-gold uppercase tracking-[0.15em] leading-snug">
            {buyer.role}
          </p>
        </div>
      </div>

      <p className="text-base text-text-body font-light leading-relaxed">{buyer.intro}</p>

      <div className="flex flex-col gap-5">
        {buyer.bullets.map((group) => (
          <div key={group.heading}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted font-semibold mb-3">
              {group.heading}
            </p>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-body leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5 border-t border-border-subtle">
        <p className="text-xs lg:text-sm text-text-muted italic leading-relaxed">
          {buyer.interest}
        </p>
      </div>
    </div>
  );
}

export function Buyers() {
  return (
    <Section
      id="doan-buyers"
      eyebrow="Đoàn buyers chiến lược"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Năm nhà phát triển BĐS hàng đầu —{' '}
        <em className="font-serif italic text-gradient-gold">cùng một chuyến đi</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Quý Nhà máy không gặp 1 khách hàng. Quý vị gặp một nhóm buyers với{' '}
        <span className="text-text-heading font-normal">
          combined active pipeline trên $500 triệu USD
        </span>{' '}
        — đang xây dựng, đang thiết kế, đang phát triển ở Mỹ và Bắc Mỹ ngay tại thời điểm này. Mỗi
        người mang theo một profile dự án riêng: từ luxury custom home, multi-family 320-unit,
        retail Class-A, đến commercial development & capital markets advisory.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUYERS.map((b, i) => (
          <BuyerCard key={b.name} buyer={b} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center gap-3">
          <p className="text-3xl md:text-4xl lg:text-5xl font-display text-gradient-gold leading-none">
            Combined pipeline: $500M+
          </p>
          <p className="text-sm lg:text-base text-text-muted italic font-serif">
            Luxury custom homes • Multi-family • Retail Class-A • Commercial development • Capital
            markets advisory
          </p>
        </div>
      </div>
    </Section>
  );
}
