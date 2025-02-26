import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Navbar, Hero, Abouts, Services, CardSlider, Products, MessageForm, Section, Map } from "../component/index.js";
import { dataHeaderNavigation, dataHeaderBanner, dataAbout, dataProduct, dataService, dataContact } from "../content/index.js";
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
    const { element: elAbouts, ui: uiAbouts } = Abouts(dataAbout, { withButton: true });
    const { element, ui } = Section("about-restaurant", "About Our Restaurant", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elProducts, ui: uiProducts } = Products(dataProduct, { additionalClassList: "container" });
    const { element, ui } = Section("Products", "Our Menu", () => elProducts, uiProducts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elServices, ui: uiServices } = Services(dataService);
    const { element, ui } = Section("services", "Our Services", () => elServices, uiServices);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elCardSlider, ui: uiCardSlider } = CardSlider();
    const { element, ui } = Section("CardSlider", "Customer Reviews", () => elCardSlider, uiCardSlider);
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
