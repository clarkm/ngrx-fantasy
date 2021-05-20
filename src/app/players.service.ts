import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://raw.githubusercontent.com/clarkm/angular-fantasy-football/master/fantasypros-output');
  }
}