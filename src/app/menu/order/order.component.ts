import { Component, OnInit, Input } from '@angular/core';
import { OrderTotalService } from '../../order-total.service';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() orders: [];
  total: number;
  
  constructor(private orderTotal: OrderTotalService) {
  }

  ngOnInit() {
    this.getTotal().subscribe(total => this.total = total);
  }

  getTotal(): void {
    return this.orderTotal.totalCalc();
  }


}
