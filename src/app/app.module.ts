import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './listings/header/header.component';
import { ContentComponent } from './listings/content/content.component';
import { SearchComponent } from './search/search.component';
import { ListingsComponent } from './listings/listings.component';

//Services
import { ListingsService } from './listings/listings.service';
import { HeaderService } from './listings/header/header.service';

//Modules imported
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const appRoutes: Routes = [
  { path: 'videolistings', component: ListingsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: "/videolistings", pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SearchComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule
  ],
  providers: [ListingsService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
