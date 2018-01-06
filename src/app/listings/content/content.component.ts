import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cards: CardModel[];

  constructor() { }

  ngOnInit() {
    this.cards = [];
    let response = { "page": { "title": "Romantic Comedy", "total-content-items": "54", "page-num-requested": "1", "page-size-requested": "20", "page-size-returned": "20", "content-items": { "content": [{ "name": "The Birds", "poster-image": "poster1.jpg" }, { "name": "Rear Window", "poster-image": "poster2.jpg" }, { "name": "Family Pot", "poster-image": "poster3.jpg" }, { "name": "Family Pot", "poster-image": "poster2.jpg" }, { "name": "Rear Window", "poster-image": "poster1.jpg" }, { "name": "The Birds", "poster-image": "poster3.jpg" }, { "name": "Rear Window", "poster-image": "poster3.jpg" }, { "name": "The Birds", "poster-image": "poster2.jpg" }, { "name": "Family Pot", "poster-image": "poster1.jpg" }, { "name": "The Birds", "poster-image": "poster1.jpg" }, { "name": "The Birds", "poster-image": "poster1.jpg" }, { "name": "Rear Window", "poster-image": "poster2.jpg" }, { "name": "Family Pot", "poster-image": "poster3.jpg" }, { "name": "Family Pot", "poster-image": "poster2.jpg" }, { "name": "Rear Window", "poster-image": "poster1.jpg" }, { "name": "The Birds", "poster-image": "poster3.jpg" }, { "name": "Rear Window", "poster-image": "poster3.jpg" }, { "name": "The Birds", "poster-image": "poster2.jpg" }, { "name": "Family Pot", "poster-image": "poster1.jpg" }, { "name": "The Birds", "poster-image": "poster1.jpg" }] } } };
    let cardArray = response.page['content-items'].content;
    for (let i = 0; i < cardArray.length; i++) {
      this.cards.push(new CardModel(cardArray[i].name, cardArray[i]['poster-image']));
    }
  }

}
