import { Section } from './Section';

interface Day {
  date: string;
  dow: string;
  city: string;
  title: string;
  items: string[];
}

interface Block {
  label: string;
  days: Day[];
}

const SCHEDULE: Block[] = [
  {
    label: 'Ho Chi Minh City · 31/5 – 6/6',
    days: [
      {
        date: '31/5',
        dow: 'Thứ Bảy',
        city: 'Ho Chi Minh City',
        title: 'Đón đoàn · Định hướng chuyến đi',
        items: [
          'Đón đoàn tại sân bay Tân Sơn Nhất',
          'Nhận phòng · nghỉ ngơi',
          'Dinner briefing — giới thiệu lịch trình và ngành hàng',
        ],
      },
      {
        date: '1/6',
        dow: 'Chủ Nhật',
        city: 'Ho Chi Minh City',
        title: 'Tham quan nhà máy — Gỗ & Nội thất',
        items: [
          'An Cuong Wood — ván công nghiệp, nội thất gỗ',
          'Phu Tai JSC — đồ nội thất xuất khẩu',
          'Họp tổng kết cuối ngày',
        ],
      },
      {
        date: '2/6',
        dow: 'Thứ Hai',
        city: 'Ho Chi Minh City',
        title: 'Tham quan nhà máy — Sàn & Vật liệu ốp lát',
        items: [
          'Nhà máy sàn SPC / LVT',
          'Nhà máy đá thạch anh & gạch',
          'Working session — đánh giá sản phẩm và thương mại',
        ],
      },
      {
        date: '3/6',
        dow: 'Thứ Ba',
        city: 'Ho Chi Minh City',
        title: 'Tham quan nhà máy — Cửa & Cửa sổ',
        items: [
          'Amy Grupo — cửa & vách kính',
          'Nhà máy cửa uPVC / nhôm',
          '1-1 session giữa buyer và nhà máy',
        ],
      },
      {
        date: '4/6',
        dow: 'Thứ Tư',
        city: 'Ho Chi Minh City',
        title: 'Tham quan nhà máy — Thép & Kim loại',
        items: [
          'Dai Dung — kết cấu thép, nhà tiền chế',
          'Tonmat Group — mái thép & tấm ốp',
          'Họp tổng kết tuần · định hướng Hà Nội',
        ],
      },
      {
        date: '5/6',
        dow: 'Thứ Năm',
        city: 'Ho Chi Minh City',
        title: 'Working day · Thương thảo & Tổng kết HCM',
        items: [
          '1-1 working sessions theo yêu cầu',
          'Tổng kết đánh giá nhà máy HCM',
          'Gala dinner — kết nối đoàn và đối tác',
        ],
      },
      {
        date: '6/6',
        dow: 'Thứ Sáu',
        city: 'Di chuyển',
        title: 'Bay HCM → Hà Nội',
        items: [
          'Chuyến bay buổi sáng',
          'Nhận phòng tại Hà Nội',
          'Briefing chiều — lịch trình Hà Nội',
        ],
      },
    ],
  },
  {
    label: 'Hà Nội · 7/6 – 12/6',
    days: [
      {
        date: '7/6',
        dow: 'Thứ Bảy',
        city: 'Hà Nội',
        title: 'Tham quan nhà máy — Cửa & Cửa sổ cao cấp',
        items: [
          'BM Windows — cửa nhôm, cửa sổ nhập khẩu',
          'Eurowindow — cửa uPVC & kính cao cấp',
          'Working session buổi chiều',
        ],
      },
      {
        date: '8/6',
        dow: 'Chủ Nhật',
        city: 'Hà Nội',
        title: 'Tham quan nhà máy — Gỗ & Tủ bếp',
        items: [
          'AA Corporation — nội thất, tủ bếp xuất khẩu',
          'An Phat Holdings — nhựa kỹ thuật, vật liệu xanh',
          'Họp đánh giá sản phẩm buổi chiều',
        ],
      },
      {
        date: '9/6',
        dow: 'Thứ Hai',
        city: 'Hà Nội',
        title: 'Briefing chiến lược — Hoa Phat Group',
        items: [
          'Briefing Hoa Phat Group — thép, mái tôn, vật liệu xây dựng',
          'Không tham quan xưởng — session trao đổi chiến lược',
          'Buổi chiều: 1-1 thương thảo theo nhà máy',
        ],
      },
      {
        date: '10/6',
        dow: 'Thứ Ba',
        city: 'Hà Nội',
        title: 'Working day · Thương thảo thương mại',
        items: [
          '1-1 sessions — giá, MOQ, điều khoản',
          'Review hồ sơ nhà máy và chứng chỉ',
          'Dự thảo term sheet với các đối tác tiềm năng',
        ],
      },
      {
        date: '11/6',
        dow: 'Thứ Tư',
        city: 'Hà Nội',
        title: 'Working day · Finalize & Ký kết',
        items: [
          'Hoàn thiện điều khoản hợp tác',
          'Ký MOU / LOI với các đối tác đã thống nhất',
          'Closing dinner — toàn bộ đoàn và đối tác nhà máy',
        ],
      },
      {
        date: '12/6',
        dow: 'Thứ Năm',
        city: 'Hà Nội',
        title: 'Ngày cuối · Chia tay & Khởi hành',
        items: [
          'Buổi sáng tự do',
          'Check-out · tiễn đoàn ra sân bay',
          '100B bắt đầu quy trình follow-up sau chuyến đi',
        ],
      },
    ],
  },
];

export function Schedule() {
  return (
    <Section id="lich-trinh" className="!py-16 lg:!py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6 max-w-5xl">
        <span className="font-display text-gradient-gold">31</span> tháng 5 –{' '}
        <span className="font-display text-gradient-gold">12</span> tháng 6
        <br />
        <em className="font-serif italic text-gradient-gold">Ho Chi Minh City → Hà Nội</em>.
      </h2>
      <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed max-w-3xl mb-10">
        Lịch trình chi tiết sẽ được cập nhật và gửi đến nhà máy sau khi xác nhận tham gia.
      </p>

      <div className="rounded-3xl bg-bg-alt/80 border border-border-subtle overflow-hidden">
        {SCHEDULE.map((block, bi) => (
          <div key={block.label}>
            {/* City divider */}
            <div
              className={`bg-bg-card px-6 lg:px-10 py-3 ${
                bi > 0 ? 'border-t border-border-subtle' : ''
              }`}
            >
              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                {block.label}
              </span>
            </div>

            {/* Days in block */}
            {block.days.map((d, di) => (
              <div
                key={d.date}
                className={`grid grid-cols-12 gap-4 lg:gap-6 px-6 lg:px-10 py-5 ${
                  di < block.days.length - 1 || bi < SCHEDULE.length - 1
                    ? 'border-b border-border-subtle/50'
                    : ''
                }`}
              >
                {/* Date column */}
                <div className="col-span-12 md:col-span-3 lg:col-span-2 md:border-r md:border-border-subtle/50 md:pr-4">
                  <p className="font-display text-2xl lg:text-3xl text-gradient-gold leading-none">
                    {d.date}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-text-body font-semibold mt-2">
                    {d.dow}
                  </p>
                </div>

                {/* Content column */}
                <div className="col-span-12 md:col-span-9 lg:col-span-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-gold font-semibold mb-1.5">
                    {d.city}
                  </p>
                  <h3 className="text-base lg:text-lg font-bold font-sans text-text-heading leading-snug mb-3">
                    {d.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-heading font-light leading-relaxed"
                      >
                        <span className="text-brand-gold mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
