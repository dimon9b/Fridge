import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
