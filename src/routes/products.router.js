import { Router } from "express";

const router = Router();
const products = [
    {
        id: 1,
        name: 'Camiseta Deportiva',
        price: 150,
        categories: ['ropa', 'deportes']
    },
    {
        id: 2,
        name: 'Zapatos Running',
        price: 1200,
        categories: ['calzado', 'deportes']
    },
    {
        id: 3,
        name: 'Mochila Deportiva',
        price: 350,
        categories: ['mochilas', 'deportes']
    },
    {
        id: 4,
        name: 'Auriculares HD',
        price: 800,
        categories: ['tecnología', 'audio']
    },
]

router.get("/products", (req, res) => {
    const {category} = req.query;

    if (category) {
        const productsFilter = products.filter((item) => item.categories.includes(category));

    res.json(productsFilter)

    } else 
    {
        res.json(products);
    }
});

router.get("/products", (req, res) => {
    const {category} = req.query;

    if (category) {
        const productsFilter = products.filter((item) => item.categories.includes(category));

    res.json(productsFilter)

    } else 
    {
        res.json(products);
    }
});

router.get("/products/search", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({error: 'El nombre es requerido'})
    }
    const productsFiltered = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

    if (!productsFiltered || productsFiltered.length == 0) {
        return res.status(404).json({error: 'No se encontraron productos    '})        
    }
    return res.json(productsFiltered);
    
});

router.get("/products/:id", (req, res) => {
    const id = +req.params.id;
    

    const product = products.find((item) => item.id == id);

    if (!product) {
        res.status(404).json({error: 'No existe el producto'})
    }
    res.json(product);
});
export default router;