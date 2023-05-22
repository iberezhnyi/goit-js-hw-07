import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const markup = (arr) =>
  arr
    .map(
      ({ preview, original, description }) => `
  <li li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="380"
      />
    </a>
  </li>
  `
    )
    .join("");

let instance;

galleryRef.innerHTML = markup(galleryItems);
galleryRef.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const isImg = evt.target.classList.contains("gallery__image");

  if (!isImg) {
    return;
  }

  instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800">
  `);

  instance.show();

  window.addEventListener("keydown", onEsc);
}

function onEsc(evt) {
  if (evt.code !== "Escape") {
    return;
  }

  instance.close();
  window.removeEventListener("keydown", onEsc);
}
