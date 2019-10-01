import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../cat.service';

@Component({
  selector: 'app-rate-cat',
  templateUrl: './rate-cat.component.html',
  styleUrls: ['./rate-cat.component.css']
})
export class RateCatComponent implements OnInit {
  @Input() cat: Cat;
  choosed: boolean;
  constructor() { }

  ngOnInit() {
  }

}
