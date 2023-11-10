import { Component, OnInit } from '@angular/core';
import { NewUser, IfElse } from '../models/ifElse.model';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {
  newUsers: NewUser[] = [];
  progress: any;
  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllTopCards().subscribe((res: IfElse) => {
      this.newUsers = res.new_users;
    })
  }

}
