const services = [
    {
      id: 1,
      image: "../hinh/anh_kem/anh_kem/oreo.jpg",
      title: "Sản phẩm chất lượng",
      content:"Cung cấp nhiều loại kem phong phú và vị kem đa dạng được làm từ nguyên liệu tự nhiên, đảm bảo an toàn",
    },
    {
        id: 2,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Đặt bàn online",
        content:"Khách hàng có thể đặt bàn qua website, ứng dụng di động hoặc gọi điện thoại thật thuận tiện.",
      },
      {
        id: 3,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Dịch vụ kem theo yêu cầu",
        content:"Chúng tôi sẽ làm kem theo yêu cầu, khách hàng có thể tự sáng tạo hương vị kem yêu thích của mình.",
      },
      {
        id: 4,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Dịch vụ tổ chức sự kiện",
        content:"Chúng tôi có cung cấp dịch vụ tổ chức sự kiện, tiệc kem cho các doanh nghiệp, trường học,...",
      },
      {
        id: 5,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Dịch vụ thanh toán",
        content:"Cửa hàng chúng tôi có hỗ trợ thanh toán trực tuyến bằng nhiều phương thức: ví điện tử, thẻ ngân hàng,...",
      },
      {
        id: 6,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Chương trình khuyến mãi hấp dẫn",
        content:"Có các chương trình khuyến mãi, giảm giá, tích điểm đổi quà cho khách hàng.",
      },
      {
        id: 7,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Combo và set kem tiết kiệm",
        content:"Bạn có thể mua các combo, set kem với giá ưu đãi để tiết kiệm chi phí.)",
      },
      {
        id: 8,
        image: "../hinh/anh_kem/anh_kem/oreo.jpg",
        title: "Dịch vụ khác",
        content:"Cung cấp kem cho các sự kiện, tiệc sinh nhật, hội nghị,...Thiết kế hộp quà kem độc đáo, sang trọng.",
      },
  ];

const containerOne = document.getElementById("list-service-one");

const renderService = () => {
    let html = "";
    services.forEach((service, index) => {
        html += `<div class="column">
                    <div class="bestservice" >
                        <img src="${service.image}" alt="">
                        <h2>${service.title}</h2>
                        <p>${service.content}</p>
                    </div>
                </div>`;
      });
      containerOne.innerHTML = html;
};

renderService();
