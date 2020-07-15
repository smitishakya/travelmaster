
// Hamburger Navigation
const hamburger = document.getElementById('hamburger');
const navul = document.getElementById('nav-ul');
const navbutton = document.getElementById('nav-button');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
    navbutton.classList.toggle('showbutton');
});

//Slide Show for Discover Places of Interest Section

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("discover-slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// Portfolio Section Lightbox Effect Added 

function openGallery() {
  document.getElementById("myGallery").style.display = "block";
}

function closeGallery() {
  document.getElementById("myGallery").style.display = "none";
}

var slideGalleryIndex = 1;
showGallerySlides(slideGalleryIndex);

function plusGallerySlides(n) {
  showGallerySlides(slideGalleryIndex += n);
}

function currentGallerySlides(n) {
  showGallerySlides(slideGalleryIndex = n);
}

function showGallerySlides(n) {
  var i;
  var slidesGallery = document.getElementsByClassName("gallerySlides");
  if (n > slidesGallery.length) {slideGalleryIndex = 1}
  if (n < 1) {slideGalleryIndex = slidesGallery.length}
  for (i = 0; i < slidesGallery.length; i++) {
    slidesGallery[i].style.display = "none";
  }
  slidesGallery[slideGalleryIndex-1].style.display = "block";
}



// Unique Experience Section Lighbox Effect 

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideImageIndex = 1;
showImagesSlides(slideImageIndex);

function plusImageSlides(n) {
  showImagesSlides(slideImageIndex += n);
}

function currentImageSlides(n) {
  showImagesSlides(slideImageIndex = n);
}

function showImagesSlides(n) {
  var i;
  var slidesImages = document.getElementsByClassName("uniqueexpSlides");
  if (n > slidesImages.length) {slideImageIndex = 1}
  if (n < 1) {slideImageIndex = slidesImages.length}
  for (i = 0; i < slidesImages.length; i++) {
      slidesImages[i].style.display = "none";
  }
  slidesImages[slideImageIndex-1].style.display = "block";
}

