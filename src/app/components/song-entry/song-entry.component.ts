import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.css']
})
export class SongEntryComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      artist: ['', []],
      recommendedBy: ['', [Validators.required]]
    })
  }

  get title(): AbstractControl {
    return this.formGroup.get('title');
  }

  submit(focusThis: HTMLElement): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
      focusThis.focus();
    } else {
      console.log("Something bad on the form");
    }
  }

}
