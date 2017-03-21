import { Component, OnInit } from '@angular/core';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { Property } from '../search-component/property';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  properties : Array<Object> = [];

  constructor(private http: Http) { 
     this.http.get("https://rets.io/api/v1/test/listings?access_token=6baca547742c6f96a6ff71b138424f21").subscribe(res => {
        let media = "";
        for (let temp of res.json().bundle ) {
          if (temp.media != null) {
            media = temp.media[0].url;
          } else {
            media = "https://photos.zillowstatic.com/p_h/ISqdzxoh5icjzh1000000000.jpg";
          }
          this.properties.push(new Property(temp.address, temp.price, temp.originalPrice, temp.id, media));
        }
      }, msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  ngOnInit() {
  }

  refreshProperties(event) {
    this.properties = [];
    let media = "";
    for (let temp of event) {
      
      if (temp.media != null) {
        media = temp.media[0].url;
      } else {
        media = "https://photos.zillowstatic.com/p_h/ISqdzxoh5icjzh1000000000.jpg";
      }
      this.properties.push(new Property(temp.address, temp.price, temp.originalPrice, temp.id, media));
    }
  }
}
