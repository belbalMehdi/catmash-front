import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RateComponent } from './rate/rate.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingCatComponent } from './ranking-cat/ranking-cat.component';
import { RateCatComponent } from './rate-cat/rate-cat.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RateComponent,
    RankingComponent,
    RankingCatComponent,
    RateCatComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
