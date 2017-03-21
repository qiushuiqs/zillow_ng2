import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Property } from './property';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  apiRoot: string = "https://rets.io/api/v1/test/listings";
  access_token: string = "6baca547742c6f96a6ff71b138424f21";
  properties : Array<Object>;
  @Output() searchProperty = new EventEmitter();

  constructor(private http: Http) { }

  ngOnInit() {
  }

  searchClick(address: string) {
    let search = new URLSearchParams();
    search.set('access_token', this.access_token);
    search.set('address', address);
    this.http.get(this.apiRoot, {search}).subscribe(res => {
      console.log( res.json().bundle );
      this.searchProperty.emit(res.json().bundle);
      }
      , msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
}
