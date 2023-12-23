
const carousel = document.getElementById('carousel');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const message = document.getElementById('message');
const letters = ["css/snow.png", "css/natal.png", "css/loira.png"];
const um = document.querySelector("#um");
const dois = document.querySelector("#dois");
const tres = document.querySelector("#tres");
let currentIndex = 0;
let i;

function showImage(index) {
   i = index;
   overlay.style.display = 'flex';
   overlayImg.src = letters[index];
   
}

function hideOverlay() {
   overlay.style.display = 'none';
   switch (i) {
      case 0:
         um.remove()
         break;
      case 1:
         dois.remove();
         break;
      case 2:
         tres.remove();
         
         message.style.display = 'flex';
      default:
         break;
   }
}
/*
function prevImage() {
   currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
   updateCarousel();
}

function nextImage() {
   currentIndex = (currentIndex + 1) % carousel.children.length;
   updateCarousel();
}

function updateCarousel() {
   const transformValue = -currentIndex * 100 + '%';
   carousel.style.transform = 'translateX(' + transformValue + ')';
}
*/
overlay.addEventListener('click', hideOverlay);

