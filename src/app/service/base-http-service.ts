import axios from 'axios';
import { Category } from './../models/category.model'
import { Product } from './../models/product.model'
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass>  {
    //data: TypeClass[] = [];

    constructor(
        protected url: string
    ) { }

    async getAll(){
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO){
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
}

// const service = new BaseHttpService<String>();
// service.getAll();

// const service2 = new BaseHttpService<Category>();
// service2.getAll

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productsService = new BaseHttpService<Product>(url1);

    const rta = await productsService.getAll()
    console.log('products', rta.length);
    productsService.update<Product['id'], UpdateProductDto>(1, {
        title: 'asa',
    });

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const CategoryService = new BaseHttpService<Category>(url1);

    const rta1 = await CategoryService.getAll()
    console.log('categories', rta1.length);
})();