import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { CardModel } from '../listings/content/card.model';
import { ListingsService } from '../listings/listings.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = "";
  noResultsFound = false;
  cardsToSearch: CardModel[] = [];
  cardsSearched: CardModel[] = [];

  constructor(
    private router: Router,
    private listingsService: ListingsService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.populateAPIResponse();
    this.renderer.selectRootElement('#searchinput').focus();
  }

  clearSearchField() {
    this.searchText = "";
    this.cardsSearched = [];
    this.noResultsFound = false;
  }

  // The compelete JSON data is populated in cardsToSearch and reused while searching.
  // Ideally a search API should be used to do this, for time being i used a static way to search.
  populateAPIResponse() {
    this.cardsToSearch = [];
    let currentPage = 1;
    for (; currentPage <= 3; currentPage++) {
      this.listingsService.getContentListingPage(currentPage)
        .subscribe((response) => this.processResponseCards(response));
    }
  }

  processResponseCards = (cardsRes) => {
    let response = cardsRes.json();
    let cardsData = response.page['content-items'].content;

    for (let i = 0; i < cardsData.length; i++) {
      this.cardsToSearch.push(new CardModel(cardsData[i].name, cardsData[i]['poster-image']));
    }
  }

  onSearchChange() {
    this.cardsSearched = [];
    this.noResultsFound = false;
    if (this.searchText === "") return;
    this.cardsSearched = this.cardsToSearch.filter(card => card.name.toLowerCase().includes(this.searchText.toLowerCase()));
    if (this.cardsSearched.length == 0)
      this.noResultsFound = true;
  }

}
