import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './listings/header/header.component';
import { ContentComponent } from './listings/content/content.component';
import { SearchComponent } from './search/search.component';
import { ListingsComponent } from './listings/listings.component';

//Services
import { ListingsService } from './listings/listings.service';

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
    InfiniteScrollModule
  ],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
