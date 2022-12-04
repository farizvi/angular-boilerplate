import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { AlertifyService } from 'src/app/common/services/alertify.service';
import { IProduct, IProductsResult } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: any;

  constructor(
      private productsService: ProductsService, 
      private alertify: AlertifyService
    ) { }

  async ngOnInit(): Promise<void> {
    const result = await this.productsService.getProducts();
    console.log(result);
    result.subscribe({
      next: res => this.products = res,
      error: (e) => console.log(e.message),
    })
  }

  deleteItem(id: number) {
    this.alertify.confirm("Are you sure you want to delete this item?", () => console.log('Deleting... ' + id));    
  }

}
