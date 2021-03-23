import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countBySet } from 'src/app/actions/counter.actions';
import { AppState } from '../reducers';

@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css']
})
export class CounterCountByComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  changeCountBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }
}
