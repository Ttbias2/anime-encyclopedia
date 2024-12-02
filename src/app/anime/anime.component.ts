import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimeService } from '../anime.service';
import { AnimeData} from '../common/anime';
import { DomSanitizer } from '@angular/platform-browser';
import {CharacterData } from '../common/character';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent implements OnInit{

  animeTittle: string = "";
  animeId:number = 0;
  anime: AnimeData[] = [] ;
  characters: CharacterData[] = [];

  constructor(private route: ActivatedRoute, public animeService: AnimeService,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.animeTittle = param['tittle']})
    this.route.params.subscribe(param=>{this.animeId = param['id']})

    this.getAnime();
    this.getCharacters();
  }

  getAnime(){
    this.animeService.getAnime(this.animeTittle);
    
    this.animeService.anime$.subscribe((anime)=>{this.anime=anime})
  }

  getCharacters(){

    this.animeService.getCharacters(this.animeId);

    this.animeService.characters$.subscribe((characters)=>{this.characters=characters});
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}

