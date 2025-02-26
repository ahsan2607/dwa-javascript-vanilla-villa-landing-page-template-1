const imageDirectory = (directory, image) => {
  return directory ? `./assets/images/${directory}/${image}` : `./assets/images/${image}`;
};

export const image = imageDirectory("", "image.png");
export const banner = imageDirectory("", "banner.jpg");
export const logo = imageDirectory("", "logo.png");
export const gallery1 = imageDirectory("", "gallery-1.jpg");
export const gallery2 = imageDirectory("", "gallery-2.jpg");
export const gallery3 = imageDirectory("", "gallery-3.jpg");
export const gallery4 = imageDirectory("", "gallery-4.jpg");
