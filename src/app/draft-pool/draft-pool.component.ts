import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { Team } from './team.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-draft-pool',
  templateUrl: './draft-pool.component.html',
  styleUrls: ['./draft-pool.component.scss']
})
export class DraftPoolComponent implements OnInit, OnDestroy {
  draftPool: Observable<any>;

  displayedColumns: string[] = ['rank', 'name', 'pos', 'team', 'bye'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<AppState>) {
    // this.draftPool = this.store.select(state => state.draftPool);
  }

  addPlayerToDraftPool(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_DRAFT_POOL',
      payload: {
        player: player
      }
    });
  }

  addPlayerToTeam(player, e) {
    e.preventDefault();
    this.store.dispatch({
      type: 'ADD_PLAYER_TO_TEAM',
      payload: {
        player: player
      }
    });
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Draft pool] Load Players' });
    this.store.subscribe(state => {
      this.dataSource = new MatTableDataSource(state.draftPool);
      // this.dataSource.data = state.draftPool
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
  }

}