import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { AnimeData, AnimeResponse } from '../common/anime';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent implements OnInit{

  animeTittle: string = "";
  anime: AnimeData[] = [] ;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{this.animeTittle = param['tittle']})
    this.getAnime()
  }

  getAnime(){
    this.animeService.getAnime(this.animeTittle);
    
    this.animeService.anime$.subscribe((animes)=>{this.anime=animes})
  }

}

