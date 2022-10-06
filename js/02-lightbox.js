import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery"); // Основний дів галереї
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems); // Змінна, в якій розмітка всієї галереї

galleryEl.innerHTML = galleryCardsMarkup; // Додаємо розмітку всієї галереї в HTML

galleryEl.addEventListener("click", onPictureClick); // Реєстрація загального кліку на галерею

// Повертає рядок розмітки всіх карток галереї
function createGalleryCardsMarkup(galleryItemsArray) {
  return galleryItemsArray
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}" />
    </a>`;
    })
    .join("");
}

function onPictureClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
}
