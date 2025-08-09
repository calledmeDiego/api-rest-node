import * as Model from "../models/Product.js";

const products = await Model.getDataProducts();

export const getAllProducts = async (req, res) => {
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

export const searchProducts = async (req, res) => {
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

export const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await Model.getDataById(id);

  if (!product) {
    return res.status(404).json({ error: "No existe el producto" });
  }
  return res.json(product);
};
