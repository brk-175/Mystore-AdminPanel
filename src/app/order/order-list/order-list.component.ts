import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  orders = [];

  constructor(private service: OrderService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders().subscribe((response: any) => {
      if (response.status == 'success') {
        this.orders = response.data;
        this.orders.map((order: any) => {
          order.createdOn = order.createdOn.split('T')[0];
        });
      } else this.toastr.error(response.error);
    });
  }

  updateStatus(id: number, orderStatus: number) {
    this.service
      .updateOrderStatus(id, orderStatus)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.getOrders();
          this.toastr.success('Order Status Changed !');
        } else this.toastr.error(response.error);
      });
  }
}
