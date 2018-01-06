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
    this.listingsService.getContentListingPage(this.currentPage++)
      .subscribe((response) => this.processResponseCards(response));
  }

  private processResponseCards = (cardsRes) => {
    let response = cardsRes.json();
    let cardsData = response.page['content-items'].content;
    if (response.page['page-size-requested'] !== response.page['page-size-returned'])
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
