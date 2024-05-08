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

  containerOne.innerHTML = html;

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


