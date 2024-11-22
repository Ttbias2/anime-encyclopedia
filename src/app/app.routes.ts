import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AnimeComponent } from './anime/anime.component';

export const routes: Routes = [
    {path:'home',component:HomepageComponent},
    {path:'anime/:tittle',component:AnimeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
