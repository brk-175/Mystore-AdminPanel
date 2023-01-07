import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from './admin/admin.service';
import { LoginComponent } from './admin/login/login.component';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AdminService],
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    canActivate: [AdminService],
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
    canActivate: [AdminService],
  },
  {
    path: 'category-add',
    component: CategoryAddComponent,
    canActivate: [AdminService],
  },
  {
    path: 'brand-add',
    component: BrandAddComponent,
    canActivate: [AdminService],
  },
  {
    path: 'brand-list',
    component: BrandListComponent,
    canActivate: [AdminService],
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AdminService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
