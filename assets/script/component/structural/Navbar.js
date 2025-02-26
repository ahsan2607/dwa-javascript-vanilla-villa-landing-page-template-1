import { createCustomElement } from "../../element/index.js";

export const Navbar = (navs = [], attribute = { logo: "", name: "" }) => {
  const { logo, name } = attribute;

  const NavbarMenuButton = createCustomElement("i", { class: "navbar-menu-button", class: "fa fa-list-ul" });
  const NavbarMenu = createCustomElement("div", { class: "navbar-menu" }, [NavbarMenuButton]);
  const NavbarBrand = createCustomElement("div", { class: "navbar-brand" }, [
    createCustomElement("img", { loading: "lazy", src: logo, alt: "" }),
    name ? createCustomElement("strong", { textContent: name }) : null,
  ]);
  const NavbarLinks = createCustomElement("div", { class: "navbar-links" }, [
    createCustomElement(
      "ul",
      {},
      navs.map((link) => createCustomElement("li", {}, [createCustomElement("a", { href: link.link, textContent: link.text })]))
    ),
  ]);

  return {
    element: createCustomElement("nav", { id: "navbar", class: "navbar" }, [NavbarBrand, NavbarMenu, NavbarLinks]),
    ui: () => {
      const responsiveMenu = () => {
        if (window.innerWidth < 769) {
          NavbarLinks.classList.add("navbar-hide_element");
          NavbarBrand.classList.add("navbar-hide_element");
        } else {
          NavbarLinks.classList.remove("navbar-hide_element");
          NavbarBrand.classList.remove("navbar-hide_element");
        }
      };

      const toggleMenu = () => {
        NavbarLinks.classList.toggle("navbar-hide_element");
        NavbarMenuButton.classList.toggle("fa-list-ul");
        NavbarMenuButton.classList.toggle("fa-chevron-up");
      };

      window.addEventListener("resize", responsiveMenu);
      window.addEventListener("load", responsiveMenu);
      NavbarMenuButton.addEventListener("click", toggleMenu);
    },
  };
};
