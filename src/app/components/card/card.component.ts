import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cardItems = [
    {
      name: "SERC SKIN",
      main: "Representing her home country of South.",
      pay: "0,067 ETH",
      image: "assets/images/4_1.png"
    },
    {
      name: "REBEL SKIN",
      main: "Representing her home country of South.",
      pay: "0,092 ETH",
      image: "assets/images/4_1.png"
    },
    {
      name: "BULLDOG",
      main: "A surefire beast when you can pick your shots.",
      pay: "0,34 ETH",
      image: "assets/images/84.png"
    },
    {
      name: "STINGER",
      main: "A surefire beast when you can pick your shots.",
      pay: "0,027 ETH",
      image: "assets/images/84.png"
    },

  ]

}
