import * as Model from "../models/Product.js";

const products = Model.getDataProducts()

export const getAllProducts = (req, res) => {
  const { category } = req.query;

  if (category) {
    const productsFilter = products.filter((item) =>
      item.categories.includes(category)
    );

    return res.json(productsFilter);
  } else {
    return res.json(products);
  }
};

export const searchProducts = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }
  const productsFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (!productsFiltered || productsFiltered.length == 0) {
    return res.status(404).json({ error: "No se encontraron productos    " });
  }
  return res.json(productsFiltered);
};

export const getProductById = (req, res) => {
  const id = +req.params.id;

  const product = products.find((item) => item.id == id);

  if (!product) {
    return res.status(404).json({ error: "No existe el producto" });
  }
  return res.json(product);
};
