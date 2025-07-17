// Click
addEventListener('click', createCircle);

function createCircle(event) {
  var box = document.createElement('div');
  box.className = 'box';
  box.style.left = event.pageX + 'px';
  box.style.top = event.pageY + 'px';
  document.body.appendChild(box);
  box.classList.add("animateIt");
  setTimeout(() => {
    document.body.removeChild(box);
  }, 300);
}


// Hero Background
const hero = document.querySelector(".hero-background");

window.addEventListener("load", function () {
  this.setTimeout(setBackground, 1200)
  function setBackground() {
    hero.style.opacity = 1;
  }
})


// ********** Intersection observer Sections FadeIn Animation **********
const sections = document.querySelectorAll(".entry");
const bgSections = document.querySelectorAll(".bg-entry");
// const 

// Sections Fade in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // entry.target.classList.toggle("fade-in", entry.isIntersecting);
    // if((entry.target.classList.contains("mail-form") && entry.isIntersecting) || (entry.target.classList.contains("about-info") && entry.isIntersecting)) observer.unobserve(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  })
}, {
  threshold: .8
})

sections.forEach(section => {
  observer.observe(section);
})

// Background translate
const bgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hero.style.transform = `translateY(${window.scrollY + entry.target.getBoundingClientRect().top}px)`
      hero.style.height = entry.target.getBoundingClientRect().height + "px";
    }
  })
}, {
  threshold: .5
})

bgSections.forEach(bgSection => {
  bgObserver.observe(bgSection);
})




// ********** Copied to Clipboard Pop up **********
const emailCard = document.querySelector(".email-card");
const emailSpan = document.querySelector(".email-tip");

emailCard.addEventListener("click", function () {
  navigator.clipboard.writeText('zhalgasmiyatbekov@gmail.com');
  emailSpan.classList.add("copied");
  setTimeout(() => {
    emailSpan.classList.remove("copied");
  }, 2000);
});


// ********** Mail Form ************
const form = document.querySelector("#contact-form");
const inputs = document.querySelectorAll("input:not(input[type=hidden])");
const textArea = document.querySelector("textarea");
const formResult = document.querySelector(".form-result");
const showEmail = document.querySelector(".show-email");
// loader
const loader = document.querySelector(".loader-wrapper");
const loaderRect = document.querySelector(".loader");


(function () {
  emailjs.init("user_Y9JvB1xXlcYgAhrtbT7Wj");
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // generate a five digit number for the contact_number variable
  // this.contact_number.value = Math.random() * 100000 | 0;

  loader.classList.add("animate-loader");

  // these IDs from the previous steps
  // emailjs.sendForm('service_fz0d1dc', 'my_template', this)
  // .then(function () {

  inputs.forEach(input => {
    input.value = "";
    textArea.value = "";
  })
  setTimeout(() => {
    loaderRect.style.display = "none";
    formResult.style.color = "hsla(182, 63%, 54%)";
    formResult.innerHTML = "Thank You!";
  }, 2500)

  setTimeout(() => {
    formResult.classList.add("fadeOut");
  }, 3000)
  setTimeout(() => {
    loader.classList.add("pullUpLoader");
    // loader.style.zIndex = -100;
    form.style.opacity = "0";
    // form.style.display = "none";
  }, 3500)

  setTimeout(() => {
    form.style.display = "none";
    topLink.classList.add('moved');
  }, 4000)

  // }, 
  // function (error) {
  //   console.log('FAILED...', error);
  //   loaderRect.style.display = "none";
  //   formResult.style.color = "red";
  //   formResult.innerHTML = "Oops! Something went wrong. Please email: zhalgasmiyatbekov@gmail.com!";
  //   setTimeout(() => {
  //     loader.style.transform = "translateY(-10rem)";
  //     loader.style.zIndex = -100;
  //     formResult.innerHTML = "";
  //   }, 2500)
  //   setTimeout(() => {
  //     loader.style.opacity = 0;
  //   }, 2600)
  // }
  // );
});


// ********** Set Date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** Map API ************
// const googleMap = document.querySelector("#map-api");

// function initMap() {
//   let map;
//   const myLatLng = { lat: 43.6588, lng: 51.1975 };
//   map = new google.maps.Map(document.getElementById("map-api"), {
//     center: myLatLng,
//     zoom: 13,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });
// }






const contactMeBtn = document.querySelector('a#contact-me-btn');
const topLink = document.querySelector('.top-link');

topLink.addEventListener('click', (e) => {
  console.log('hi')
  scrollToSection(0)
})

contactMeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(scrollSections.length - 2)
  // console.log(scrollSections.length - 2)
})

//  Scroll carousel
const scrollSections = document.querySelectorAll('#hero, #about, .project-height, #contact-me, footer')
let currentIndex = 0;
let isScrolling = false;


function scrollToSection(index) {
  if (index < 0 || index >= scrollSections.length) return;

  isScrolling = true;
  scrollSections[index].scrollIntoView({ behavior:'smooth'});

  setTimeout(() => {
    isScrolling = false;
    currentIndex = index;
  }, 1000)
}

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (isScrolling) return;

  if (e.deltaY > 0) {
    scrollToSection(currentIndex + 1);
  } else {
    scrollToSection(currentIndex - 1);
  }
}, {passive: false});

scrollToSection(0);


// Scroll Mobile
let touchStartY = 0;
let isTouchLocked = false;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
  isTouchLocked = false;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (isScrolling || isTouchLocked) return;

  const currentY = e.touches[0].clientY;
  const delta = touchStartY - currentY;

  if (Math.abs(delta) > 30) {
    isTouchLocked = true;

    if (delta > 0) {
      scrollToSection(currentIndex + 1); // свайп вверх → вниз
    } else {
      scrollToSection(currentIndex - 1); // свайп вниз → вверх
    }
  }
}, { passive: false });