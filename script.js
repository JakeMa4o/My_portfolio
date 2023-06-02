// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** Fade In ************

const projectInfos = document.querySelectorAll(".project-info");
const projectImgs = document.querySelectorAll(".project-img");
const mailForm = document.querySelector(".mail-form");
const googleMap = document.querySelector("#map-api");
const aboutText = document.querySelector(".my-text");
const aboutTextTitle = document.querySelector(".my-text h2");
const aboutTextParag = document.querySelector(".my-text p");
const techStack = document.querySelector(".tech-stack");



window.addEventListener("scroll", function () {

  const windowHeight = window.innerHeight;
  const fadeInPoint = 150;

  // About section

  for (let a = 0; a < projectInfos.length; a++) {
    const aboutTextTop = aboutText.getBoundingClientRect().top;
    
    if (aboutTextTop < windowHeight - fadeInPoint) {
      aboutTextTitle.classList.add("fade-in");
      aboutTextParag.classList.add("fade-in");
      techStack.classList.add("fade-in");
    } 
    // else {
    //   aboutTextTitle.classList.remove("fade-in");
    //   aboutTextParag.classList.remove("fade-in");
    //   techStack.classList.remove("fade-in");
    // }

  }


  // Project section

  for (let i = 0; i < projectInfos.length; i++) {

    const itemTopInfo = projectInfos[i].getBoundingClientRect().top;

    if (itemTopInfo < windowHeight - fadeInPoint) {
      projectInfos[i].classList.add("fade-in");
    } else {
      projectInfos[i].classList.remove("fade-in");
    }
  }
  for (let j = 0; j < projectImgs.length; j++) {

    const itemTopImg = projectImgs[j].getBoundingClientRect().top;

    if (itemTopImg < windowHeight - fadeInPoint) {
      projectImgs[j].classList.add("fade-in");
    } else {
      projectImgs[j].classList.remove("fade-in");
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


// ********** Set Date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// ********** Close Links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links');

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }

})



const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
let lastScroll = 0;
// ********** fixed navbar ************
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;

  const navHeight = navbar.getBoundingClientRect().height;


  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }

})



// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
})



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

