import { Section } from './Section';

const PAINS = [
  {
    n: '01',
    title: 'Margin bị nén 30–50%',
    body: 'Trung gian ăn 3–4 lớp. Nhà máy chịu áp lực giảm giá, nhưng end customer vẫn trả giá cao.',
  },
  {
    n: '02',
    title: 'Brand không vượt được biên giới',
    body: 'Sản phẩm "Made in Vietnam" bị tái nhãn hoặc ẩn dưới thương hiệu nhập khẩu. Năng lực sản xuất không được công nhận đúng giá trị.',
  },
  {
    n: '03',
    title: 'Quan hệ một chiều, ngắn hạn',
    body: 'Đa số deal xuất khẩu hiện tại là single-batch order. Không có pipeline dự án dài hạn để tối ưu sản xuất, đầu tư R&D, planning capacity.',
  },
];

export function Problem() {
  return (
    <Section id="van-de" eyebrow="Vấn đề">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6
                   max-w-4xl"
      >
        Sản phẩm chất lượng — nhưng đang{' '}
        <em className="font-serif italic text-gradient-gold">bán dưới giá trị</em>.
      </h2>

      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Nhà máy Việt Nam đang sản xuất ra vật liệu xây dựng & nội thất đạt chuẩn quốc tế. Nhưng khi
        xuất khẩu, biên lợi nhuận bị nén qua 3–4 lớp trung gian: distributors → wholesalers →
        retailers → contractors. Thương hiệu nhà máy không đến được tay người ra quyết định cuối —
        các nhà phát triển BĐS, contractor, kiến trúc sư.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {PAINS.map((p) => (
          <div
            key={p.n}
            className="relative bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle
                       hover:border-brand-gold/40 hover:bg-bg-card-hover transition-colors"
          >
            <div className="text-[40px] font-display text-gradient-gold leading-none mb-6 font-medium">
              {p.n}
            </div>
            <h3 className="text-xl lg:text-2xl font-serif text-text-heading leading-snug mb-3">
              {p.title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-lg lg:text-xl font-serif italic text-text-heading leading-relaxed max-w-3xl">
        Chúng tôi giải quyết bằng cách lược bỏ tất cả các lớp giữa — đưa buyer và factory ngồi cùng
        bàn, ngay tại nhà máy.
      </p>
    </Section>
  );
}
