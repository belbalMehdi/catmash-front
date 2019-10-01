import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { RankingComponent } from './ranking/ranking.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
