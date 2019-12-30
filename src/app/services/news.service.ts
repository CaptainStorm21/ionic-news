import { Injectable } from '@angular/core';
// api hooks
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, public loadingController:  LoadingController  ) { }

  async showLoading(){
    const loading = await this.loadingController.create({
      duration: 3000
    });

    return await loading.present();
  }

  getData(url){
    this.showLoading();
    // return this.http.get(`${apiUrl}/${url}apiKey=${apiKey}`);
    return this.http.get(`${apiUrl}/${url}`, { params });
  }
}
