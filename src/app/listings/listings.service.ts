import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ListingsService {
    constructor(private http: Http) { }

    getContentListingPage(page: number = 1) {
        return this.http.get('./assets/API/CONTENTLISTINGPAGE-PAGE' + page + '.json');
    }
}
