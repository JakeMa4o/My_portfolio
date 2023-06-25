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

// Test

for (let i = 0; i < projectInfos.length; i++) {
  const projectToolsRect = projectTools[i].getBoundingClientRect();
  const projectInfoRect = projectInfos[i].getBoundingClientRect();
  projectTools[i].style.top = projectInfoRect.height / 2 - projectToolsRect.height + "px";


  const x = window.matchMedia("(min-width: 1100px)")
  if (x.matches) {
    projectTools[i].style.left = projectInfoRect.width / 6 + "px";
  }
}

// Test




window.addEventListener("scroll", function () {
  const scroll = window.pageYOffset;

  // About section
  if (scroll + windowHeight > aboutRect.top + aboutRect.height / 1.5) {
    aboutTextTitle.classList.add("fade-in");
    aboutTextParag.classList.add("fade-in");
    techStack.classList.add("fade-in");
  }

  // Project section
  for (let i = 0; i < projectInfos.length; i++) {
    const projectInfoRect = projectInfos[i].getBoundingClientRect();
    const projectTopRelativeDocument = scroll + projectInfoRect.top;


    if (scroll + windowHeight > projectTopRelativeDocument + projectInfoRect.height / 2) {
      projectTools[i].classList.add("project-tools-animate");

      this.setTimeout(() => {

        // Test
        projectTools[i].style.top = "0";
        projectTools[i].style.left = "0";
        projectTools[i].children[0].children.forEach(li => li.firstChild.style.fontSize = "2rem")
        projectTools[i].children[0].children.forEach(li => li.lastChild.style.opacity = "1")
        projectTools[i].children[0].children.forEach(li => li.lastChild.style.margin = "0")
        // Test

        projectTitles[i].style.opacity = "1";
        projectTitles[i].style.top = "0";
        projectImgs[i].style.opacity = "1";
        projectImgs[i].style.top = "0";
        projectDescriptions[i].style.opacity = "1";
        projectDescriptions[i].style.top = "0";
        // projectTools[i].style.opacity = "1";
        // projectTools[i].style.top = "0";
        buttonContainers[i].style.opacity = "1";
        buttonContainers[i].style.top = "0";
        hero.style.borderRadius = "0%";
      }, 1000)
    }
  }


  // Contact section
  const mailFormRect = mailForm.getBoundingClientRect();
  const contactTopRelativeDocument = scroll + mailFormRect.top;

  if (scroll + windowHeight > contactTopRelativeDocument + mailFormRect.height / 2) {
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


// ********** Navigation Background Figure ************

window.addEventListener("scroll", function () {

  // Scroll value updated every scroll
  const scroll = window.pageYOffset;

  // Hero background position updated every scroll

  // AboutInfo section Hero position
  const aboutTopRelativeDocument = aboutRect.top;
  const aboutTopDifference = Math.abs(heroRect.height / 3 - aboutRect.height / 2);
  const aboutLeftDifference = Math.abs(heroRect.width / 2.5 - aboutRect.width / 2);

  // Project section Hero position 
  const project1Rect = projectInfos[0].getBoundingClientRect();
  const project1TopRelativeDocument = scroll + project1Rect.top;
  const project1TopDifference = Math.abs(heroRect.height / 3 - project1Rect.height / 2);
  const project1LeftDifference = Math.abs(heroRect.width / 2.5 - project1Rect.width / 2);

  const project2Rect = projectInfos[1].getBoundingClientRect();
  const project2TopRelativeDocument = scroll + project2Rect.top;
  const project2TopDifference = Math.abs(heroRect.height / 3 - project2Rect.height / 2);
  const project2LeftDifference = Math.abs(heroRect.width / 2.5 - project2Rect.width / 2);

  const project3Rect = projectInfos[2].getBoundingClientRect();
  const project3TopRelativeDocument = scroll + project3Rect.top;
  const project3TopDifference = Math.abs(heroRect.height / 3 - project3Rect.height / 2);
  const project3LeftDifference = Math.abs(heroRect.width / 2.5 - project3Rect.width / 2);

  const project4Rect = projectInfos[3].getBoundingClientRect();
  const project4TopRelativeDocument = scroll + project4Rect.top;
  const project4TopDifference = Math.abs(heroRect.height / 3 - project4Rect.height / 2);
  const project4LeftDifference = Math.abs(heroRect.width / 2.5 - project4Rect.width / 2);

  // Contact section Hero position
  const contactRect = contact.getBoundingClientRect();
  const contactTopRelativeDocument = scroll + contactRect.top;


  // Scroll back to HERO section background 100% width
  // scroll 500
  if (scroll + windowHeight < aboutTopRelativeDocument + aboutRect.height / 2) {
    hero.style.width = "100%";
    hero.style.height = "100vh";
    hero.style.top = "0";
    hero.style.left = "0";
    hero.style.borderRadius = "0";
    hero.style.position = "absolute";
    icons.forEach(icon => icon.classList.remove("colored"))
    hero.style.transform = "rotate(0deg)";
  }

  // Scroll to ABOUT section Hero background cricle, icons colored
  // scroll 500

  if (scroll + windowHeight > aboutTopRelativeDocument + aboutRect.height / 2) {
    hero.style.borderRadius = "0";
    hero.style.width = "80%";
    hero.style.height = "60%";
    // hero.style.width = "50%";
    // hero.style.height = "60%";
    // hero.style.transform = "rotate(90deg)";
    hero.style.transform = "rotate(100deg)";
    // hero.style.transform = "rotate(280deg)";

    if (heroRect.width / 2 > aboutRect.width) {
      hero.style.left = aboutRect.left - aboutLeftDifference + "px";
    } else if (heroRect.width / 2 < aboutRect.width) {
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
    projectImgs[0].style.filter = "grayscale(100%)"
  } 


  // Scroll to each PROJECT, about icon colors removed

  // 1500px

  if (scroll + windowHeight > project1TopRelativeDocument + project1Rect.height / 2) {

    if (heroRect.width / 2 > project1Rect.width) {
      hero.style.left = project1Rect.left - project1LeftDifference + "px";
    } else if (heroRect.width / 2 < project1Rect.width) {
      hero.style.left = project1Rect.left + project1LeftDifference + "px";
    } else {
      hero.style.left = project1Rect.left + "px";
    }
    if (heroRect.height / 2 > project1Rect.height) {
      hero.style.top = project1TopRelativeDocument - project1TopDifference + "px";
    } else if (heroRect.height / 2 < project1Rect.height) {
      hero.style.top = project1TopRelativeDocument + project1TopDifference + "px";
    } else {
      hero.style.top = project1TopRelativeDocument + "px";
    }
    hero.style.transform = "rotate(-90deg)";
    // hero.style.transform = "rotate(270deg)";
    // hero.style.transform = "rotate(250deg)";
    // hero.style.transform = "rotate(260deg)";

    projectImgs[0].style.filter = "grayscale(0%)"
    projectImgs[1].style.filter = "grayscale(100%)"
  }

  // 2600px

  if (scroll + windowHeight > project2TopRelativeDocument + project2Rect.height / 2) {

    if (heroRect.width / 2 > project2Rect.width) {
      hero.style.left = project2Rect.left - project2LeftDifference + "px";
    } else if (heroRect.width / 2 < project2Rect.width) {
      hero.style.left = project2Rect.left + project2LeftDifference + "px";
    } else {
      hero.style.left = project1Rect.left + "px";
    }

    // Check out this part if there is any problem with it, it was a bit of for mobile bcs of the info height was bigger than others? also /2 is not 60%

    if (heroRect.height /2 > project2Rect.height) {
      hero.style.top = project2TopRelativeDocument - project2TopDifference + "px";
    } else if (heroRect.height / 2 < project2Rect.height) {
      hero.style.top = project2TopRelativeDocument + project2TopDifference + "px";
    } else {
      hero.style.top = project2TopRelativeDocument + "px";
    }
    hero.style.transform = "rotate(90deg)";
    // hero.style.transform = "rotate(450deg)";
    // hero.style.transform = "rotate(420deg)";

    projectImgs[0].style.filter = "grayscale(100%)"
    projectImgs[1].style.filter = "grayscale(0%)"
    projectImgs[2].style.filter = "grayscale(100%)"
  }

  // 3900

  if (scroll + windowHeight > project3TopRelativeDocument + project3Rect.height / 2) {

    if (heroRect.width / 2 > project3Rect.width) {
      hero.style.left = project3Rect.left - project3LeftDifference + "px";
    } else if (heroRect.width / 2 < project3Rect.width) {
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
    hero.style.transform = "rotate(-90deg)";
    // hero.style.transform = "rotate(270deg)";
    // hero.style.transform = "rotate(630deg)";
    // hero.style.transform = "rotate(650deg)";
    // hero.style.transform = "rotate(450deg)";

    projectImgs[1].style.filter = "grayscale(100%)"
    projectImgs[2].style.filter = "grayscale(0%)"
    projectImgs[3].style.filter = "grayscale(100%)"
  }


  // 4800

  if (scroll + windowHeight > project4TopRelativeDocument + project4Rect.height / 2) {

    if (heroRect.width / 2 > project4Rect.width) {
      hero.style.left = project4Rect.left - project4LeftDifference + "px";
    } else if (heroRect.width / 2 < project4Rect.width) {
      hero.style.left = project4Rect.left + project4LeftDifference + "px";
    } else {
      hero.style.left = project4Rect.left + "px";
    }

    // This part is same as second? in height / 2 is removed for mobile bcs of it was bigger than others? also /2 is not 60%

    if (heroRect.height > project4Rect.height) {
      hero.style.top = project4TopRelativeDocument - project4TopDifference + "px";
    } else if (heroRect.height < project4Rect.height) {
      hero.style.top = project4TopRelativeDocument + project4TopDifference + "px";
    } else {
      hero.style.top = project4TopRelativeDocument + "px";
    }
    hero.style.transform = "rotate(90deg)";
    // hero.style.transform = "rotate(450deg)";
    // hero.style.transform = "rotate(810deg)";
    // hero.style.transform = "rotate(830deg)";
    // hero.style.transform = "rotate(630deg)";

    projectImgs[2].style.filter = "grayscale(100%)"
    projectImgs[3].style.filter = "grayscale(0%)"
    // console.log(contactTopRelativeDocument);
  }


  // 5900
  if (scroll + windowHeight > contactTopRelativeDocument + contactRect.height / 2) {
    hero.style.top = contactTopRelativeDocument + "px";
    hero.style.left = contactRect.left + "px";
    hero.style.width = "100%";
    hero.style.height = contactRect.height + "px";
    hero.style.transform = "rotate(0deg)";
    hero.style.backgroundColor = "hsl(210, 36%, 96%)";
    // hero.style.transform = "rotate(360deg)";
    // hero.style.transform = "rotate(720deg)";
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

