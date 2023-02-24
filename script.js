// var tag = "New"

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + prependZero(index + 1) + '</span>';
    }
  },
});

function prependZero(number) {
  let returnNumber = (number.toString() < 10) ? 0 + number.toString() : number.toString();
  return returnNumber;
}

var config = document.querySelector('.mixitup');
var mixer = mixitup(config);

// document.querySelector('.tag').innerHTML = tag;


var toggle = document.querySelector('#hamburger-button');
toggle.addEventListener("click", toggleMenue)


function toggleMenue() {
  let menu = document.querySelector("#mobile-menu");
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }
