import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = [];
  selectedPlayer: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.http.get<any[]>('/api/players')
      .subscribe(data => {
        this.players = data;
      });
  }

  addPlayer() {
    this.selectedPlayer = {};
  }

  editPlayer(player: any) {
    this.selectedPlayer = player;
  }

  savePlayer() {
    if (this.selectedPlayer._id) {
      this.http.put(`/api/players/${this.selectedPlayer._id}`, this.selectedPlayer)
        .subscribe(() => {
          this.getPlayers();
          this.selectedPlayer = {};
        });
    } else {
      this.http.post('/api/players', this.selectedPlayer)
        .subscribe(() => {
          this.getPlayers();
          this.selectedPlayer = {};
        });
    }
  }

  deletePlayer(player: any) {
    this.http.delete(`/api/players/${player._id}`)
      .subscribe(() => {
        this.getPlayers();
      });
  }

  cancel() {
    this.selectedPlayer = {};
  }

}
