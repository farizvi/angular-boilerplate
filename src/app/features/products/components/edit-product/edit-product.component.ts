import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  message = `View details of product Id: ${this.activatedRoute.snapshot.params['id']}`
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
