import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEls = document.querySelector(".gallery");
// console.log(galleryEls);

const createImageItem = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const arrImages = galleryItems.map(createImageItem).join("");
// console.log(arrImages);
galleryEls.insertAdjacentHTML("beforeend", arrImages);

galleryEls.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="1280" height="100%">
`,
    { closable: false }
  );

  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
