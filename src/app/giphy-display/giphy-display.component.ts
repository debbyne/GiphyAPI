import { GiphyServiceService } from './../giphy-service.service';
import { Giphy } from './../giphy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit {

  giphies!: Giphy | any;

  constructor(private giphyService: GiphyServiceService) {
    this.giphies = new Giphy([]);
   }
   trendingGiphies() {
    this.giphyService.trendingGiphies().then((success) => {
      this.giphies = this.giphyService.data;
      
    }),
      (error: any) => {
        console.log(error)
      }
    
  }
  searchGiphies(whatToSearch:any) {
    this.giphyService.searchGiphies(whatToSearch).then((success) => {
      this.giphies = this.giphyService.data;
      
    }),
      (error: any) => {
        console.log(error)
      }
    
  }

  ngOnInit(): void {
    // this.findThisGiphies('ryan+gosling');
    this.trendingGiphies();
  }

}
