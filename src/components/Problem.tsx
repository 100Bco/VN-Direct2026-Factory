import { D2CAnimation } from './D2CAnimation';

export function Problem() {
  return (
    <section id="thuc-trang" className="py-20 lg:py-28 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-snug mb-8">
            Thoát bẫy gia công.
            <br />
            Làm chủ{' '}
            <em className="font-serif italic text-gradient-gold">
              con đường ra thị trường
            </em>
            .
          </h2>

          <p className="text-base lg:text-lg text-text-heading font-light leading-relaxed mb-6">
            Nhiều nhà máy Việt sản xuất tốt nhưng mãi không lớn được. Lý do không phải chất lượng
            sản phẩm — mà là mô hình phân phối đang nhốt họ trong vai trò gia công không lối thoát:
            không thương hiệu, không dữ liệu khách hàng, không kiểm soát được giá bán cuối.
          </p>

          <blockquote className="my-6 max-w-2xl">
            <p className="text-lg lg:text-xl text-text-heading font-serif italic font-light leading-relaxed">
              &ldquo;Mỗi lớp trung gian không chỉ lấy đi 15 đến 30% biên lợi nhuận. Nó cắt đứt mối
              quan hệ với người mua và khiến nhà máy trở nên vô hình trên thị trường.&rdquo;
            </p>
          </blockquote>

          <p className="text-sm lg:text-base text-text-body font-light leading-relaxed mb-4">
            D2C đã thay thế hoàn toàn mô hình phân phối nhiều lớp trong FMCG. Giờ đến lượt vật liệu
            xây dựng và nội thất. Đây là xu thế không thể đảo ngược.
          </p>

          <p className="text-sm lg:text-base text-text-body font-light leading-relaxed">
            Trong bối cảnh địa chính trị biến động, chuỗi cung ứng toàn cầu đang tái cơ cấu. Nhà
            máy phụ thuộc vào nhà phân phối nước ngoài không kiểm soát được rủi ro. Nhà máy tự xây
            kênh D2C thì có.
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
