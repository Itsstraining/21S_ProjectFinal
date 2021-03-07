import { Component, Input, OnInit } from '@angular/core';
import { OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-listshowcards',
  templateUrl: './listshowcards.component.html',
  styleUrls: ['./listshowcards.component.scss']
})
export class ListshowcardsComponent implements OnInit {

  constructor(public cardService: CardDataService ) { }
  @Input()
  outCard: OutCard;

  arrRandom: Array<any>
  async ngOnInit(): Promise<void> {
    //let cardsTemp=this.cardService.temp;
    this.arrRandom = this.getArrRandom();
    this.cardService.cardsViews
  }

  getArrRandom(){
    let arr = [[30,20],[40,30],[50,20],[50,40],[30,40]];
    let arr1 = [40,20];
    let temp = [[0,0]]
    let i = 0 
    console.log(arr[0][1])
    do {
      temp.push([arr1[0]+this.cardService.getRandom(),arr1[1]+this.cardService.getRandom()]) 
      if (temp[temp.length-1][0]== temp[temp.length-2][0]&& temp[temp.length-1][1]== temp[temp.length-2][1]) {
        i--;
      }
      i++;
    } while (i<14);
    temp.splice(0,1);
    console.log(temp);
    return temp;
  }
}
