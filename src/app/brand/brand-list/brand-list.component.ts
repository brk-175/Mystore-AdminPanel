import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent {
  brands = [];

  constructor(
    private service: BrandService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands() {
    this.service.getAllBrands().subscribe((response: any) => {
      if (response.status == 'success') this.brands = response.data;
      else this.toastr.error(response.error);
    });
  }
}
