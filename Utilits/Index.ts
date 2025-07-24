 export const images = [
  {
    src: "/01.png",
    head: "Bedroom",
    headTwo: "Comfortable beds and cozy mattresses",
    alt: "Bedroom furniture",
  },
  {
    src: "/02.png",
    head: "Living Room",
    headTwo: "Stylish sofas and relaxing chairs",
    alt: "Living room furniture",
  },
  {
    src: "/03.png",
    head: "Bathroom",
    headTwo: "Modern cabinets and elegant countertops",
    alt: "Bathroom interior",
  },
  {
    src: "/04.png",
    head: "Decoration",
    headTwo: "Creative décor and artistic touches",
    alt: "Decor elements",
  },
  {
    src: "/05.png",
    head: "Office",
    headTwo: "Efficient desks and smart storage",
    alt: "Office workspace",
  },
  {
    src: "/06.png",
    head: "Kitchen",
    headTwo: "Organized shelves and functional storage",
    alt: "Kitchen units",
  },
];

export const Products = [
  {
    id: 1,
    src: "/02.png",
    Hover: "/featured-product-thumbnail.jpg",
    head: "Living Room",
    alt: "Living room furniture",
    price: 1200,
  },
  {
    id: 2,
    src: "/th03.png",
    Hover: "/04-hover.jpg",
    head: "Bathroom",
    alt: "Bathroom interior",
    price: 950,
  },
  {
    id: 3,
    src: "/04.png",
    Hover: "/02-hover.jpg",
    head: "Decoration",
    alt: "Decor elements",
    price: 400,
  },
  {
    id: 4,
    src: "/05.png",
    Hover: "/05.png",
    head: "Office",
    alt: "Office workspace",
    price: 1800,
  },
  {
    id: 5,
    src: "/06.png",
    Hover: "/06-hover.jpg",
    head: "Kitchen",
    alt: "Kitchen units",
    price: 2200,
  },
  {
    id: 6,
    src: "/07.png",
    Hover: "/07-hover.jpg",
    head: "Kitchen",
    alt: "Kitchen units",
    price: 2100,
  },
  {
    id: 7,
    src: "/08.png",
    Hover: "/08-hover.jpg",
    head: "Kitchen",
    alt: "Kitchen units",
    price: 2300,
  },
];




 export interface CartItem {
  id: number;
  head: string;
  price: number;
  image: string;
}