import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-giphy-type-input',
  templateUrl: './giphy-type-input.component.html',
  styleUrls: ['./giphy-type-input.component.css']
})
export class GiphyTypeInputComponent implements OnInit {


  whatToSearch!:string
  @Output() sendValue = new EventEmitter<any>();

  searchFor() {
    this.sendValue.emit(this.whatToSearch);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
