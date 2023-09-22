// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels

const windowHeight = window.innerHeight;


// Query
const desktopQuery = window.matchMedia("(min-width: 1100px)");
const mobileQuery = window.matchMedia("(min-width: 500px)");
const fourKQuery = window.matchMedia("(min-width: 2560px)");



// Hero Background blob
const hero = document.querySelector(".hero-background");
const heroSection = document.querySelector("#hero .container");

const heroRect = hero.getBoundingClientRect();

window.addEventListener("load", function () {
  this.setTimeout(setBackground, 1500)
  function setBackground() {
    hero.style.opacity = 1;
  }
})



// About section position variables
const aboutInfo = document.querySelector(".about-info");

const aboutRect = aboutInfo.getBoundingClientRect();
const aboutTopRelativeDocument = aboutRect.top;



// Projects section position variables & Tools pos:rel centered in parent parent;
const projects = document.querySelectorAll(".project");
const projectInfos = document.querySelectorAll(".project-info");
const projectTools = document.querySelectorAll(".project-tools");
const projectMarkers = document.querySelectorAll(".project-marker");

const projectsDetail = [];

for (let p = 0; p < projectInfos.length; p++) {
  const projectRect = projects[p].getBoundingClientRect();
  const projectInfoRect = projectInfos[p].getBoundingClientRect();
  const projectTopDifference = Math.abs(heroRect.height / 2 - projectInfoRect.height / 2);
  const projectLeftDifference = Math.abs(heroRect.width / 2 - projectInfoRect.width / 2);
  const projectToolsRect = projectTools[p].getBoundingClientRect();

  projectsDetail.push({
    projectRect: projectRect,
    projectTopDifference: projectTopDifference,
    projectLeftDifference: projectLeftDifference,
    projectInfoRect: projectInfoRect,
    projectToolsRect: projectToolsRect
  })

  projectTools[p].style.transform = `translate(${projectsDetail[p].projectInfoRect.width / 9 / 16}rem, ${projectsDetail[p].projectToolsRect.height * 1.5 / 16}rem)`;

  if (desktopQuery.matches) {
    projectTools[p].style.transform = `translate(${projectsDetail[p].projectInfoRect.width / 6 / 16}rem, ${projectsDetail[p].projectToolsRect.height * 1.5 / 16}rem)`;
  }
}


// Contact section position variable 
const contact = document.querySelector("#contact-me");
const contactRect = contact.getBoundingClientRect();

const mailForm = document.querySelector(".mail-form");
const emailCard = document.querySelector(".email-card");
const emailCardRect = emailCard.getBoundingClientRect();

const emailSpan = document.querySelector(".email-tip");



// ********** Navigation Background Blob ************

window.addEventListener("scroll", function () {
  // Scroll value updated every scroll
  const scroll = window.pageYOffset;


  // Scroll to HERO section background 100% width
  if (scroll + windowHeight < aboutTopRelativeDocument + aboutRect.height / 2) {
    heroSection.style.opacity = "1";
    hero.style.width = "100%";
    hero.style.height = "100vh";
    hero.style.top = "0";
    hero.style.left = "0";
    hero.style.borderRadius = "0";
    hero.style.msTransform = "rotate(0deg)";
    hero.style.webkitTransform = "rotate(0deg)";
    hero.style.MozTransform = "rotate(0deg)";
    hero.style.OTransform = "rotate(0deg)";
    hero.style.transform = "rotate(0deg)";
    hero.classList.remove("hero-animate");

    this.setTimeout(() => {
      hero.classList.remove("hero-animate");
    }, 1000)
  }


  // Scroll to ABOUT section Hero background rectangle
  if (scroll + windowHeight > aboutTopRelativeDocument + aboutRect.height / 2) {
    heroSection.style.opacity = "0";
    
    hero.style.width = aboutRect.width + "px";
    hero.style.height = aboutRect.height + "px";
    hero.style.top = aboutTopRelativeDocument + "px";
    hero.style.left = aboutRect.left + "px";
    hero.style.borderRadius = "64% 36% 70% 30% / 44% 62% 38% 56%";
    hero.style.msTransform = "rotate(180deg)";
    hero.style.webkitTransform = "rotate(180deg)";
    hero.style.MozTransform = "rotate(180deg)";
    hero.style.OTransform = "rotate(180deg)";
    hero.style.transform = "rotate(180deg)";
    
    if (mobileQuery.matches) {
      hero.style.height = aboutRect.height * 2 + "px";
      hero.style.top = aboutTopRelativeDocument - aboutRect.height / 2 + "px";
    }

    hero.classList.add("hero-animate");

    aboutInfo.classList.add("fade-in");
  }


  // Scroll to PROJECT sections Hero background rectangle
  for (let p = 0; p < projectsDetail.length; p++) {
    if (scroll + windowHeight > projectsDetail[p].projectInfoRect.top + projectsDetail[p].projectInfoRect.height / 2) {
      hero.style.width = projectsDetail[p].projectInfoRect.width + "px";
      hero.style.height = projectsDetail[p].projectInfoRect.height + "px";
      hero.style.left = projectsDetail[p].projectInfoRect.left + "px";
      hero.style.top = projectsDetail[p].projectInfoRect.top + "px";

      hero.classList.remove("hero-animate");
      hero.style.borderRadius = "10px";

      if (mobileQuery.matches) {
        hero.style.borderRadius = "64% 36% 70% 30% / 44% 62% 38% 56%";
        hero.classList.add("hero-animate");
      }

      projectMarkers[p].classList.remove("marker-idle");

      projects[p].classList.add("fade-in");

      // Tools animation font size cant be done with css 2 animations conflict;
      this.setTimeout(() => {
        projectTools[p].children[0].children.forEach(li => li.firstChild.style.fontSize = "2rem");
      }, 1400)


      if (p == 0 || p == 2) {
        hero.style.msTransform = "rotate(360deg)";
        hero.style.webkitTransform = "rotate(360deg)";
        hero.style.MozTransform = "rotate(360deg)";
        hero.style.OTransform = "rotate(360deg)";
        hero.style.transform = "rotate(360deg)";
      } else {
        hero.style.msTransform = "rotate(540deg)";
        hero.style.webkitTransform = "rotate(540deg)";
        hero.style.MozTransform = "rotate(540deg)";
        hero.style.OTransform = "rotate(540deg)";
        hero.style.transform = "rotate(540deg)";
      }
    }

  }


  // Scroll to CONTACT section Hero background rectangle
  if (scroll + windowHeight > contactRect.top + contactRect.height / 1.5) {
    hero.classList.remove("hero-animate");
    hero.style.borderRadius = "10px";
    hero.style.top = emailCardRect.top + "px";
    hero.style.left = emailCardRect.left + "px";
    hero.style.width = emailCardRect.width + "px";
    hero.style.height = emailCardRect.height + "px";
    hero.style.msTransform = "rotate(720deg)";
    hero.style.webkitTransform = "rotate(720deg)";
    hero.style.MozTransform = "rotate(720deg)";
    hero.style.OTransform = "rotate(720deg)";
    hero.style.transform = "rotate(720deg)";

    mailForm.classList.add("fade-in");
  }
})



// ********** Copied to Clipboard Pop up **********
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
        loader.style.transform = "translateY(-10rem)";
        loader.style.zIndex = -100;
        formResult.innerHTML = "";
      }, 2500)
      setTimeout(() => {
        loader.style.opacity = 0;
      }, 2600)
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



// const googleMap = document.querySelector("#map-api");

// ********** Map API ************
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
