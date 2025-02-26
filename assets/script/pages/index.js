import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Navbar, Carousel, Abouts, Services, Section, MessageForm, Map, FloatButton, Gallery, CardSlider } from "../component/index.js";
import { dataHeaderNavigation, dataHeaderCarousel, dataAbout, dataService, dataContact, dataGallery, dataTestimonials } from "../content/index.js";
import { whatsappIcon } from "../content/graphic/icons.js";

MainLayout(
  () => {
    const { element, ui } = Carousel(dataHeaderCarousel, {
      headerNavigationId: Navbar(dataHeaderNavigation.links, dataHeaderNavigation.logo, dataHeaderNavigation.name).element.id,
      autoPlay: true,
      interval: 5000,
    });
    appendElement("header", element, ui);
  },
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(dataAbout, { withButton: true });
    const { element, ui } = Section("villa-about", "About the Villa", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elServices, ui: uiServices } = Services(dataService);
    const { element, ui } = Section("villa-services", "Our Facilities & Services", () => elServices, uiServices);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elGallery, ui: uiGallery } = Gallery(dataGallery);
    const { element, ui } = Section("gallery", "Photo Gallery", () => elGallery, uiGallery);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elCardSlider, ui: uiCardSlider } = CardSlider(dataTestimonials);
    const { element, ui } = Section("guest-review", "Guest Reviews", () => elCardSlider, uiCardSlider);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
    const { element, ui } = Section("booking-form", "Book Your Stay", () => elMessageForm, uiMessageForm);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("main", Map(dataContact.map).element);
  },
  () => {
    appendElement("footer", FloatButton({ link: "https://wa.me/", icon: whatsappIcon }).element);
  }
);
