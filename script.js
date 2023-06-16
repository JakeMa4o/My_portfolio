// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels



// ********** Fade In ************

const aboutText = document.querySelector(".my-text");
const aboutTextTitle = document.querySelector(".my-text h2");
const aboutTextParag = document.querySelector(".my-text p");
const techStack = document.querySelector(".tech-stack");

const projectIconsContainers = document.querySelectorAll(".project-icons-container");
const projectImages = document.querySelectorAll(".project-img");
const projectTitles = document.querySelectorAll(".project-title");
const projectToolsLists = document.querySelectorAll(".project-tools");
const projectDescriptions = document.querySelectorAll(".description");
const buttonContainers = document.querySelectorAll(".buttons-container");



const mailForm = document.querySelector(".mail-form");
const googleMap = document.querySelector("#map-api");

const windowHeight = window.innerHeight;
const fadeInPoint = 200;
// 550px

window.addEventListener("scroll", function () {
  // About section
  const aboutTextTop = aboutText.getBoundingClientRect().top;

  if (aboutTextTop < windowHeight - fadeInPoint) {
    aboutTextTitle.classList.add("fade-in");
    aboutTextParag.classList.add("fade-in");
    techStack.classList.add("fade-in");
  }

  // Project section

  for (let i = 0; i < projectIconsContainers.length; i++) {
    const projectIconsTop = projectIconsContainers[i].getBoundingClientRect().top;

    if (projectIconsTop < windowHeight - fadeInPoint) {
      projectIconsContainers[i].classList.add("project-icons-animate");

      this.setTimeout(() => {
        projectTitles[i].style.opacity = "1";
        projectTitles[i].style.top = "0";
        projectImages[i].style.opacity = "1";
        projectImages[i].style.top = "0";
        projectDescriptions[i].style.opacity = "1";
        projectDescriptions[i].style.top = "0";
        projectToolsLists[i].style.opacity = "1";
        projectToolsLists[i].style.top = "0";
        buttonContainers[i].style.opacity = "1";
        buttonContainers[i].style.top = "0";
      }, 2000)

    } else {
      projectIconsContainers[i].classList.remove("project-icons-animate");
      projectTitles[i].style.opacity = "0";
      projectTitles[i].style.top = "1rem";
      projectImages[i].style.opacity = "0";
      projectImages[i].style.top = "1rem";
      projectDescriptions[i].style.opacity = "0";
      projectDescriptions[i].style.top = "1rem";
      projectToolsLists[i].style.opacity = "0";
      projectToolsLists[i].style.top = "1rem";
      buttonContainers[i].style.opacity = "0";
      buttonContainers[i].style.top = "1rem";
    }
  }



  // Contact section
  const mailFormTop = mailForm.getBoundingClientRect().top;

  if (mailFormTop < windowHeight - fadeInPoint) {
    mailForm.classList.add("fade-in");
  } else {
    mailForm.classList.remove("fade-in");
  }
})



// TEST

// Hero background 
window.addEventListener("load", function () {
  this.setTimeout(setBackground, 1500)
  function setBackground() {
    hero.style.backgroundColor = "hsl(210, 36%, 96%)";
    /* background mihgt be black amd the ui white */
    // hero.style.backgroundColor = "black";
  }
})


// Navigation Circle
const hero = document.querySelector(".hero-background");


const aboutInfo = document.querySelector(".about-info");
const icons = document.querySelectorAll(".icon");


const projectInfos = document.querySelectorAll(".project-info");
const projectImgs = this.document.querySelectorAll(".project-img");



const contact = document.querySelector("#contact-me");




window.addEventListener("scroll", function () {
  // Scroll value updated every scroll
  const scroll = window.pageYOffset;

  // Hero background position updated every scroll
  const heroRect = hero.getBoundingClientRect();

  // AboutInfo section Hero position
  const aboutRect = aboutInfo.getBoundingClientRect();
  const aboutTopRelativeDocument = scroll + aboutRect.top;
  const aboutTopDifference = Math.abs(heroRect.height / 2 - aboutRect.height / 2);
  const aboutLeftDifference = Math.abs(heroRect.width / 2 - aboutRect.width / 2);

  // Project section Hero position 
  const project1Rect = projectInfos[0].getBoundingClientRect();
  const project1TopRelativeDocument = scroll + project1Rect.top;
  const project1TopDifference = Math.abs(heroRect.height / 2 - project1Rect.height / 2);
  const project1LeftDifference = Math.abs(heroRect.width / 2 - project1Rect.width / 2);

  const project2Rect = projectInfos[1].getBoundingClientRect();
  const project2TopRelativeDocument = scroll + project2Rect.top;
  const project2TopDifference = Math.abs(heroRect.height / 2 - project2Rect.height / 2);
  const project2LeftDifference = Math.abs(heroRect.width / 2 - project2Rect.width / 2);

  const project3Rect = projectInfos[2].getBoundingClientRect();
  const project3TopRelativeDocument = scroll + project3Rect.top;
  const project3TopDifference = Math.abs(heroRect.height / 2 - project3Rect.height / 2);
  const project3LeftDifference = Math.abs(heroRect.width / 2 - project3Rect.width / 2);

  const project4Rect = projectInfos[3].getBoundingClientRect();
  const project4TopRelativeDocument = scroll + project4Rect.top;
  const project4TopDifference = Math.abs(heroRect.height / 2 - project4Rect.height / 2);
  const project4LeftDifference = Math.abs(heroRect.width / 2 - project4Rect.width / 2);

  // Contact section Hero position
  const contactRect = contact.getBoundingClientRect();
  const contactTopRelativeDocument = scroll + contactRect.top;


  // Scroll back to HERO section background 100% width
  if (scroll < 1) {
    hero.style.width = "100%";
    hero.style.height = "100vh";
    hero.style.left = "0";
    hero.style.top = "0";
    // hero.style.inset = "0";
    hero.style.borderRadius = "0";
    hero.style.position = "absolute";
    icons.forEach(icon => icon.classList.remove("colored"))
  }

  // Scroll to ABOUT section Hero background cricle, icons colored
  if (scroll > 10) {
    hero.style.width = "600px";
    hero.style.height = "600px";
    hero.style.borderRadius = "50%";
    if (heroRect.width > aboutRect.width) {
      hero.style.left = aboutRect.left - aboutLeftDifference + "px";
    } else if (heroRect.width < aboutRect.width) {
      hero.style.left = aboutRect.left + aboutLeftDifference + "px";
    } else {
      hero.style.left = aboutRect.left + "px";
    }
    if (heroRect.height > aboutRect.height) {
      hero.style.top = aboutTopRelativeDocument - aboutTopDifference + "px";
    } else if (heroRect.height < aboutRect.height) {
      hero.style.top = aboutTopRelativeDocument + aboutTopDifference + "px";
    } else {
      hero.style.top = aboutTopRelativeDocument + "px";
    }
    icons.forEach(icon => icon.classList.add("colored"))
    projectImgs[0].style.filter = "grayscale(100%)"
  }


  // Scroll to each PROJECT, about icon colors removed
  // 1500px
  if (scroll > 800) {

    if (heroRect.width > project1Rect.width) {
      hero.style.left = project1Rect.left - project1LeftDifference + "px";
    } else if (heroRect.width < project1Rect.width) {
      hero.style.left = project1Rect.left + project1LeftDifference + "px";
    } else {
      hero.style.left = project1Rect.left + "px";
    }
    if (heroRect.height > project1Rect.height) {
      hero.style.top = project1TopRelativeDocument - project1TopDifference + "px";
    } else if (heroRect.height < project1Rect.height) {
      hero.style.top = project1TopRelativeDocument + project1TopDifference + "px";
    } else {
      hero.style.top = project1TopRelativeDocument + "px";
    }

    projectImgs[0].style.filter = "grayscale(0%)"
    projectImgs[1].style.filter = "grayscale(100%)"
  }

  // 2400px

  if (scroll > 1800) {

    if (heroRect.width > project2Rect.width) {
      hero.style.left = project2Rect.left - project2LeftDifference + "px";
    } else if (heroRect.width < project2Rect.width) {
      hero.style.left = project2Rect.left + project2LeftDifference + "px";
    } else {
      hero.style.left = project1Rect.left + "px";
    }
    if (heroRect.height > project2Rect.height) {
      hero.style.top = project2TopRelativeDocument - project2TopDifference + "px";
    } else if (heroRect.height < project2Rect.height) {
      hero.style.top = project2TopRelativeDocument + project2TopDifference + "px";
    } else {
      hero.style.top = project2TopRelativeDocument + "px";
    }

    projectImgs[0].style.filter = "grayscale(100%)"
    projectImgs[1].style.filter = "grayscale(0%)"
    projectImgs[2].style.filter = "grayscale(100%)"
  }

  // 3000

  if (scroll > 2700) {

    if (heroRect.width > project3Rect.width) {
      hero.style.left = project3Rect.left - project3LeftDifference + "px";
    } else if (heroRect.width < project3Rect.width) {
      hero.style.left = project3Rect.left + project3LeftDifference + "px";
    } else {
      hero.style.left = project3Rect.left + "px";
    }
    if (heroRect.height > project3Rect.height) {
      hero.style.top = project3TopRelativeDocument - project3TopDifference + "px";
    } else if (heroRect.height < project3Rect.height) {
      hero.style.top = project3TopRelativeDocument + project3TopDifference + "px";
    } else {
      hero.style.top = project3TopRelativeDocument + "px";
    }

    projectImgs[1].style.filter = "grayscale(100%)"
    projectImgs[2].style.filter = "grayscale(0%)"
    projectImgs[3].style.filter = "grayscale(100%)"
  }


  // 3700

  if (scroll > 3500) {

    if (heroRect.width > project4Rect.width) {
      hero.style.left = project4Rect.left - project4LeftDifference + "px";
    } else if (heroRect.width < project4Rect.width) {
      hero.style.left = project4Rect.left + project4LeftDifference + "px";
    } else {
      hero.style.left = project4Rect.left + "px";
    }
    if (heroRect.height > project4Rect.height) {
      hero.style.top = project4TopRelativeDocument - project4TopDifference + "px";
    } else if (heroRect.height < project4Rect.height) {
      hero.style.top = project4TopRelativeDocument + project4TopDifference + "px";
    } else {
      hero.style.top = project4TopRelativeDocument + "px";
    }

    projectImgs[2].style.filter = "grayscale(100%)"
    projectImgs[3].style.filter = "grayscale(0%)"
    console.log(contactTopRelativeDocument);
  }


  // 4700
  if (scroll > 4600) {
    hero.style.top = contactTopRelativeDocument + "px";
    hero.style.left = contactRect.left + "px";
    hero.style.width = "100%";
    hero.style.height = contactRect.height + "px";
    hero.style.borderRadius = "0";
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
  emailjs.sendForm('service_blmc1ih', 'my_template', this)
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

