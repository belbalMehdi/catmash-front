import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cat {
  id: string;
  url: string;
  votes: number;
}

const encounterURL = 'http://vps632408.ovh.net/encounter';
const rateUrl = 'http://vps632408.ovh.net/rate';
const rankingUrl = 'http://vps632408.ovh.net/ranking';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getTwoCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(encounterURL);
  }

  voteForCat(cat: Cat): Observable<Cat> {
    return this.http.patch<Cat>(rateUrl, cat);
  }

  getCatRanking(): Observable<Cat[]> {
    return this.http.get<Cat[]>(rankingUrl);
  }

}
