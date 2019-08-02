import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
//   { path: 'login', component: SigninComponent },
//   { path: 'recipes', component: RecipesComponent },
//   { path: 'recipe/id', component: RecipeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
