import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animeEnc';

  constructor(private service: AnimeService) { }

  changeState(cv: number) {

    let status = document.getElementById("status");
    let type = document.getElementById("type");
    let genres = document.getElementById("genres");

    switch (cv) {
      case 1:
        if (genres) {
          genres.classList.toggle("visible");
          genres.classList.toggle("invisible");
        }
        this.makeInvisible(status);
        this.makeInvisible(type);
        break;

      case 2:
        if (status) {
          status.classList.toggle("visible");
          status.classList.toggle("invisible");
        }
        this.makeInvisible(genres);
        this.makeInvisible(type);
        break;

      case 3:
        if (type) {
          type.classList.toggle("visible");
          type.classList.toggle("invisible");
        }
        this.makeInvisible(status);
        this.makeInvisible(genres);
        break;

      default:
        break;
    }



  }

  makeInvisible(element: HTMLElement | null) {
    if (element && element.classList.contains("visible")) {
      element.classList.remove("visible");
      element.classList.add("invisible");
    }
  }

  filter() {

    const genres = document.querySelectorAll('input[name="genre"]:checked');
    const type = document.querySelector('input[name="type"]:checked') as HTMLInputElement | null;
    const status = document.querySelector('input[name="status"]:checked') as HTMLInputElement | null;

    let statusinv = document.getElementById("status");
    let typeinv = document.getElementById("type");
    let genresinv = document.getElementById("genres");

    this.makeInvisible(statusinv);
    this.makeInvisible(typeinv);
    this.makeInvisible(genresinv);

    let genresCount = 0;

    let genresValues: string = "";
    const typesValue: string | null = type ? type.value : "";
    const statusValue: string | null = status ? status.value : "";

    genres.forEach(genre => {
      const inputElement = genre as HTMLInputElement;

      if(genresCount>0)
      {
        genresValues += ",";
      }
      genresValues += inputElement.value;
      genresCount++;

    });

    this.service.filter(genresValues,typesValue,statusValue)

  }

  byName(event:KeyboardEvent){

    let name = document.getElementById("name") as HTMLInputElement;

    if(event.key == 'Enter'){
      this.service.byName(name.value);
    }
    
  }

}
