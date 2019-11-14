import { Injectable } from '@angular/core';
import { Beast } from '../models/beast';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BeastsService {



  constructor(private http:HttpClient) { 

    let t = ()=> new Date().getSeconds() + ':' + new Date().getMilliseconds();

    console.log('ctor BeastsService', t());


    let u = 'https://raw.githubusercontent.com/bresleveloper/breslev-zoo/master/src/assets/beasts.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Beasts inside subscribe', t());
        this.beasts = data as Beast[]
        this.currentBeast = this.beasts[0]
      })
    console.log('ctor BeastsService end', t());

  }

  beasts:Beast[] = []

  currentBeastIndex = 0
  currentBeast:Beast

  
}
