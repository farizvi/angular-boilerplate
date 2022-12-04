import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/common/services/base.service';
import { IProductsResult } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  async getProducts() {
    return (await this.get<IProductsResult>('/products')).pipe(
      map((data) => data)
    );
  }
}
