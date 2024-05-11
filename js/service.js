const services = [
    {
      id: 1,
      icon: "fa-solid fa-ice-cream",
      title: "Quality products",
      content:"Providing a variety of ice creams and diverse ice cream flavors made from natural ingredients, ensuring safety.",
    },
    {
        id: 2,
        icon: "fa-solid fa-phone-volume",
        title: "Book a table online",
        content:"Customers can conveniently book a table via the website, mobile application or phone call.",
      },
      {
        id: 3,
        icon: "fa-solid fa-bell",
        title: "Ice cream service on request",
        content:"We will make ice cream on request, customers can create their own favorite ice cream flavor.",
      },
      {
        id: 4,
        icon: "fa-regular fa-calendar-days",
        title: "Event organization services",
        content:"We provide event organization services, ice cream parties for businesses, schools,...",
      },
      {
        id: 5,
        icon: "fa-solid fa-credit-card",
        title: "Payment service",
        content:"Our store supports online payment by many methods: e-wallet, bank card,...",
      },
      {
        id: 6,
        icon: "fa-solid fa-bullhorn",
        title: "Attractive promotions",
        content:"There are promotions, discounts, and points to redeem gifts for customers.",
      },
      {
        id: 7,
        icon: "fa-solid fa-gift",
        title: "Other services",
        content:"Providing ice cream for events, birthday parties, conferences,... Unique and luxurious ice cream gift box design.",
      },
      {
        id: 8,
        icon: "fa-solid fa-headset",
        title: "24/7 ice cream service",
        content:"We are committed to serving you anytime, anywhere, constantly meeting your needs.",
      },
  ];
const comments = [
    {
      id: 1,
      content: "The ice cream is absolutely delicious! It's rich, fragrant, and melts in your mouth perfectly. Every scoop of ice cream brings a wonderful taste experience.",
      image: "testimonial-1.jpg",
      name:"Alice",
      profession:"Teacher",
    },
    {
        id: 2,
        content: "The ice cream has a very natural flavor, not too sweet or fatty. I especially like the chocolate ice cream with strawberries.",
        image: "testimonial-2.jpg",
        name:"John",
        profession:"Software Developer",
      },
      {
        id: 3,
        content: "Ice cream has a variety of flavors to choose from, from traditional ice cream flavors like vanilla, chocolate, strawberry to unique ice cream flavors like [name of unique ice cream flavor",
        image: "testimonial-4.jpg",
        name:"Mia San",
        profession:"Mechanical Engineer",
      },
      {
        id: 4,
        content: "Ice cream is made from fresh, quality ingredients. I can feel the freshness in every scoop of ice cream.",
        image: "testimonial-3.jpg",
        name:"David",
        profession:"Sales Representative",
      },
      {
        id: 5,
        content: "The ice cream shop has a beautiful, airy, clean space. The service staff is enthusiastic and attentive.",
        image: "testimonial-1.jpg",
        name:"Mary",
        profession:"Project Manager",
      },
  ];

const containerOne = document.getElementById("list-service-one");
const list_comments = document.getElementById("carousel-container");

const renderService = () => {
    let html = "";
    services.forEach((service, index) => {
        html += `<div class="column">
                    <div class="bestservice" >
                      <span><i class="${service.icon}"></i></span>
                      <h2>${service.title}</h2>
                      <p>${service.content}</p>
                    </div>
                </div>`;
      });
      containerOne.innerHTML = html;
};



const renderComment = () => {
  let html = "";
  comments.forEach((comment, index) => {
      html += `
      <div class="carousel-item">
        <span><i class="fa-solid fa-comments"></i></span>
        <div class="content">
          <p>${comment.content}</p>
        </div>
        <div class="infors">
          <img src="../hinh/comment/${comment.image}" alt="">
          <div class="infor">
            <div class="name"><h3>${comment.name}</h3></div>
            <div class="profession"><p>${comment.profession}</p></div>
          </div>
        </div>
      </div>`;
    });
    list_comments.innerHTML = html;
};
renderService();
renderComment();

