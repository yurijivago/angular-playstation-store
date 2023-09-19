import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string=""
  @Input()
  trailerLink:string=""
  
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string="XPTO | PS4"
  @Input()
  gamePrice:string="R$179,97"

  constructor() { }

  ngOnInit(): void {
  }

}
