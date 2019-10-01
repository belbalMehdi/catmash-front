import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../cat.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.getCatRanking().subscribe(cats => {
      this.cats = cats;
    });
  }

}
