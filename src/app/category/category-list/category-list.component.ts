import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories = [];

  constructor(
    private service: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe((response: any) => {
      if (response.status == 'success') this.categories = response.data;
      else this.toastr.error(response.error);
    });
  }
}
