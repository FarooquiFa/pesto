const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    try {
        const newProduct = await Product.create({ name, description, price, stock, version: 1 });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, version } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        if (product.version !== version) {
            return res.status(409).json({ message: 'Conflict error: Product version mismatch' });
        }
        product.name = name;
        product.description = description;
        product.price = price;
        product.stock = stock;
        product.version += 1;
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.destroy();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct };
