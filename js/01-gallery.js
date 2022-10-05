import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery"); // Основний дів галереї
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems); // Змінна, в якій розмітка всієї галереї

galleryEl.innerHTML = galleryCardsMarkup; // Додаємо розмітку всієї галереї в HTML

galleryEl.addEventListener("click", onPictureClick); // Реєстрація загального кліку на галерею

// Повертає рядок розмітки всіх карток галереї
function createGalleryCardsMarkup(galleryItemsArray) {
  return galleryItemsArray
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

// **********************************************************************

function onPictureClick(e) {
  const largeImage = e.target.dataset.source;
  const descrImage = e.target.alt;

  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  // **********************************************************************

  const modalFullImage = basicLightbox.create(`
      <img src="${largeImage}" alt="${descrImage}">
  `);

  modalFullImage.show();

  // **********************************************************************

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(e) {
    // console.log(e);
    if (e.code === "Escape") {
      modalFullImage.close();
    }
    if (!modalFullImage.visible()) {
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }

  // **********************************************************************
}
