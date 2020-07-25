import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickrParams = {
    params: {
      api_key:'ca370d51a054836007519a00ff4ce59e',
      format:'json',
      nojsoncallback:'1',
      per_page:'30'
    }
  }

  private flickrUrl = "https://api.flickr.com/services/rest/";

  constructor(private http: HttpClient) { }

  gettingImages(pageNumber:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.search';
    this.flickrParams.params['tags'] = 'food';
    this.flickrParams.params['text'] = 'food';
    this.flickrParams.params['page'] = pageNumber.toString();
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  gettingClickedInfo(photoId:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.getInfo';
    this.flickrParams.params['photo_id'] = photoId;
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  formFlickrData(food:any): string {
    return 'http://farm'+food.farm+'.static.flickr.com/'+food.server+'/'+food.id+'_'+food.secret+'.jpg';
  }

 
}
