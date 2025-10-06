let touchstartX = 0;
let touchendX = 0;

const pages = ["index.html", "salidas-programadas.html", "catalogo.html", "contact-us.html"];
const currentPage = window.location.pathname.split("/").pop();
const currentIndex = pages.indexOf(currentPage);

function handleGesture() {
  const swipeThreshold = 50; // minimum px for a valid swipe

  if (touchendX < touchstartX - swipeThreshold) {
    // Swipe Left → Next Page
    if (currentIndex < pages.length - 1) {
      window.location.href = pages[currentIndex + 1];
    }
  }

  if (touchendX > touchstartX + swipeThreshold) {
    // Swipe Right → Previous Page
    if (currentIndex > 0) {
      window.location.href = pages[currentIndex - 1];
    }
  }
}

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
