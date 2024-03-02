import { Product, ProductStore } from '../../../../src/models/product';

const productStore = new ProductStore();

describe('Product model', () => {
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });
  
  it('should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  it('should have an update method', () => {
    expect(productStore.update).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(productStore.delete).toBeDefined();
  });

  it('index method should list all products', async () => {
    const result = await productStore.index();
    expect(result).toEqual([]);
  });

  it('create method should add a product', async () => {
    const result = await productStore.create({
      name: 'Test Product',
      price: 100,
      category: 'Toys'
    });
    expect(result).toEqual({
      id: 2,
      name: 'Test Product', 
      price: 100,
      category: 'Toys'
    });
  });

  it('show method should return the specified product', async () => {
    const result = await productStore.show('2');
    expect(result).toEqual({
      id: 2,
      name: 'Test Product',
      price: 100,
      category: 'Toys'
    });
  });

  it('update method should update the specified product', async () => {
    const productToUpdate: Product = {
      id: 2,
      name: 'New Name',
      price: 200,
      category: 'New Category'
    };
    const result = await productStore.update(productToUpdate);
    expect(result).toEqual({
      id: 2,
      name: 'New Name',
      price: 200,
      category: 'New Category'
    });
  });

  it('productByCategory should return all products in a category', async () => {
    const result = await productStore.productsByCategory('New Category');
    expect(result).toEqual([{
      id: 2,
      name: 'New Name',
      price: 200,
      category: 'New Category'
    }]);
  });
});