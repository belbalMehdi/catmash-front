import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cat {
  id: string;
  url: string;
  votes: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getTwoCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://vps632408.ovh.net/encounter');
  }

}
