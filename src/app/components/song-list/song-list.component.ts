import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SongListModel } from 'src/app/models/songs-models';
import { AppState, selectSongListModel, selectSongsLoaded } from 'src/app/reducers';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songsLoaded$: Observable<boolean>;
  songs$: Observable<SongListModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongListModel);
    this.songsLoaded$ = this.store.select(selectSongsLoaded);
  }

}
