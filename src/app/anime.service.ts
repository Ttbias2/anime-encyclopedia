import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeData, AnimeResponse } from './common/anime'
import { BehaviorSubject } from 'rxjs';
import { ApiResponse,CharacterData } from './common/character';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  topUrl: string = "https://api.jikan.moe/v4/top/anime?limit=5"
  animesUrl: string = "?order_by=popularity&&limit=20&&page="
  animeUrl: string = "https://api.jikan.moe/v4/anime?"
  baseUrl:string = "https://api.jikan.moe/v4/anime"
  status: string = ""
  genres: string = ""
  type: string = ""
  name: string = ""

  private animes = new BehaviorSubject<AnimeData[]>([]);
  animes$ = this.animes.asObservable();

  private characters = new BehaviorSubject<CharacterData[]>([]);
  characters$ = this.characters.asObservable();

  private anime = new BehaviorSubject<AnimeData[]>([]);
  anime$ = this.anime.asObservable();

  private topAnimes = new BehaviorSubject<AnimeData[]>([]);
  topAnimes$ = this.topAnimes.asObservable();

  private page = new BehaviorSubject<number>(1);
  page$ = this.page.asObservable();


  constructor(private httpclient: HttpClient) { }

  getAnimes(page: number) {
    this.httpclient.get<AnimeResponse>(`${this.baseUrl}${this.animesUrl}${page}&&status=${this.status}&&type=${this.type}&&genres=${this.genres}&&q=${this.name}`).subscribe(result => {
      this.animes.next(result.data);
    });
  }

  getAnime(name:string) {
    this.httpclient.get<AnimeResponse>(`${this.animeUrl}q=${name}&&limit=6`).subscribe(result => {
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
    this.page.next(1);         
    this.getAnimes(this.page.getValue()) 

  }

  byName(name: string) {
    this.name = name;
    this.status = "";
    this.type = "";
    this.genres = "";
    this.page.next(1);         
    this.getAnimes(this.page.getValue()) 
  }

  getCharacters(animeId:Number) {
    this.httpclient.get<ApiResponse>(`${this.baseUrl}/${animeId}/characters`).subscribe(result => {
      this.characters.next(result.data);
    });
  }

  nextPage() {
    const currentPage = this.page.getValue();
    const newPage = currentPage + 1;          
    this.page.next(newPage);         
    this.getAnimes(this.page.getValue())         
  }

  previusPage() {
    const currentPage = this.page.getValue();
    const newPage = currentPage - 1;          
    this.page.next(newPage);            
    this.getAnimes(this.page.getValue())         
  }

}
