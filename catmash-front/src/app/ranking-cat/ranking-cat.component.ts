import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../cat.service';

@Component({
  selector: 'app-ranking-cat',
  templateUrl: './ranking-cat.component.html',
  styleUrls: ['./ranking-cat.component.css']
})
export class RankingCatComponent implements OnInit {
  @Input() cat: Cat;
  @Input() rank: number;
  constructor() { }

  ngOnInit() {
  }

}
