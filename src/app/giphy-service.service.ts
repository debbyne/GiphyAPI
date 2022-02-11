
import { Giphy } from './giphy';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyServiceService {
  data!: Giphy;

  constructor(private http:HttpClient) {
    this.data! = new Giphy([]);
   }

   trendingGiphies(){
    interface GiphyApi{
      data:Array<string>
    }
    let request =  "https://api.giphy.com/v1/gifs/trending?api_key="+environment.api_key;
    // let params={headers:headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GiphyApi>(request).toPromise().then((response: any) => { this.data = response;
            
            resolve(resolve);
            console.log(this.data)
          },
          (error:any) => {
            reject();
            console.log(error)
          }
        );
    });
    return promise;
   }

   searchGiphies(GiphyType:any){
    interface GiphyApi{
      data:Array<string>
    }
   
    let request =  "https://api.giphy.com/v1/gifs/search?q="+GiphyType+"&api_key="+environment.api_key+"&limit=5000";
    
    let promise = new Promise((resolve, reject) => {
      this.http.get<GiphyApi>(request).toPromise().then((response: any) => { this.data = response;
            
            resolve(resolve);
            console.log(this.data)
          },
          (error:any) => {
            reject();
            console.log(error)
          }
        );
    });
    return promise;
   }


}
