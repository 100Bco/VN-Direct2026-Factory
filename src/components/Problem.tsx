import { Section } from './Section';

const PAINS = [
  {
    n: '01',
    title: 'Lợi nhuận bị nén 30–50%',
    body: 'Trung gian ăn vào từng lớp. Nhà máy chịu áp lực hạ giá, trong khi khách hàng cuối vẫn phải trả mức cao.',
  },
  {
    n: '02',
    title: 'Thương hiệu không vượt được biên giới',
    body: 'Sản phẩm "Made in Vietnam" bị dán nhãn lại hoặc khuất sau thương hiệu nhập khẩu. Năng lực sản xuất thực sự không được ghi nhận đúng mức.',
  },
  {
    n: '03',
    title: 'Quan hệ một chiều, thiếu bền vững',
    body: 'Phần lớn đơn hàng xuất khẩu hiện tại chỉ là giao dịch đơn lẻ. Không có luồng dự án dài hạn để tối ưu sản xuất, đầu tư nghiên cứu phát triển hay lập kế hoạch năng lực.',
  },
];

export function Problem() {
  return (
    <Section id="van-de" eyebrow="Vấn đề">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mb-6
                   max-w-4xl"
      >
        Sản phẩm chất lượng — nhưng đang{' '}
        <em className="italic text-gradient-gold">bán dưới giá trị thực</em>.
      </h2>

      <p className="text-base md:text-lg text-text-body font-light leading-relaxed max-w-3xl mb-14">
        Các nhà máy Việt Nam đang sản xuất vật liệu xây dựng và nội thất đạt chuẩn quốc tế. Nhưng
        khi xuất khẩu, lợi nhuận bị bào mòn qua ba đến bốn lớp trung gian — từ nhà phân phối, nhà
        bán sỉ, nhà bán lẻ, đến nhà thầu — trước khi đến tay người mua cuối cùng. Thương hiệu nhà
        máy không bao giờ chạm được đến người ra quyết định: các nhà phát triển bất động sản, tổng
        thầu, kiến trúc sư.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {PAINS.map((p) => (
          <div
            key={p.n}
            className="relative bg-bg-card rounded-2xl p-7 lg:p-8 border border-border-subtle
                       hover:border-brand-gold/40 hover:bg-bg-card-hover transition-colors
                       flex flex-col gap-4"
          >
            <div className="text-4xl lg:text-5xl font-display text-gradient-gold leading-none font-medium">
              {p.n}
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-text-heading leading-snug">
              {p.title}
            </h3>
            <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-base md:text-lg italic text-text-heading font-light leading-relaxed max-w-3xl">
        Chúng tôi giải quyết bằng cách loại bỏ toàn bộ các lớp trung gian — đưa nhà mua hàng và nhà
        máy ngồi cùng một bàn, ngay tại xưởng sản xuất.
      </p>
    </Section>
  );
}
