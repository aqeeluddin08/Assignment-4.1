import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  query: string;
  result: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  executeQuery() {
    const url = `http://localhost:3000/api/query?query=${encodeURIComponent(this.query)}`;
    this.http.get(url).subscribe(result => {
      this.result = result;
    });
  }

}
