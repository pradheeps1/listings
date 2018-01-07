import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.model';
import { ListingsService } from '../listings.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards: CardModel[] = [];
  currentPage: number = 1;
  finished = false;

  constructor(private listingsService: ListingsService, private headerService: HeaderService) { }

  ngOnInit() {
    this.populateData();
  }

  getListingCards() {
    this.listingsService.getContentListingPage(this.currentPage++)
      .subscribe((response) => this.processResponseCards(response));
  }

  processResponseCards = (cardsRes) => {
    let response = cardsRes.json();
    let cardsData = response.page['content-items'].content;
    this.headerService.listingsSubject.next(response.page.title);
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
