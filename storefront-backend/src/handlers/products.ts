import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import verifyAuthToken from '../middleware/verifyAuthToken';

const store = new ProductStore();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await store.show(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    };

    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: Product = {
      id: parseInt(req.params.id),
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    };
    const updatedProduct = await store.update(product);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const destroy = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct = await store.delete(req.params.id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const productsByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await store.productsByCategory(req.params.category);
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const productRoutes = (app: express.Application): void => {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', verifyAuthToken, create);
  app.put('/products/:id', verifyAuthToken, update);
  app.delete('/products/:id', verifyAuthToken, destroy);
  app.get('/products/category/:category', productsByCategory);
}

export default productRoutes;
