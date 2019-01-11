import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse, Result } from 'src/models/people.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getAllPeople(page: number): Observable<PeopleResponse> {
    page = page + 1;
    return this.http.get<PeopleResponse>('https://swapi.co/api/people/?page=' + page);
  }

  getAllPeopleById(url: string): Observable<Result> {
    return this.http.get<Result>(url);
  }
}
