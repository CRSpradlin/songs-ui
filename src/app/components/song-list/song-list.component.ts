import { Component, OnInit } from '@angular/core';
import { SongListModel } from 'src/app/models/songs-modals';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: SongListModel[] = [
    { id: '1', title: 'Rocket Man', artist: 'Elton John', recommendedBy: 'Mark' },
    { id: '2', title: 'Cherry Bomb', recommendedBy: 'Violet' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
