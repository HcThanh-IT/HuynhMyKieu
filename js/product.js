const products = [
  {
    id: 1,
    name: "Vanilla Ice Cream",
    price: 99,
    image: `../hinh/anh_kem/anh_kem/product2.png`,
  },
  {
    id: 2,
    name: "Coconut Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product3.png",
  },
  {
    id: 3,
    name: "Flower Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product1.png",
  },
  {
    id: 4,
    name: "Matcha Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product10.png",
  },
  {
    id: 5,
    name: "Mingles Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product8.png",
  },
  {
    id: 6,
    name: "Blue Moon Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product4.png",
  },
  {
    id: 7,
    name: "Peanut Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product3.png",
  },
  {
    id: 8,
    name: "Strawberry Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/strawberryIcecream.jpg",
  },
  {
    id: 9,
    name: "Cookie Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product5.png",
  },
  {
    id: 10,
    name: "Candy Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product6.png",
  },
  {
    id: 11,
    name: "Homemade Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product11.png",
  },
  {
    id: 12,
    name: "Manila Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product9.png",
  },
  {
    id: 13,
    name: "Cookies Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/CookiesIceCream.jpg",
  },
  {
    id: 14,
    name: "Chocolates Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/Chocolate_Icecream.jpg",
  },
  {
    id: 15,
    name: "Churn Cherry Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/Nochuncherry.jpg",
  },
  {
    id: 16,
    name: "Oreo Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/oreo.jpg",
  },
];

const productsTwo = [
  {
    id: 16,
    name: "Oreo Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/oreo.jpg",
  },
  {
    id: 1,
    name: "Vanilla Ice Cream",
    price: 99,
    image: `../hinh/anh_kem/anh_kem/product2.png`,
  },
  {
    id: 8,
    name: "Strawberry Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/strawberryIcecream.jpg",
  },
  {
    id: 14,
    name: "Chocolates Ice Cream",
    price: 99,
    image: "../hinh/anh_kem/anh_kem/product6.png",
  },
];
const containerOne = document.getElementById("list-product-one");
const containerTwo = document.getElementById("list-product-two");

const renderProduct = () => {
  let html = "";
  let productsToShow = products.slice(0, 8); // Chỉ hiển thị 8 sản phẩm ban đầu

  productsToShow.forEach((product, index) => {
    html += `<div class="product">
                  <div class="product-title">
                      <span><b>$${product.price}</b></span>
                  </div>
                  <div class="product-img">
                      <img src=${product.image} alt="" />
                  </div>
                  <div class="product-name">
                      <b>${product.name}</b>
                  </div>
                  <div class="btn">
                      <button class="button button-xanh">Order Now</button>
                      <span class="order-now">
                        <div class="hearts" data-product-index="${index}">
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                        </div>
                      </span>
                  </div>
              </div>`;
  });

  let html2 = "";
  productsTwo.forEach((product, index) => {
    html2 += `<div class="product">
                  <div class="product-title">
                      <span><b>$${product.price}</b></span>
                  </div>
                  <div class="product-img">
                      <img src=${product.image} alt="" />
                  </div>
                  <div class="product-name">
                      <b>${product.name}</b>
                  </div>
                  <div class="btn">
                      <button class="button button-xanh">Order Now</button>
                      <span class="order-now">
                        <div class="hearts" data-product-index="${index}">
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                        </div>
                      </span>
                  </div>
              </div>`;
  });

  containerOne.innerHTML = html;
  containerTwo.innerHTML = html2;

  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      const isLogin = JSON.parse(localStorage.getItem("isLogin"));
      if (!isLogin) {
        alert("Vui lòng đăng nhập");
        return;
      }
      const productIndex = heart.parentNode.getAttribute("data-product-index");
      const productHearts = document.querySelectorAll(
        `.hearts[data-product-index="${productIndex}"] .heart`
      );
      const heartIndex = Array.from(productHearts).indexOf(heart);

      heart.classList.toggle("fa-solid");

      for (let i = 0; i <= heartIndex; i++) {
        const currentHeart = productHearts[i];
        currentHeart.setAttribute("data-selected", "true");
        currentHeart.classList.add("fa-solid");
      }

      for (let i = heartIndex + 1; i < productHearts.length; i++) {
        const currentHeart = productHearts[i];
        currentHeart.setAttribute("data-selected", "false");
        currentHeart.classList.remove("fa-solid");
      }
    });
  });
  const loadMoreBtn = document.getElementById("allProduct");
  loadMoreBtn.addEventListener("click", () => {
    html = "";
    products.forEach((product, index) => {
      html += `<div class="product">
                  <div class="product-title">
                      <span><b>$${product.price}</b></span>
                  </div>
                  <div class="product-img">
                      <img src=${product.image} alt="" />
                  </div>
                  <div class="product-name">
                      <b>${product.name}</b>
                  </div>
                  <div class="btn">
                      <button class="button button-xanh">Order Now</button>
                      <span class="order-now">
                        <div class="hearts" data-product-index="${index}">
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                            <i class="fa-regular fa-heart heart" style="cursor: pointer;" data-product="${product.name}" data-selected="false" ></i>
                        </div>
                      </span>
                  </div>
              </div>`;
    });
    containerOne.innerHTML = html;
    loadMoreBtn.remove(); // Loại bỏ nút "Xem thêm" sau khi đã hiển thị tất cả sản phẩm
  }); 
};

renderProduct();
