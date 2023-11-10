import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { IfElse, TopCard } from '../models/ifElse.model';
import { faMusic, IconDefinition, faCoffee, faPieChart, faDownload, faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss']
})
export class DataCardsComponent implements OnInit {
  topCards: TopCard[] = [];
  faMusic = faMusic;
  icons: IconDefinition[] = [faMusic, faPieChart, faDownload, faRefresh];
  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllTopCards().subscribe((res: IfElse) => {
      this.topCards = res.top_cards;
    })
  }
}
