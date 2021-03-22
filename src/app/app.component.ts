import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'songs-ui';

  todaysTopHits = ['Dirty Work by Steely Dan', 'I Can\'t go for that'];

  addSong(txtSongEntry: HTMLInputElement):void {
    this.todaysTopHits = [txtSongEntry.value, ...this.todaysTopHits];
    txtSongEntry.value = '';
    txtSongEntry.focus();
  }
}
