import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodImagesComponent } from '../food-all-images/food-images.component';
import { FoodClickedComponent } from '../food-clicked-images/food-clicked.component';

const appRoutes: Routes = [
  {
    path: "images",
    component: FoodImagesComponent
  },
  {
    path: "",
    redirectTo: "/images",
    pathMatch: "full"
  },
  {
    path: "onclick",
    component: FoodClickedComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
