import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    //http://localhost:4200/categories
    path: '', component: CategoryListComponent,
  },
  {
    //http://localhost:4200/categories/new
    path: 'new', component: CategoryFormComponent
  },
  {
    //http://localhost:4200/categories/2
    path: ':id', component: CategoryFormComponent
  },
  {
    //http://localhost:4200/categories/2/edit
    path: ':id/edit', component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
