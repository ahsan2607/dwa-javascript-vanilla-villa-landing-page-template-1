import { createCustomElement } from "../../element/index.js";

export const Gallery = (images = []) => {
  const galleryContainer = createCustomElement("div", { class: "gallery container" });

  // Lightbox Elements
  const lightbox = createCustomElement("div", { class: "lightbox hidden" });
  const lightboxImage = createCustomElement("img", { class: "lightbox-image" });
  const closeButton = createCustomElement("button", { class: "lightbox-close", textContent: "✖" });
  const prevButton = createCustomElement("button", { class: "lightbox-prev", textContent: "◀" });
  const nextButton = createCustomElement("button", { class: "lightbox-next", textContent: "▶" });

  lightbox.append(lightboxImage, closeButton, prevButton, nextButton);
  document.body.appendChild(lightbox);

  let currentIndex = 0;

  // Function to open lightbox
  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.classList.remove("hidden");
  };

  // Function to close lightbox
  const closeLightbox = () => {
    lightbox.classList.add("hidden");
  };

  // Function to navigate images
  const navigateLightbox = (direction) => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImage.src = images[currentIndex];
  };

  // Create gallery items
  images.forEach((src, index) => {
    const imgElement = createCustomElement("img", { class: "gallery-item", src });
    imgElement.addEventListener("click", () => openLightbox(index));
    galleryContainer.appendChild(imgElement);
  });

  return {
    element: galleryContainer,
    ui: () => {
      // Add event listeners
      closeButton.addEventListener("click", closeLightbox);
      prevButton.addEventListener("click", () => navigateLightbox(-1));
      nextButton.addEventListener("click", () => navigateLightbox(1));
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      
      document.querySelectorAll('[class="gallery-item"]').forEach((element) => {
        element.style.minHeight = element.clientWidth + "px";
        element.style.maxHeight = element.clientWidth + "px";
      });
    },
  };
};
