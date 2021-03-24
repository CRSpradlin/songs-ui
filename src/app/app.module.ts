import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { CounterComponent } from './components/counter/counter.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CounterCountByComponent } from './components/counter-count-by/counter-count-by.component';

import { EffectsModule } from '@ngrx/effects'
import { CounterEffects } from './effects/counter-effects';

import { ReactiveFormsModule } from "@angular/forms";

import { TasksComponent } from './components/tasks/tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskEntryComponent } from './components/task-entry/task-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    SongEntryComponent,
    SongListComponent,
    CounterComponent,
    CounterCountByComponent,
    TasksComponent,
    TasksListComponent,
    TaskEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
