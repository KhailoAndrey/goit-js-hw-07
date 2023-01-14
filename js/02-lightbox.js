import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEls = document.querySelector(".gallery");

const createImageItem = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>    
    `;
};

const arrImages = galleryItems.map(createImageItem).join("");
galleryEls.insertAdjacentHTML("beforeend", arrImages);
console.log(galleryEls);

galleryEls.addEventListener("click", (event) => {
  event.preventDefault();
  gallery.on("show.simplelightbox");
});
let gallery = new SimpleLightbox(".gallery a", {
  // captions: true,
  // captionSelector: "img",
  captionType: "${event.target.alt}",
  // captionsData: "title",
  captionPosition: "bottom",
  captionDelay: 250,
});
