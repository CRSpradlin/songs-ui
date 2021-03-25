import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { songAdded } from 'src/app/actions/song.actions';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.css']
})
export class SongEntryComponent implements OnInit {

  formGroup: FormGroup

  constructor(private formBuilder:FormBuilder, private store: Store<AppState>) {   }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['Default Title', [Validators.required]],
      artist: ['', []],
      recommendedBy: ['',[Validators.required]]
    })
  }

  get title(): AbstractControl {
    return this.formGroup.get('title');
  }
  get recommendedBy(): AbstractControl {
    return this.formGroup.get('recommendedBy');
  }

  submit(focusThis: HTMLElement): void {
    if (this.formGroup.valid) {
      this.store.dispatch(songAdded(this.formGroup.value));
      this.formGroup.reset();
      focusThis.focus();
    } else {
      console.log("Something bad on the form");
    }
  }

}
