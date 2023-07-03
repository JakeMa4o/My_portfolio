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



const contact = document.querySelector("#contact-me")
const mailForm = document.querySelector(".mail-form");
// const googleMap = document.querySelector("#map-api");


const windowHeight = window.innerHeight;
const desktopQuery = window.matchMedia("(min-width: 1100px)");


// Hero background 
window.addEventListener("load", function () {
  this.setTimeout(setBackground, 1500)
  function setBackground() {
    hero.style.backgroundColor = "hsl(210, 36%, 96%)";
  }
})

// About section position variables
const aboutTopRelativeDocument = aboutRect.top;
const aboutTopDifference = Math.abs(heroRect.height / 3 - aboutRect.height / 2);
const aboutLeftDifference = Math.abs(heroRect.width / 2 - aboutRect.width / 2);


// Projects section position variables

const projectsDetail = [];

for (let p = 0; p < projectInfos.length; p++) {
  const projectRect = projectInfos[p].getBoundingClientRect();
  const projectTopDifference = Math.abs(heroRect.height / 3 - projectRect.height / 2);
  const projectLeftDifference = Math.abs(heroRect.width / 2 - projectRect.width / 2);

  projectsDetail.push({
    projectRect: projectRect,
    projectTopDifference: projectTopDifference,
    projectLeftDifference: projectLeftDifference
  })

  if (desktopQuery.matches) {
    projectTools[p].style.left = projectsDetail[p].projectRect.width / 6 + "px";
  }
}

// Contact section position variable

const contactRect = contact.getBoundingClientRect();






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
  }


  // Scroll to ABOUT section Hero background rectangle, icons colored
  if (scroll + windowHeight > aboutTopRelativeDocument + aboutRect.height / 2) {
    aboutTextTitle.classList.add("fade-in");
    aboutTextParag.classList.add("fade-in");
    techStack.classList.add("fade-in");

    hero.style.borderRadius = "0";
    // hero.style.width = "80%";
    hero.style.height = "60%";
    hero.style.msTransform = "rotate(100deg)";
    hero.style.webkitTransform = "rotate(100deg)";
    hero.style.MozTransform = "rotate(100deg)";
    hero.style.OTransform = "rotate(100deg)";
    hero.style.transform = "rotate(100deg)";

    console.log(heroRect.width);
    console.log(heroRect);
    console.log(aboutRect.width);
    console.log(aboutRect);
    console.log(aboutLeftDifference);

    if (heroRect.width  > aboutRect.width) {
      hero.style.left = aboutRect.left - aboutLeftDifference + "px";
    } else if (heroRect.width  < aboutRect.width) {
      hero.style.left = aboutRect.left + aboutLeftDifference + "px";
    } else {
      hero.style.left = aboutRect.left + "px";
    }
    if (heroRect.height / 2 > aboutRect.height) {
      hero.style.top = aboutTopRelativeDocument - aboutTopDifference + "px";
    } else if (heroRect.height / 2 < aboutRect.height) {
      hero.style.top = aboutTopRelativeDocument + aboutTopDifference + "px";
    } else {
      hero.style.top = aboutTopRelativeDocument + "px";
    }

    icons.forEach(icon => icon.classList.add("colored"))
  }


  // Scroll to PROJECT sections Hero background rectangle
  for (let p = 0; p < projectsDetail.length; p++) {
    if (scroll + windowHeight > projectsDetail[p].projectRect.top) {
      // Tools animation
      projectTools[p].classList.add("project-tools-animate");

      this.setTimeout(() => {
        // Test
        projectTools[p].style.top = "0";
        projectTools[p].style.left = "0";
        projectTools[p].children[0].children.forEach(li => li.firstChild.style.fontSize = "2rem");
        projectTools[p].children[0].children.forEach(li => li.lastChild.style.opacity = "1");
        projectTools[p].children[0].children.forEach(li => li.lastChild.style.margin = "0");
        // Test
      }, 1000)
      this.setTimeout(() => {
        projectImgs[p].style.opacity = "1";
        projectImgs[p].style.bottom = "0";
      }, 1200)
      this.setTimeout(() => {
        projectDescriptions[p].style.opacity = "1";
        projectDescriptions[p].style.left = "0";
      }, 1300)
      this.setTimeout(() => {
        projectTitles[p].style.opacity = "1";
        projectTitles[p].style.left = "0";
      }, 1600)
      this.setTimeout(() => {
        buttonContainers[p].style.opacity = "1";
        buttonContainers[p].style.left = "0";
      }, 1800)

      // background reactangle
      if (heroRect.width / 2 > projectsDetail[p].projectRect.width) {
        hero.style.left = projectsDetail[p].projectRect.left - projectsDetail[p].projectLeftDifference + "px";
      } else if (heroRect.width / 2 < projectsDetail[p].projectRect.width) {
        hero.style.left = projectsDetail[p].projectRect.left + projectsDetail[p].projectLeftDifference + "px";
      } else {
        hero.style.left = projectsDetail[p].projectRect.left + "px";
      }
      if (heroRect.height * .6 > projectsDetail[p].projectRect.height) {
        hero.style.top = projectsDetail[p].projectRect.top - projectsDetail[p].projectTopDifference + "px";
      } else if (heroRect.height * .6 < projectsDetail[p].projectRect.height) {
        hero.style.top = projectsDetail[p].projectRect.top + projectsDetail[p].projectTopDifference + "px";
      } else {
        hero.style.top = projectsDetail[p].projectRect.top + "px";
      }

      if (p == 0 || p == 2) {
        hero.style.msTransform = "rotate(-90deg)";
        hero.style.webkitTransform = "rotate(-90deg)";
        hero.style.MozTransform = "rotate(-90deg)";
        hero.style.OTransform = "rotate(-90deg)";
        hero.style.transform = "rotate(-90deg)";
      } else {
        hero.style.msTransform = "rotate(90deg)";
        hero.style.webkitTransform = "rotate(90deg)";
        hero.style.MozTransform = "rotate(90deg)";
        hero.style.OTransform = "rotate(90deg)";
        hero.style.transform = "rotate(90deg)";
      }

      // projectImgs[1].style.filter = "grayscale(100%)"
      //   projectImgs[2].style.filter = "grayscale(0%)"
      //   projectImgs[3].style.filter = "grayscale(100%)"
    }

  }


  // Scroll to CONTACT section Hero background rectangle
  if (scroll + windowHeight > contactRect.top + contactRect.height / 2) {
    mailForm.classList.add("fade-in");
    hero.style.top = contactRect.top + "px";
    hero.style.left = contactRect.left + "px";
    hero.style.width = "100%";
    hero.style.height = contactRect.height + "px";
    hero.style.msTransform = "rotate(0deg)";
    hero.style.webkitTransform = "rotate(0deg)";
    hero.style.MozTransform = "rotate(0deg)";
    hero.style.OTransform = "rotate(0deg)";
    hero.style.transform = "rotate(0deg)";
    hero.style.backgroundColor = "hsl(210, 36%, 96%)";
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

