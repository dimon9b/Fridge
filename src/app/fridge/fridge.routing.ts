import {RouterModule, Routes} from "@angular/router";
import {FridgeComponent} from "./fridge.component";
import {ModifyingUserProdlistComponent} from "./components/modifying-user-prodlist/modifying-user-prodlist.component";
import {NgModule} from "@angular/core";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {ProductListComponent} from "../shared/components/product-list/product-list.component";

const FRIDGE_ROUTES: Routes = [
  {
    path: '', component: FridgeComponent, children: [
      {path: 'modify', component: ModifyingUserProdlistComponent},
      {path: 'add', component: AddProductComponent},
      {path: 'my-list', component: ProductListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(FRIDGE_ROUTES)],
  exports: [RouterModule]
})
export class FridgeRoutingModule {

}
