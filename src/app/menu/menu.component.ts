import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-list.service';
export interface Order{
  type: string;
  price: number;
  instructions: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  orders: Order[] = [];
  instructions: string = '';
  coffee: string;
  tea: string;
  latte: string;

  constructor(private menulist: MenuListService) { }

  ngOnInit() {
    this.coffee = this.menulist.menu[0];
    this.tea = this.menulist.menu[1];
    this.latte = this.menulist.menu[2];
  }

  addToOrder(type: string, price: number, inst: string) {
    this.orders.push({type, price, instructions: inst});
    this.instructions = '';
  }

  addCoffee() {
    this.addToOrder(this.coffee, 3, this.instructions);
  }

  addTea() {
    this.addToOrder(this.tea, 2, this.instructions);
  }

  addLatte() {
    this.addToOrder(this.latte, 5, this.instructions);
  }

  clearAll() {
    this.orders = [];
  }
 
}
