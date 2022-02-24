import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../models/IDataService';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private theData = new Subject<Movie[]>();

  constructor(private http:HttpClient) { }
getData(){
  this.http.get<IDataService>("http://www.omdbapi.com/?i=tt3896198&apikey=1152cfbe").subscribe((data: IDataService) => 
  this.theData.next(data.title))
}

  
}
