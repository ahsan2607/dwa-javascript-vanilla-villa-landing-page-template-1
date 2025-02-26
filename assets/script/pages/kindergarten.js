import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Navbar, Hero, Abouts, CardSlider, MessageForm, Section, Map, Gallery } from "../component/index.js";
import { dataHeaderNavigation, dataHeaderBanner, dataAbout, dataContact, dataGallery } from "../content/index.js";
import { banner } from "../content/graphic/images.js";

MainLayout(
  () => {
    const renderHero = Hero({
      title: dataHeaderBanner.title,
      desc: dataHeaderBanner.desc,
      bgImg: banner,
      headerNavigationId: Navbar(dataHeaderNavigation.links, dataHeaderNavigation.logo, dataHeaderNavigation.name).element.id,
    });
    appendElement("header", renderHero.element, renderHero.ui);
  },
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(
      dataAbout,
      { withButton: true }
    );
    const { element, ui } = Section("about-kindergarten", "About Our Kindergarten", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  // () => {
  //   const { element: elPrograms, ui: uiPrograms } = Programs(dataPrograms);
  //   const { element, ui } = Section("programs", "Our Programs", () => elPrograms, uiPrograms);
  //   appendElement("main", element, ui);
  // },
  () => {
    const { element: elGallery, ui: uiGallery } = Gallery(dataGallery);
    const { element, ui } = Section("gallery", "Photo Gallery", () => elGallery, uiGallery);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elCardSlider, ui: uiCardSlider } = CardSlider();
    const { element, ui } = Section("CardSlider", "Parent Reviews", () => elCardSlider, uiCardSlider);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
    const { element, ui } = Section("message-form", "Contact Us", () => elMessageForm, uiMessageForm);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("main", Map(dataContact.map).element);
  }
);
