import { Section } from './Section';

const BENEFITS = [
  {
    n: '01',
    title: 'Thăm quan thực địa tại nhà máy',
    body: 'Không phải gặp gỡ trong gian hàng hội chợ. Các nhà phát triển đến tận xưởng sản xuất — tận mắt kiểm tra dây chuyền, quy trình kiểm soát chất lượng, gặp trực tiếp đội ngũ kỹ thuật.',
  },
  {
    n: '02',
    title: 'Trao đổi riêng với từng nhà phát triển',
    body: 'Mỗi nhà phát triển trình bày trực tiếp nhu cầu của dự án họ. Quý vị nghe trực tiếp về thông số kỹ thuật, sản lượng và tiến độ — không qua bảng yêu cầu báo giá.',
  },
  {
    n: '03',
    title: 'Khách hàng tiềm năng đã được thẩm định',
    body: 'Các nhà phát triển trong đoàn đều có danh mục dự án đang triển khai, ngân sách đã phân bổ và đang trong giai đoạn ra quyết định mua trong vòng 6 đến 18 tháng tới.',
  },
  {
    n: '04',
    title: 'Kết nối trực tiếp từ nhà máy đến người ra quyết định',
    body: 'Không qua đại lý, không qua nhà phân phối, không qua môi giới. Quan hệ trực tiếp giữa nhà máy và người thực sự ra quyết định mua hàng.',
  },
  {
    n: '05',
    title: 'Nền tảng hợp tác dài hạn 3 – 5 năm',
    body: 'Mỗi nhà phát triển trong đoàn đều tìm kiếm đối tác lâu dài để đảm bảo tính nhất quán trong chuỗi cung ứng — không phải giao dịch đơn lẻ.',
  },
  {
    n: '06',
    title: 'Hiện diện truyền thông',
    body: 'Nhà máy được giới thiệu trên các kênh truyền thông của 100B, LT Commercial Group và trong bộ tài liệu nghiên cứu điển hình của chuỗi Build Better Series.',
  },
];

export function Benefits() {
  return (
    <Section id="loi-ich" eyebrow="Lợi ích">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-14
                   max-w-4xl"
      >
        Khi nhà máy của Quý vị{' '}
        <em className="font-serif italic text-gradient-gold">có tên trong chương trình</em>.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {BENEFITS.map((b) => (
          <div
            key={b.n}
            className="group bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 hover:bg-bg-card-hover transition-colors
                       flex flex-col gap-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display text-gradient-gold leading-none font-medium">
                {b.n}
              </span>
              <span className="h-px flex-1 bg-border-subtle group-hover:bg-brand-gold/30 transition-colors" />
            </div>
            <h3 className="text-lg lg:text-xl font-serif text-text-heading leading-snug">
              {b.title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
