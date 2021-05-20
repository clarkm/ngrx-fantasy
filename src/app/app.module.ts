import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { teamsReducer } from './reducers/team.reducer';
import { draftPoolReducer } from './reducers/draft-pool.reducer';
import { TeamsComponent } from './teams/teams.component';
import { DraftPoolComponent } from './draft-pool/draft-pool.component';
import { CurrentTeamService } from './current-team.service';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({teams: teamsReducer, draftPool: draftPoolReducer})],
  declarations: [AppComponent, TeamsComponent, DraftPoolComponent],
  bootstrap: [AppComponent],
  providers: [CurrentTeamService],
})
export class AppModule {}