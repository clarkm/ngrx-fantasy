import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CurrentTeamService } from './current-team.service';
import { DraftPoolComponent } from './draft-pool/draft-pool.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlayerPoolEffects } from './effects/players-pool.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {TableModule} from 'primeng/table';
import { TeamsComponent } from './teams/teams.component';
import {ToastModule} from 'primeng/toast';
import { draftPoolReducer } from './reducers/draft-pool.reducer';
import { teamsReducer } from './reducers/team.reducer';

@NgModule({
  imports: [BrowserModule, HttpClientModule, TableModule, ToastModule,
    BrowserModule,
    BrowserAnimationsModule, StoreModule.forRoot({teams: teamsReducer, draftPool: draftPoolReducer}),
  // Instrumentation must be imported after importing StoreModule (config is optional)
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    // logOnly: environment.production, // Restrict extension to log-only mode
  }),
  EffectsModule.forRoot([PlayerPoolEffects]) ],
  declarations: [AppComponent, TeamsComponent, DraftPoolComponent],
  bootstrap: [AppComponent],
  providers: [CurrentTeamService],
})
export class AppModule {}