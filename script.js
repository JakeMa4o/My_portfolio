// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels

// Hero 

// TEST

const hero = document.querySelector(".hero-background");
const heroTop = hero.getBoundingClientRect().top;


window.addEventListener("scroll", function () {
  const scroll = window.pageYOffset;
  hero.style.margin = "auto";
  
  if (scroll < windowHeight - 5) {
    hero.style.width = "65%";
    hero.style.height = "60vh";
    hero.style.left = "17%";
    hero.style.top = "20%";
    // hero.style.position = "fixed";
    // hero.style.borderRadius = "50%";
  }
  if (scroll < 5) {
    hero.style.width = "100%";
    hero.style.height = "100vh";  
    hero.style.left = "0";
    hero.style.top = "0";
    // hero.style.position = "absolute";
    // hero.style.borderRadius = "0";
  }

})

// TEST


// ********** Fade In ************

const aboutText = document.querySelector(".my-text");
const aboutTextTitle = document.querySelector(".my-text h2");
const aboutTextParag = document.querySelector(".my-text p");
const techStack = document.querySelector(".tech-stack");

const projectIconsContainers = document.querySelectorAll(".project-icons-container");


const mailForm = document.querySelector(".mail-form");
const googleMap = document.querySelector("#map-api");

const windowHeight = window.innerHeight;
const fadeInPoint = 550;

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
      projectIconsContainers[i].classList.add("project-icons-animation");
    } else {
      projectIconsContainers[i].classList.remove("project-icons-animation");
    }
  }



  // Contact section
  const mailFormTop = mailForm.getBoundingClientRect().top;
  const googleMapTop = googleMap.getBoundingClientRect().top;

  if (mailFormTop < windowHeight - fadeInPoint) {
    mailForm.classList.add("fade-in");
  } else {
    mailForm.classList.remove("fade-in");
  }

  if (googleMapTop < windowHeight - fadeInPoint) {
    googleMap.classList.add("fade-in");
  } else {
    googleMap.classList.remove("fade-in");
  }
})



// ********** Map API ************
function initMap() {
  let map;
  const myLatLng = { lat: 43.6588, lng: 51.1975 };
  map = new google.maps.Map(document.getElementById("map-api"), {
    center: myLatLng,
    zoom: 13,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}





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

