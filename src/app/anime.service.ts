import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeData, AnimeResponse } from './common/anime'
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  topUrl: string = "https://api.jikan.moe/v4/top/anime?limit=5"
  baseUrl: string = "https://api.jikan.moe/v4/anime?order_by=popularity&&limit=20&&page="
  animeUrl: string = "https://api.jikan.moe/v4/anime?"
  status: string = ""
  genres: string = ""
  type: string = ""
  name: string = ""

  private animes = new BehaviorSubject<AnimeData[]>([]);
  animes$ = this.animes.asObservable();

  private anime = new BehaviorSubject<AnimeData[]>([]);
  anime$ = this.animes.asObservable();

  private topAnimes = new BehaviorSubject<AnimeData[]>([]);
  topAnimes$ = this.topAnimes.asObservable();

  constructor(private httpclient: HttpClient) { }

  getAnimes(page: number) {
    this.httpclient.get<AnimeResponse>(`${this.baseUrl}${page}&&status=${this.status}&&type=${this.type}&&genres=${this.genres}&&q=${this.name}`).subscribe(result => {
      this.animes.next(result.data);
    });
  }

  getAnime(name:string) {
    this.httpclient.get<AnimeResponse>(`${this.animeUrl}q=${name}`).subscribe(result => {
      this.anime.next(result.data);
    });
  }

  getTopAnimes() {
    this.httpclient.get<AnimeResponse>(`${this.topUrl}`).subscribe(result => {
      this.topAnimes.next(result.data);
    })
  }

  filter(genres: string, type: string, status: string) {

    this.status = status;
    this.type = type;
    this.genres = genres;

    this.getAnimes(1);

  }

  byName(name: string) {
    this.name = name;
    this.status = "";
    this.type = "";
    this.genres = "";
    this.getAnimes(1);
  }

}
