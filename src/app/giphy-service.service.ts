import { Giphy } from './giphy';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyServiceService {
  data!: Giphy;

  constructor(private http:HttpClient) {
    this.data! = new Giphy([]);
   }

   findGiphies(GiphyType:any){
    interface GiphyApi{
      data:Array<string>
    }
    // let headers = new HttpHeaders({'Authorization':'token' + environment.pass})
    // let request =  "https://api.giphy.com/v1/gifs/trending?q=ryan+gosling&api_key=da1g5XUy1Hnvv8FGjmXkJREGIhMKyi1N&limit=5000";
    let request =  "https://api.giphy.com/v1/gifs/trending?q="+GiphyType+"&api_key=da1g5XUy1Hnvv8FGjmXkJREGIhMKyi1N&limit=5000";
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

   



}
