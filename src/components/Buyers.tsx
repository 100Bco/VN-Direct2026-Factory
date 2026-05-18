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
    role: 'Nhà sáng lập kiêm CEO, LT Commercial Group | Đại diện chính thức của 100B tại Texas',
    intro:
      'Hơn 22 năm kinh nghiệm trong lĩnh vực bất động sản thương mại Texas. Trực tiếp dẫn dắt các dự án phát triển văn phòng, mặt bằng bán lẻ và nhà ở khắp bang.',
    bullets: [
      {
        heading: 'Thành tích tiêu biểu',
        items: [
          '55 triệu đô la dự án xây dựng mới',
          'Hơn 250 triệu đô la thương vụ mua bán và sáp nhập',
          'Hàng trăm tài sản văn phòng, bán lẻ, công nghiệp và nhà ở',
        ],
      },
      {
        heading: 'Ghi nhận',
        items: [
          'Chủ tịch Hiệp hội Bất động sản Châu Á Mỹ tại Austin (2020)',
          'Chủ tịch Hội đồng Phát triển Kinh tế Manor',
          'Giải thưởng Austin Under 40 — hạng mục Bất động sản (2021)',
          'Trang bìa tạp chí Austin Woman (tháng 5 năm 2023)',
          'Giải thưởng Doanh nghiệp Nổi bật — Phòng Thương mại Châu Á (2019)',
        ],
      },
    ],
    interest:
      'Phụ trách kết nối nhà máy Việt Nam với thị trường Texas trong lĩnh vực vật liệu xây dựng và nội thất.',
    initials: 'LT',
  },
  {
    name: 'Michael Hough',
    role: 'Tổng thầu xây dựng — Austin, Texas',
    intro:
      '30 năm kinh nghiệm trong ngành xây dựng. Khởi đầu từ cải tạo nhà ở, mở rộng sang xây mới nhà ở đặt riêng, hiện tập trung vào khu căn hộ thuế tín dụng và các dự án do Bộ Gia cư và Phát triển Đô thị Hoa Kỳ tài trợ.',
    bullets: [
      {
        heading: 'Quy mô dự án',
        items: [
          'Từ 10 đến 24 triệu đô la mỗi công trình',
          'Thị trường: Corpus Christi • Houston • Austin • San Antonio',
          'Chuyên: khu căn hộ thuế tín dụng, dự án nhà ở do Bộ Gia cư Hoa Kỳ tài trợ',
        ],
      },
    ],
    interest:
      'Vật liệu xây dựng số lượng lớn, đáp ứng tiêu chuẩn kỹ thuật và quy định địa phương, chuỗi cung ứng ổn định cho dự án quy mô.',
    initials: 'MH',
  },
  {
    name: 'Kameron Schram',
    role: 'Chủ sở hữu kiêm Nhà sáng lập, Cleo Builders — Đơn vị xây dựng nhà ở cao cấp đặt riêng tại Texas',
    intro:
      'Chuyên về nhà ở cao cấp theo đặt hàng. Tập trung vào tay nghề thủ công, tinh tế trong thiết kế và dấu ấn riêng biệt cho từng khách hàng.',
    bullets: [
      {
        heading: 'Danh mục đang triển khai (15 triệu đô la)',
        items: [
          '1 dự án 9 căn hộ đang xây dựng',
          '1 nhà ở đặt riêng đang xây',
          '4 nhà ở đặt riêng đang trong giai đoạn thiết kế (2 – 3,2 triệu đô la mỗi căn)',
          '1 dự án hoàn thiện nội thất thương mại đang lập kế hoạch',
          '1 nhà ở cá nhân đang thiết kế',
        ],
      },
    ],
    interest:
      'Đối tác nhà máy lâu dài với cam kết nhất quán về chất lượng và sản phẩm độc đáo phục vụ phân khúc cao cấp.',
    initials: 'KS',
  },
  {
    name: 'Ricardo Rubiano',
    role: 'Nhà phát triển bất động sản — Thung lũng Rio Grande, Texas | Năm thế hệ làm bất động sản',
    intro:
      'Hơn 23 năm kinh nghiệm. Cựu sinh viên Học viện Hải quân Hoa Kỳ và Đại học Texas A&M. Cựu sĩ quan Thủy quân Lục chiến Hoa Kỳ. Sinh ra và lớn lên tại vùng biên giới Mỹ — Mexico.',
    bullets: [
      {
        heading: 'Danh mục tiêu biểu',
        items: [
          'Các dự án thương mại hạng A tại Brownsville, Weslaco, San Juan, Harlingen, Pharr, Edinburg, Laredo',
          'Khách thuê: Olive Garden, AT&T, T-Mobile, Panda Express',
          'Khu căn hộ 320 căn tại Weslaco (đã sở hữu)',
          'Các dự án 168 và 275 căn đang lên kế hoạch tại Pharr và Edinburg',
          'Các dự án nhà ở quy mô trên 100 mẫu Anh',
        ],
      },
    ],
    interest:
      'Vật liệu xây dựng cho các dự án căn hộ và mặt bằng thương mại hạng A quy mô lớn.',
    initials: 'RR',
  },
  {
    name: 'Mick Hawton',
    role: 'Đối tác điều hành, Headwater | Nhà phát triển bất động sản — Bắc Mỹ',
    intro:
      'Hơn 30 năm kinh nghiệm trong phát triển kinh doanh và vận hành. Nền tảng chuyên môn trải rộng qua bất động sản thương mại, phát triển lãnh đạo, thị trường vốn, bảo hiểm sức khỏe doanh nghiệp và công nghệ.',
    bullets: [
      {
        heading: 'Vai trò tiêu biểu',
        items: [
          'Đối tác kiêm cựu Giám đốc Chiến lược tại Headwater',
          'Phó Chủ tịch Thị trường Vốn tại Avison Young (Canada)',
          'Phó Chủ tịch Vận hành tại Trig Life Services',
          'Giám đốc điều hành tại OneDigital',
        ],
      },
    ],
    interest:
      'Vật liệu cho các dự án bất động sản thương mại; góc nhìn thị trường vốn về chuỗi cung ứng và hợp tác cung cấp dài hạn.',
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
      id="doan-khach-mua"
      eyebrow="Đoàn khách mua chiến lược"
      className="bg-bg-alt border-y border-border-subtle"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Năm nhà phát triển bất động sản hàng đầu —{' '}
        <em className="font-serif italic text-gradient-gold">cùng một chuyến đi</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Quý vị sẽ ngồi trực tiếp với một nhóm nhà phát triển có{' '}
        <span className="text-text-heading font-normal">
          tổng danh mục dự án đang triển khai vượt 500 triệu đô la Mỹ
        </span>{' '}
        — đang xây dựng, đang thiết kế, đang phát triển tại Hoa Kỳ và Bắc Mỹ ngay tại thời điểm này.
        Mỗi người mang đến một hồ sơ dự án khác biệt: từ nhà ở cao cấp đặt riêng, khu căn hộ 320
        căn, mặt bằng thương mại hạng A, đến phát triển bất động sản thương mại và tư vấn thị
        trường vốn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUYERS.map((b, i) => (
          <BuyerCard key={b.name} buyer={b} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center max-w-4xl mx-auto">
        <p className="text-3xl md:text-4xl lg:text-5xl font-display text-gradient-gold leading-none mb-4">
          Tổng danh mục đang triển khai: hơn $500M
        </p>
        <p className="text-sm lg:text-base text-text-muted italic font-serif leading-relaxed">
          Nhà ở cao cấp đặt riêng • Khu căn hộ • Mặt bằng thương mại hạng A • Phát triển bất động
          sản thương mại • Tư vấn thị trường vốn
        </p>
      </div>
    </Section>
  );
}
