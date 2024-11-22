import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { AnimeData } from '../common/anime';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anime-des',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './anime-des.component.html',
  styleUrl: './anime-des.component.css'
})
export class AnimeDesComponent implements OnInit{

  topAnimes:AnimeData[] = []

  constructor(private service:AnimeService){}

  ngOnInit(): void {
    this.service.getTopAnimes();

    this.service.topAnimes$.subscribe((animeList) => {
      this.topAnimes = animeList;
    });
  }

}
