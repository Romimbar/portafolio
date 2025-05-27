document.addEventListener("DOMContentLoaded", function() {

const images = ["images/ilustr1.jpg", "images/ilustr2.jpg", "images/ilustr3.jpg", "images/ilustr4.jpg", "images/ilustr5.jpg"];
const imagesIndu = ["images/indu1.jpg", "images/indu2.jpg", "images/indu3.jpg", "images/indu4.jpg", "images/indu5.jpg"];
let currentGallery = 'ilustraciones';
let currentIndex = 0;

function openGallery() {
  currentGallery = 'ilustraciones';
  currentIndex = 0;
  document.getElementById("galleryModal").style.display = "block";
  showImage(currentIndex);
  document.body.style.overflow = 'hidden';
}

function openGalleryIndu() {
  currentGallery = 'indumentaria';
  currentIndex = 0;
  document.getElementById("galleryModal").style.display = "block";
  showImage(currentIndex);
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
  document.body.style.overflow = 'auto';
}

function changeSlide(direction) {
  const gallery = currentGallery === 'ilustraciones' ? images : imagesIndu;
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = gallery.length - 1;
  if (currentIndex >= gallery.length) currentIndex = 0;
  showImage(currentIndex);
}

function showImage(index) {
  const img = document.getElementById("galleryImage");
  const counter = document.getElementById("imageCounter");
  const gallery = currentGallery === 'ilustraciones' ? images : imagesIndu;
  img.src = gallery[index];
  img.alt = `${currentGallery === 'ilustraciones' ? 'Ilustración' : 'Diseño de indumentaria'} ${index + 1}`;
  counter.textContent = `${index + 1} / ${gallery.length}`;
}

// Smooth scroll
document.querySelector('.btn-form-access').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});
});
