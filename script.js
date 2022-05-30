// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels


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


// Switch the lang 
const engText = document.querySelectorAll("[lang=eng]");
const rusText = document.querySelectorAll("[lang=rus]");
const select = document.querySelector("#language");

rusText.forEach(element => {
  element.style.display = "none";
})

select.addEventListener("change", (event) => {
  const value = event.target.value;
  if (value === "eng") {
    engText.forEach(element => {
      element.style.display = "block";
    })
    rusText.forEach(element => {
      element.style.display = "none";
    })
  } else {
    rusText.forEach(element => {
      element.style.display = "block";
    })
    engText.forEach(element => {
      element.style.display = "none";
    })
  }
  
})


// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// ********** close links ************
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
      setTimeout(() => {
        formResult.style.display = "none";
      }, 3000)
      showEmail.innerHTML = "Please email: 2000_aktau@mail.ru!";
      setTimeout(() => {
        showEmail.style.display = "none";
      }, 10000)
    });
});

