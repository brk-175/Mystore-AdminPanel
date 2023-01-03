import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories = [];

  constructor(
    private modalService: NgbModal,
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

  onAdd() {
    const modalRef = this.modalService.open(CategoryAddComponent);
    modalRef.result.finally(() => {
      this.getAllCategories();
    });
  }
}
