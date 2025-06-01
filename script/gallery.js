// @ts-check

document.addEventListener("DOMContentLoaded", function () {
  /** @type {HTMLElement|null} */
  const modal = document.getElementById("modal");
  /** @type {HTMLImageElement|null} */
  const modalImg = document.getElementById("modal-img");
  /** @type {HTMLElement|null} */
  const caption = document.getElementById("caption");
  /** @type {HTMLElement|null} */
  const closeBtn = document.querySelector(".close");
  /** @type {NodeListOf<HTMLImageElement>} */
  const images = document.querySelectorAll(".work-thumb");

  if (!modal || !modalImg || !caption || !closeBtn) return;

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      caption.innerText = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
