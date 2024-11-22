import { Component } from '@angular/core';
import { AnimeDesComponent } from '../anime-des/anime-des.component';
import { AnimesComponent } from '../animes/animes.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AnimeDesComponent,AnimesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
