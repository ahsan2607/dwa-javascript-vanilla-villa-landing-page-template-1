import { phoneIcon, emailIcon, mapIcon } from "./graphic/icons.js";

export const dataFooter = {
  contact: {
    title: "Contacts",
    list: [
      { title: "Phone", content: "+1 234 567 890", icon: phoneIcon },
      { title: "Email", content: "info@luxuryvilla.com", icon: emailIcon },
      { title: "Address", content: "123 Villa Street, Oceanview, CA", icon: mapIcon },
    ],
  },
  link: {
    title: "Link",
    list: [
      { href: "./index.html", text: "Home" },
      { href: "./about.html", text: "About Us" },
      { href: "./product.html", text: "Products" },
      { href: "./contact.html", text: "Contacts" },
    ],
  },
  copyright: "All right reserved. Made with interest",
};
