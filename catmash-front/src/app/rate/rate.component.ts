import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../cat.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  cats: Cat[];
  constructor(private catService: CatService) { }

  getTwoCat() {
    this.catService.getTwoCats().subscribe((cats) => {
      this.cats = cats;
    });
  }

  chooseCat(cat: Cat) {
    this.catService.voteForCat(cat).subscribe(ratedCate => {
      this.getTwoCat();
    });
  }

  ngOnInit() {
    this.getTwoCat();
  }

}
