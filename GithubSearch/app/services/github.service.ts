import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;
  private client_id: '317661744fd1938c046f';
  private client_secret = '6bc0da4d54776ab09c8d4d2398e6aaf581152e06';


  constructor(private _http: Http){
    console.log('Github Service Ready....');
    this.username = 'BboyAkers';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'
      + this.username + '?client_id='
      + this.client_id +'&client_secret='
      + this.client_secret).map(res => res.json());
  }
}
