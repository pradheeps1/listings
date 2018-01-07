import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle: string;

  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit() {
    this.headerService.listingsSubject.subscribe(
      (title: string) => this.headerTitle = title
    );
  }

  onClickSearch() {
    this.router.navigate(['/search']);
  }

}
