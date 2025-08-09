import { error } from "console";
import * as Model from "../models/Product.js";

const products = await Model.getDataProducts();

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


export const createProduct = async (req, res) => {
  const {name, price, categories } = req.body;
  const product = await Model.postNewData({name, price, categories});
  res.status(201).json(product  );
}

export const deleteProduct = async (req, res) => {

  const { id } = req.params;
  const deleted = await Model.deleteData(id);
  
  if (!deleted) {
    return res.status(404).json({
      error: 'Producto no encontrado'
    })
  }
  res.status(204).send();
}
