import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListModel } from 'src/app/models/songs-modals';
import { AppState, selectSongListModel } from '../reducers';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  
  // Originally had this for songs but now made it an observable below
  // songs: SongListModel[] = [
  //   { id: '1', title: 'Rocket Man', artist: 'Elton John', recommendedBy: 'Mark' },
  //   { id: '2', title: 'Cherry Bomb', recommendedBy: 'Violet' }
  // ]

  songs$: Observable<SongListModel[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongListModel);
  }

}
