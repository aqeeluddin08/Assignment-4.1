import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  mostTouchdownPasses: any;
  mostRushingYards: any;
  leastRushingYards: any;
  playersByFieldGoalsMade: any[];
  mostSacks: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getMostTouchdownPasses() {
    this.http.get<any>('/api/queries/most-touchdown-passes')
      .subscribe(data => {
        this.mostTouchdownPasses = data;
      });
  }

  getMostRushingYards() {
    this.http.get<any>('/api/queries/most-rushing-yards')
      .subscribe(data => {
        this.mostRushingYards = data;
      });
  }

  getLeastRushingYards() {
    this.http.get<any>('/api/queries/least-rushing-yards')
      .subscribe(data => {
        this.leastRushingYards = data;
      });
  }

  getPlayersByFieldGoalsMade() {
    this.http.get<any[]>('/api/queries/players-by-field-goals-made')
      .subscribe(data => {
        this.playersByFieldGoalsMade = data;
      });
  }

  getMostSacks() {
    this.http.get<any>('/api/queries/most-sacks')
      .subscribe(data => {
        this.mostSacks = data;
      });
  }

}
