import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBySet } from 'src/app/actions/counter.actions';
import { AppState, selectCountingBy } from 'src/app/reducers';

@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css']
})
export class CounterCountByComponent implements OnInit {

  countingBy$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countingBy$ = this.store.select(selectCountingBy);
  }

  changeCountBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }
}
