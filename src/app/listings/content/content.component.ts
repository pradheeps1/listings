import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.model';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards: CardModel[] = [];
  currentPage: number = 1;
  finished = false;

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.populateData();
  }

  getListingCards() {
    this.listingsService.getContentListingPage(this.currentPage)
      .subscribe((response) => this.processResponseCards(response));
  }

  private processResponseCards = (cardsRes) => {
    let cardsData = cardsRes.json().page['content-items'].content;
    this.currentPage++;
    if (this.currentPage === 4)
      this.finished = true;
    for (let i = 0; i < cardsData.length; i++) {
      this.cards.push(new CardModel(cardsData[i].name, cardsData[i]['poster-image']));
    }
  }

  populateData() {
    if (this.finished) return;
    this.getListingCards();
  }
}
