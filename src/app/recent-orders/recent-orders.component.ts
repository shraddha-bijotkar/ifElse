import { Component, OnInit } from '@angular/core';
import { RecentOrder, IfElse, Status } from '../models/ifElse.model';
import { CardsService } from '../services/cards.service';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';

declare var window: any;

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
  recentOrders: RecentOrder[] = [];
  recentOrderKeys: string[] = [];
  recentOrderHeadings: string[] = ['Customer', 'Products', 'Delivery Date', 'Status', 'Tracking No#', 'Shipping'];
  status = Status;
  faClose: IconDefinition = faClose;
  closingOrder: string = '';
  closeModal: any;
  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.getRecentOrders();
    this.closeModal = new window.bootstrap.Modal(
      document.getElementById('closeModal')
    );
  }

   getRecentOrders() {
      this.cardsService.getAllTopCards().subscribe((res: IfElse) => {
      this.recentOrders = res.recent_orders;

      this.getKeys();
    });

    
  }

  getKeys() {
    Object.keys(this.recentOrders[0]).forEach(value => {
      this.recentOrderKeys = [...this.recentOrderKeys, value];
    });
  }

  findStatus(status: string) : string {
    let value = status === 'Paid' ? Status.Paid : status === 'Failed' ? Status.Failed : status === 'Pending' ? Status.Pending : 'secondary';
    return 'btn btn-' + value;
  }

  onClose(recentOrder: RecentOrder) {
    this.closingOrder = `${recentOrder.name}` + ' has brought ' + `${recentOrder.product}`;
    this.closeModal.show();
  }
}
