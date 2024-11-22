import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { AnimeData, AnimeResponse } from '../common/anime';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animes.component.html',
  styleUrl: './animes.component.css'
})
export class AnimesComponent implements OnInit{

  animes: AnimeData[] = [];
  page:number = 1;

  constructor(private service: AnimeService,private router:Router) {}

  ngOnInit(): void {
    this.service.getAnimes(1);

    this.service.animes$.subscribe((animeList) => {
      this.animes = animeList;
    });
  }

  nextPage()
  {
    this.page++;
    this.service.getAnimes(this.page)
  }

  previusPage()
  {
    if(this.page!=1)
    {
      this.page--;
      this.service.getAnimes(this.page)
    }
    
  }
  
}
