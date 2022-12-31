import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [];

  constructor(private service: ProductService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe((response: any) => {
      if (response.status == 'success') this.products = response.data;
      else this.toastr.error(response.error);
    });
  }
}
