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

const containerOne = document.getElementById("list-service-one");

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

renderService();
