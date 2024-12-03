import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { AnimeData, AnimeResponse } from '../common/anime';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

    this.service.page$.subscribe(page=>{this.page=page});

    this.service.getAnimes(this.page);

    this.service.animes$.subscribe((animeList) => {
      this.animes = animeList;
    });
  }

  nextPage()
  {
    this.scrollToTop();

    if(this.animes.length == 20){
      this.service.nextPage();
    }
    
    
  }

  previusPage()
  {
    if(this.page!=1)
    {
      this.service.previusPage();
    }

    this.scrollToTop();
    
  }
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
