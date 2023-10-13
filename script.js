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

// Sections Fade in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("fade-in", entry.isIntersecting);
  })
}, {
  threshold: .5
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
      console.log(entry.target.children[0])
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
  this.contact_number.value = Math.random() * 100000 | 0;
  // Here goes the loader
  loaderRect.style.display = "block";
  loader.style.opacity = 1;
  loader.style.transform = "translateY(0)";
  loader.style.zIndex = 100;
  // these IDs from the previous steps
  emailjs.sendForm('service_fz0d1dc', 'my_template', this)
    .then(function () {
      inputs.forEach(input => {
        input.value = "";
        textArea.value = "";
      })
      loaderRect.style.display = "none";
      formResult.style.color = "hsla(182, 63%, 54%)";
      formResult.innerHTML = "Thank You!";
      setTimeout(() => {
        loader.style.transform = "translateY(-50rem)";
        formResult.innerHTML = "";
      }, 2500)
      setTimeout(() => {
        loader.style.zIndex = -100;
        loader.style.opacity = 0;
      }, 2800)
    }, function (error) {
      console.log('FAILED...', error);
      loaderRect.style.display = "none";
      formResult.style.color = "red";
      formResult.innerHTML = "Oops! Something went wrong. Please email: zhalgasmiyatbekov@gmail.com!";
      setTimeout(() => {
        loader.style.transform = "translateY(-10rem)";
        loader.style.zIndex = -100;
        formResult.innerHTML = "";
      }, 2500)
      setTimeout(() => {
        loader.style.opacity = 0;
      }, 2600)
    });
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
