const listings = [
  {
    type: "All",
    url: "../hinh/Gallery/All1.jpg",
  },
  {
    type: "All",
    url: "../hinh/Gallery/All2.jpg",
  },
  {
    type: "All",
    url: "../hinh/Gallery/All3.jpg",
  },
  {
    type: "All",
    url: "../hinh/Gallery/All4.jpg",
  },
  {
    type: "All",
    url: "../hinh/Gallery/All5.jpg",
  },
  {
    type: "All",
    url: "../hinh/Gallery/All6.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_1.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_2.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_3.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_4.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_5.jpg",
  },
  {
    type: "chocolate",
    url: "../hinh/Gallery/socola_6.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_1.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_2.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_3.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_4.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_5.jpg",
  },
  {
    type: "vanila",
    url: "../hinh/Gallery/vani_6.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_1.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_2.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_3.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_4.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_5.jpg",
  },
  {
    type: "butter",
    url: "../hinh/Gallery/hanhnhan_6.jpg",
  },

];

const container = document.querySelector(".grid-container");
const listBtn = document.querySelectorAll(".list-type > li > button");
let data = [];
let selectType = "all";

listBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectType = item.textContent.toLocaleLowerCase();
    render();
  });
});

const render = () => {
  let html = "";
  let data = [];
  switch (selectType) {
    case "all":
      data = listings;
      break;
    case "butter":
      data = listings.filter((item) => item.type === selectType);
      break;
    case "vanila":
      data = listings.filter((item) => item.type === selectType);
      break;
    case "chocolate":
      data = listings.filter((item) => item.type === selectType);
      break;
    default:
      data = listings;
      break;
  }
  data.forEach((item) => {
    html += `
        <article id="3685" class="location-listing">
            <a class="location-title" href="#">
            </a>
            <div class="location-border">
                <div class="item">
                <i class="fa-solid fa-plus" style="color: #000"></i></div>
            </div>
            <div class="location-image">
                <a href="#">
                    <img
                        src=${item.url}
                        alt="san francisco"
                    />
                </a>
            </div>
        </article>
        `;
  });
  container.innerHTML = html;
};

render();
