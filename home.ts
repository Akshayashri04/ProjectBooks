import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  books = [
    { name: 'Wings of Fire', rating: 4.5 ,image: '/image/bookwings.jpg'},
    { name: 'Atomic Habits', rating: 4.8 },
    { name: 'Rich Dad Poor Dad', rating: 4.3 }
  ];
  

}
