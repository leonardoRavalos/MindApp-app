import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article, NewsResponse } from '../interfaces'; 
import { map } from 'rxjs/operators';

//const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getTopHeadLines(): Observable<Article[]> {
    return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from=2022-11-16&sortBy=publishedAt&apiKey=12ea3140f71d436ab3ea93a5e6ce37a5', {
    }).pipe(
      map(resp => resp.articles));

  }
}