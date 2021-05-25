import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { teamsReducer } from './reducers/team.reducer';
import { draftPoolReducer } from './reducers/draft-pool.reducer';
import { TeamsComponent } from './teams/teams.component';
import { DraftPoolComponent } from './draft-pool/draft-pool.component';
import { CurrentTeamService } from './current-team.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PlayerPoolEffects } from './effects/players-pool.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [BrowserModule, HttpClientModule, StoreModule.forRoot({teams: teamsReducer, draftPool: draftPoolReducer}),
  // Instrumentation must be imported after importing StoreModule (config is optional)
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    // logOnly: environment.production, // Restrict extension to log-only mode
  }),
  EffectsModule.forRoot([PlayerPoolEffects]),
  BrowserAnimationsModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
  ],
  declarations: [AppComponent, TeamsComponent, DraftPoolComponent],
  bootstrap: [AppComponent],
  providers: [CurrentTeamService],
})
export class AppModule {}