import { D2CAnimation } from './D2CAnimation';

export function Problem() {
  return (
    <section id="van-de" className="py-20 lg:py-28 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-6 max-w-3xl">
            Sản phẩm chất lượng
            <br />
            <span className="text-gradient-gold italic">
              nhưng đang bị bán rẻ hơn giá trị thật.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-2xl">
            Trung Quốc đã nắm thế chủ động trong D2C và logistics. Mô hình phân phối truyền thống
            đang dần bị thay thế — và biên lợi nhuận của các nhà máy Việt cũng bị bào mòn theo.
            Mỗi tầng trung gian lấy đi 15–30% giá trị.
          </p>
        </div>

        {/* Animation Infographic — Traditional flow + stats */}
        <div className="bg-bg-alt/60 border border-border-subtle rounded-3xl p-6 md:p-8 lg:p-12">
          <D2CAnimation />
        </div>
      </div>
    </section>
  );
}
