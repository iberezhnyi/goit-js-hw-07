import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

const getImage = (e) => {
  const large = e.target.dataset.source;
  const desc = e.target.alt;
  return { large: large, desc: desc };
};

galleryEl.addEventListener("click", onPictureClick);

galleryEl.innerHTML = galleryCardsMarkup;

function createGalleryCardsMarkup(galleryItemsArray) {
  return galleryItemsArray
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
}

function onPictureClick(e) {
  const image = getImage(e);

  if (!e.target.classList.contains("gallery__image")) return;

  e.preventDefault();

  const modalFullImage = basicLightbox.create(
    `<img src="${image.large}" alt="${image.desc}">`
  );
  modalFullImage.show();

  keyboardCloseModal(modalFullImage);
}

function keyboardCloseModal(modalImg) {
  const onEscKey = (e) => {
    if (e.code === "Escape") {
      modalImg.close();
      window.removeEventListener("keydown", onEscKey);
      // console.log(e);
    }
    return;
  };
  window.addEventListener("keydown", onEscKey);
}

// function keyboardCloseModal(modalImg) {
//   const onEscKey = (e) => {
//     if (e.code === "Escape") {
//       modalImg.close();
//       // window.removeEventListener("keydown", onEscKey);
//       removeListenerIfNotVisible(modalImg, onEscKey);
//       console.log(e);
//     } else {
//       return;
//     }
//   };
//   window.addEventListener("keydown", onEscKey);
// }

// function removeListenerIfNotVisible(modalImg, onEscKey) {
//   if (!modalImg.visible()) window.removeEventListener("keydown", onEscKey);
// }
