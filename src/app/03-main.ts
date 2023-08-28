import { ProductHttpService } from './service/product-http-service';

(async () => {
    const productService = new ProductHttpService();

    console.log('--'.repeat(10));
    console.log('getAll');
    
    const products = await productService.getAll();
    console.log(products.length);
    

    const productId = products[1].id;
    console.log('--'.repeat(10));
    console.log('update');
    await productService.update(productId, {
        price: 1000,
        title: 'nuevo title',
        description: 'new description'
    });
    
    console.log('--'.repeat(10));
    console.log('findONE');
    const product = await productService.findOne(productId);
    console.log(product);
    
})();

