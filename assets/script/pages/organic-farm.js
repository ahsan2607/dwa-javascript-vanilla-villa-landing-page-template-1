import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Navbar, Hero, Abouts, Services, Products, Section, MessageForm, Map, FloatButton } from "../component/index.js";
import { dataHeaderNavigation, dataHeaderBanner, dataAbout, dataService, dataProduct, dataContact } from "../content/index.js";
import { whatsappIcon } from "../content/graphic/icons.js";
import { banner } from "../content/graphic/images.js";

MainLayout(
  () => {
    const renderHero = Hero({
      title: dataHeaderBanner.title,
      desc: dataHeaderBanner.desc,
      bgImg: banner,
      headerNavigationId: Navbar(dataHeaderNavigation.links, { logo: dataHeaderNavigation.logo, name: dataHeaderNavigation.name }).element.id,
    });
    appendElement("header", renderHero.element, renderHero.ui);
  },
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(dataAbout, { withButton: true });
    const { element, ui } = Section("about-us", "About Our Farm", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elServices, ui: uiServices } = Services(dataService);
    const { element, ui } = Section("farm-services", "Our Services", () => elServices, uiServices);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elProducts, ui: uiProducts } = Products(dataProduct, { isFeatured: true, directLink: "products.html", additionalClassList: "container", withDirectLink: true });
    const { element, ui } = Section("farm-products", "Our Organic Products", () => elProducts, uiProducts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
    const { element, ui } = Section("contact-us", "Contact Us", () => elMessageForm, uiMessageForm);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("main", Map(dataContact.map).element);
  },
  () => {
    appendElement("footer", FloatButton({ link: "https://wa.me/", icon: whatsappIcon }).element);
  }
);
