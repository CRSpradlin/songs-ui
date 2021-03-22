import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(state => state.counter.current)
  }

  increment() {

  }
  decrement() {

  }
}
