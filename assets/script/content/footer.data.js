import { phoneIcon, emailIcon, mapIcon } from "./graphic/icons.js";
import { dataHeaderNavigation } from "./navbar.data.js";

export const dataFooter = {
  contact: {
    title: "Contacts",
    list: [
      { title: "Phone", content: "+1 234 567 890", icon: phoneIcon },
      { title: "Email", content: "info@villalumina.com", icon: emailIcon },
      { title: "Address", content: "Celestia Bay, Aurora Islands", icon: mapIcon },
    ],
  },
  link: {
    title: "Link",
    list: dataHeaderNavigation.links.map((item) => {
      return { href: item.link, text: item.text };
    }),
    // [
    // { href: "./index.html", text: "Home" },
    // { href: "./about.html", text: "About Us" },
    // { href: "./product.html", text: "Products" },
    // { href: "./contact.html", text: "Contacts" },
    // ],
  },
  copyright: "All right reserved. Made with interest",
};
