import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  {
        path: 'recipe/:id/:s',
        component: RecipeComponent,
        data: { title: 'Recipe'}
  },
  {
    path: 'search',
    component: SearchResultsComponent,
    data: { title: 'Search Results'}
  },
  {
    path: 'category/:cat',
    component: CategoryComponent,
    data: { title: 'Category'}
  },
  {path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
