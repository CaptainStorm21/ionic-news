
// api hooks
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { tap} from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  loading;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}

  async showLoading() {
    this.loading = await this.loadingController.create({
      duration: 5000
    });

    return await this.loading.present();
 }
    // spinner stops by a timer not but not after content loads
    // async showLoading(){
    //   const loading = await this.loadingController.create({
    //     duration: 3000
    //   });

    //   return await loading.present();
 

  getData(url) {
    // this.showLoading();
    // return this.http.get(`${apiUrl}/${url}apiKey=${apiKey}`);

    // spinner stops by a timer not but not after content loads
    // return this.http.get(`${apiUrl}/${url}`, { params });

    //  testing in console
    // return this.http.get(`${apiUrl}/${url}`, { params }).pipe(tap(value => {
    //   console.log(value);
    // }));

    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        // if (this.loading){
        //   this.loading.dismiss();
        // }
        console.log(value);
      })
    );
  }
}
