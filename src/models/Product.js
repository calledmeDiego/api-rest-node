const products = [
  {
    id: 1,
    name: "Camiseta Deportiva",
    price: 150,
    categories: ["ropa", "deportes"],
  },
  {
    id: 2,
    name: "Zapatos Running",
    price: 1200,
    categories: ["calzado", "deportes"],
  },
  {
    id: 3,
    name: "Mochila Deportiva",
    price: 350,
    categories: ["mochilas", "deportes"],
  },
  {
    id: 4,
    name: "Auriculares HD",
    price: 800,
    categories: ["tecnología", "audio"],
  },
];

export const getDataProducts = () => {
    return products;
}