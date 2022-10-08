import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
const imgEL = document.querySelector("img");

galleryEl.innerHTML = galleryCardsMarkup;

const fullImage = new SimpleLightbox(".gallery .gallery__item", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryCardsMarkup(galleryItemsArray) {
  return galleryItemsArray
    .map(({ preview, original, description }) => {
      return `
    <li>
      <a class="gallery__item" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          alt="${description}" />
      </a>
    </li>`;
    })
    .join("");
}
