import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCurrent } from '../reducers';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // dollar sign is a naming convention for observable variables
  // so you remember to pipe it with async in the html template
  current$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrent);
  }

  increment(){
    this.store.dispatch(actions.countIncremented());
  }

  decrement(){
    this.store.dispatch(actions.countDecremented());
  }

  reset(){
    this.store.dispatch(actions.countReset());
  }

}
