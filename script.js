// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels

const hero = document.querySelector(".hero-background");
const heroRect = hero.getBoundingClientRect();


// ********** Fade In ************

const aboutInfo = document.querySelector(".about-info");
const aboutRect = aboutInfo.getBoundingClientRect();
const aboutTextTitle = document.querySelector(".my-text h2");
const aboutTextParag = document.querySelector(".my-text p");
const techStack = document.querySelector(".tech-stack");
const icons = document.querySelectorAll(".icon");


const projectInfos = document.querySelectorAll(".project-info");
const projectImgs = document.querySelectorAll(".project-img");
const projectTitles = document.querySelectorAll(".project-title");
const projectTools = document.querySelectorAll(".project-tools");
const projectDescriptions = document.querySelectorAll(".description");
const buttonContainers = document.querySelectorAll(".buttons-container");



const contact = document.querySelector("#contact-me");
const mailForm = document.querySelector(".mail-form");
const emailCard = document.querySelector(".email-card");
const emailSpan = document.querySelector(".email-card span");
const topLink = document.querySelector(".top-link")
// const googleMap = document.querySelector("#map-api");


const windowHeight = window.innerHeight;

// Query
const desktopQuery = window.matchMedia("(min-width: 1100px)");
const mobileQuery = window.matchMedia("(min-width: 500px)");
const fourKQuery = window.matchMedia("(min-width: 2560px)");


// Hero background 
window.addEventListener("load", function () {
  this.setTimeout(setBackground, 1500)
  function setBackground() {
    hero.style.opacity = 1;
    // hero.style.backgroundColor = "rgb(235, 236, 237)";
  }
})

// About section position variables
const aboutTopRelativeDocument = aboutRect.top;
// const aboutTopDifference = Math.abs(heroRect.height / 2 - aboutRect.height / 2);
// const aboutLeftDifference = Math.abs(heroRect.width / 2 - aboutRect.width / 2);


// Projects section position variables
const projectsDetail = [];

for (let p = 0; p < projectInfos.length; p++) {
  const projectRect = projectInfos[p].getBoundingClientRect();
  const projectTopDifference = Math.abs(heroRect.height / 2 - projectRect.height / 2);
  const projectLeftDifference = Math.abs(heroRect.width / 2 - projectRect.width / 2);

  projectsDetail.push({
    projectTopDifference: projectTopDifference,
    projectLeftDifference: projectLeftDifference,
    projectRect: projectRect
  })


  if (projectTools[p].children[0].children.length == 2) {
    projectTools[p].style.transform = `translate(${projectsDetail[p].projectRect.width / 6 / 16}rem, 5rem)`;
  }
  if (desktopQuery.matches) {
    projectTools[p].style.transform = `translate(${projectsDetail[p].projectRect.width / 6 / 16}rem, 5rem)`;
  }
}

// Contact section position variable

const contactRect = contact.getBoundingClientRect();
const emailCardRect = emailCard.getBoundingClientRect();
const emailSpanRect = emailSpan.getBoundingClientRect();


// ********** Navigation Background Figure ************

window.addEventListener("scroll", function () {
  // Scroll value updated every scroll
  const scroll = window.pageYOffset;


  // Scroll to HERO section background 100% width
  if (scroll + windowHeight < aboutTopRelativeDocument + aboutRect.height / 2) {
    hero.style.width = "100%";
    hero.style.height = "100vh";
    hero.style.top = "0";
    hero.style.left = "0";
    hero.style.borderRadius = "0";
    hero.style.position = "absolute";
    icons.forEach(icon => icon.classList.remove("colored"))
    hero.style.msTransform = "rotate(0deg)";
    hero.style.webkitTransform = "rotate(0deg)";
    hero.style.MozTransform = "rotate(0deg)";
    hero.style.OTransform = "rotate(0deg)";
    hero.style.transform = "rotate(0deg)";
    hero.classList.remove("hero-animate");
  }


  // Scroll to ABOUT section Hero background rectangle, icons colored
  if (scroll + windowHeight > aboutTopRelativeDocument + aboutRect.height / 2) {
    aboutTextTitle.classList.add("fade-in");
    aboutTextParag.classList.add("fade-in");
    techStack.classList.add("fade-in");


    // hero.style.borderRadius = "64% 36% 70% 30% / 44% 62% 38% 56%";

    hero.classList.add("hero-animate");

    hero.style.width = aboutRect.width + "px";
    hero.style.height = aboutRect.height + "px";

    hero.style.top = aboutTopRelativeDocument + "px";
    hero.style.left = aboutRect.left + "px";

    if (mobileQuery.matches) {
      hero.style.height = aboutRect.height * 2 + "px";
      hero.style.top = aboutTopRelativeDocument - aboutRect.height / 2 + "px";
    }


    hero.style.msTransform = "rotate(180deg)";
    hero.style.webkitTransform = "rotate(180deg)";
    hero.style.MozTransform = "rotate(180deg)";
    hero.style.OTransform = "rotate(180deg)";
    hero.style.transform = "rotate(180deg)";

    // hero.style.left = aboutRect.left + "px";
    // hero.style.top = aboutTopRelativeDocument + "px";

    icons.forEach(icon => icon.classList.add("colored"))
  }


  // Scroll to PROJECT sections Hero background rectangle
  for (let p = 0; p < projectsDetail.length; p++) {
    if (scroll + windowHeight > projectsDetail[p].projectRect.top + projectsDetail[p].projectRect.height / 3) {

      // background shape
      hero.style.width = projectsDetail[p].projectRect.width + "px";
      hero.style.height = projectsDetail[p].projectRect.height + "px";
      hero.style.left = projectsDetail[p].projectRect.left + "px";
      hero.style.top = projectsDetail[p].projectRect.top + "px";

      hero.classList.remove("hero-animate");
      hero.style.borderRadius = "10px";

      if (desktopQuery.matches) {
        hero.classList.add("hero-animate");
      }


      // Tools animation
      projectTools[p].classList.add("project-tools-animate");

      this.setTimeout(() => {
        // Test
        projectTools[p].style.transform = "translate(0rem, 0rem)";
        projectTools[p].children[0].children.forEach(li => li.firstChild.style.fontSize = "2rem");
        projectTools[p].children[0].children.forEach(li => li.lastChild.style.opacity = "1");
        projectTools[p].children[0].children.forEach(li => li.lastChild.style.margin = "0");
        // Test
      }, 1000)
      this.setTimeout(() => {
        if (mobileQuery.matches) {
          projectImgs[p].children[0].children[0].style.transition = "2s linear";
        }
        if (desktopQuery.matches) {
          projectImgs[p].children[0].children[0].style.transition = "2s ease";
        }
        if (fourKQuery.matches) {
          projectImgs[p].children[0].children[0].style.transition = "1s linear";
        }
        projectImgs[p].children[0].children[0].style.strokeDashoffset = 0;
      }, 1000)
      if (fourKQuery.matches) {
        this.setTimeout(() => {
          projectImgs[p].children[1].style.opacity = 1;
          projectImgs[p].children[0].children[0].style.transition = "1s ease";
          projectImgs[p].children[0].children[0].style.opacity = 0;
        }, 2500)
      }
      this.setTimeout(() => {
        projectImgs[p].children[1].style.opacity = 1;
        projectImgs[p].children[0].children[0].style.transition = "1s ease";
        projectImgs[p].children[0].children[0].style.opacity = 0;
      }, 2200)
      this.setTimeout(() => {
        projectDescriptions[p].style.opacity = "1";
        projectDescriptions[p].style.transform = "translateX(0)";
      }, 1300)
      this.setTimeout(() => {
        projectTitles[p].style.opacity = "1";
        projectTitles[p].style.left = "0";
        projectTitles[p].style.transform = "translateX(0)";
      }, 1600)
      this.setTimeout(() => {
        buttonContainers[p].style.opacity = "1";
        buttonContainers[p].style.left = "0";
        buttonContainers[p].style.transform = "translateX(0)";
      }, 1800)


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


      // projectImgs[1].style.filter = "grayscale(100%)"
      //   projectImgs[2].style.filter = "grayscale(0%)"
      //   projectImgs[3].style.filter = "grayscale(100%)"
    }

  }


  // Scroll to CONTACT section Hero background rectangle
  if (scroll + windowHeight > contactRect.top + contactRect.height / 2) {
    hero.classList.remove("hero-animate");
    hero.style.borderRadius = "10px";
    // hero.style.top = emailSpanRect.top + "px";
    // hero.style.left = emailSpanRect.left + "px";
    // hero.style.width = emailSpanRect.width + "px";
    // hero.style.height = emailSpanRect.height + "px";
    hero.style.top = emailCardRect.top + "px";
    hero.style.left = emailCardRect.left + "px";
    hero.style.width = emailCardRect.width + "px";
    hero.style.height = emailCardRect.height + "px";
    hero.style.msTransform = "rotate(720deg)";
    hero.style.webkitTransform = "rotate(720deg)";
    hero.style.MozTransform = "rotate(720deg)";
    hero.style.OTransform = "rotate(720deg)";
    hero.style.transform = "rotate(720deg)";
    this.setTimeout(() => {
      emailCard.classList.add("fade-in");
    }, 800)
    this.setTimeout(() => {
      mailForm.classList.add("fade-in");
      topLink.classList.add("fade-in");
    }, 900)

    // hero.style.backgroundColor = "hsl(210, 36%, 96%)";
  }
})

// TEST



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





// ********** Mail Form ************
const inputs = document.querySelectorAll("input:not(input[type=hidden])");
const textArea = document.querySelector("textarea");
const formResult = document.querySelector(".form-result");
const showEmail = document.querySelector(".show-email");
// loader
const loader = document.querySelector(".loader-wrapper");


(function () {
  emailjs.init("user_Y9JvB1xXlcYgAhrtbT7Wj");
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // generate a five digit number for the contact_number variable
  this.contact_number.value = Math.random() * 100000 | 0;
  // Here goes the loader
  loader.style.display = "grid";
  loader.style.placeItems = "center";
  // these IDs from the previous steps
  emailjs.sendForm('service_fz0d1dc', 'my_template', this)
    .then(function () {
      inputs.forEach(input => {
        input.value = "";
        textArea.value = "";
        formResult.style.display = "block";
        formResult.style.backgroundColor = "hsla(182, 63%, 54%)";
        formResult.style.padding = "1rem";
        formResult.innerHTML = "Thank You!";
        setTimeout(() => {
          formResult.style.display = "none";
        }, 3000)
        // console.log('SUCCESS!');
        loader.style.display = "none";
      })
    }, function (error) {
      console.log('FAILED...', error);
      formResult.style.display = "block";
      formResult.style.backgroundColor = "red";
      formResult.innerHTML = "Oops! Something went wrong";
      showEmail.innerHTML = "Please email: zhalgasmiyatbekov@gmail.com!";
      setTimeout(() => {
        formResult.style.display = "none";
        // showEmail.style.display = "none";
      }, 3000)
      loader.style.display = "none";
    });
});




// ********** Set Date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

