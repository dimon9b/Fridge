import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FridgeComponent} from "./fridge.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {ModifyingUserProdlistComponent} from "./components/modifying-user-prodlist/modifying-user-prodlist.component";
import {ModifyingUserProdItemComponent} from "./components/modifying-user-prod-item/modifying-user-prod-item.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {Ng2CompleterModule} from "ng2-completer";
import {FridgeRoutingModule} from "./fridge.routing";

@NgModule({
  imports: [
    CommonModule,
    FridgeRoutingModule,
    SharedModule,
    FormsModule,
    Ng2CompleterModule
  ],
  declarations: [
    FridgeComponent,
    AddProductComponent,
    ModifyingUserProdlistComponent,
    ModifyingUserProdItemComponent
  ]
})
export class FridgeModule { }
