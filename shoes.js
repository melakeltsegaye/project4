const wrapper = document.querySelector(".sliderwraper");
const nextarrow = document.querySelectorAll(".arrow");
const barrow = document.querySelectorAll(".backarrow");
const cartbutton = document.querySelectorAll(".buybutton");
const barsa = document.getElementById("bar");
const dropdown = document.querySelector(".dropdown");
const li = document.querySelector(".li");



barsa.addEventListener("click", ()=> {
    dropdown.classList.toggle('action');
})

const product =[
    {
        id: 1,
        title: "AIR FORCE",
        price: 135,
        colors: [
            {
                code: "black",
                img: "./img/airforceblack.png",
            },
            {
                code: "blue",
                img: "./img/airforceblue.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 230,
        colors: [
            {
                code: "green",
                img: "./img/jordan1greenremovebgpreview.png",
            }, 
            {
                code: "orange",
                img: "./img/airjordan1orangeremovebgpreview.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZERS",
        price: 180,
        colors: [
            {
                code: "black",
                img: "img/blazersblackremovebgpreview.png",
            },
            {
                code: "white",
                img: "./img/blazerswhiteremovebgpreview.png",
            },
        ],
    },
    {
        id: 4,
        title: "NIKE MAX",
        price: 400,
        colors: [
            {
                code: "black",
                img: "./img/nikemax270blackremovebgpreview.png",
            },
            {
                code: "white",
                img: "./img/nikemax270whiteremovebgpreview.png",
            },
        ]
    }
];

let choosenproduct = product[0];

const currentproductimg = document.querySelector('.productimg');
const currentproductTitle = document.querySelector('.prodcttitle');
const currentproductPricr = document.querySelector('.productprice')
const currentproductColor = document.querySelectorAll('.color');
const currentproductSize = document.querySelectorAll('.size');


nextarrow.forEach((item, index)=> {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * (index + 1)}vw)`;

        choosenproduct = product[index + 1];

        currentproductTitle.textContent = choosenproduct.title;
        currentproductPricr.textContent = '$' + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;

        currentproductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });

    });
});

barrow.forEach((item, index)=>{
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${100 * ((1 - index)-1)}vw)`;


        choosenproduct = product[index  ];

        currentproductTitle.textContent = choosenproduct.title;
        currentproductPricr.textContent = '$' + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;

        currentproductColor.forEach((color, index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });
      
    });
});




cartbutton.forEach((button, index) => {
           button.addEventListener("click", () => {
            currentproductTitle.textContent = product[index].title;
            currentproductPricr.textContent = '$' + product[index].price;
            currentproductimg.src = product[index].colors[0].img;

            choosenproduct = product[index  ];

            currentproductColor.forEach((color, index) => {
                color.style.backgroundColor = choosenproduct.colors[index].code;
            });
           })
        })


// window.addEventListener("resize", () => {
//     if (window.innerWidth <= 750) {
//       cartbutton.forEach((button, index) => {
//         button.addEventListener("click", () => {
//            cartbutton[3] = product[index];
  
//           currentproductTitle.textContent = cartbutton[index].title;
//           currentproductPricr.textContent = '$' + cartbutton[index].price;
//           currentproductimg.src = cartbutton[3].colors[0].img;
  
//           currentproductColor.forEach((color, index) => {
//             color.style.backgroundColor = cartbutton[index].colors[index].code;
//           });
//         });
//       });
//     }
//   });

currentproductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentproductimg.src = choosenproduct.colors[index].img;
    });
});

currentproductSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentproductSize.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
})


const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click", ()=>{
    payment.style.display = "none";
});




window.addEventListener("resize", () => {
    location.reload();
  });