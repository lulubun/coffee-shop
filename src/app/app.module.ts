import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './menu/order/order.component';
import { MenuListService } from './menu-list.service';
import { OrderTotalService } from './order-total.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    MenuListService,
    OrderTotalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
