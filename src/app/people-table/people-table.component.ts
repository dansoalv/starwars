import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatPaginator,
  MatSort
} from '@angular/material';
import { StarwarsService } from '../../services/starwars.service';
import { PeopleResponse } from 'src/models/people.model';
import { Result } from '../../models/people.model';
import { PeopleComponent } from './people/people.component';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
  providers: [StarwarsService]
})
export class PeopleTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'gender',
    'birth_year',
    'mass',
    'height',
    'information'
  ];
  dataSource: MatTableDataSource<Result>;
  data: PeopleResponse = new PeopleResponse();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:max-line-length
  constructor(
    private _starWarsService: StarwarsService,
    public dialogPeople: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllPeople();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllPeople(event?) {
    this._starWarsService
      .getAllPeople(event === undefined ? 0 : event.pageIndex)
      .subscribe(
        response => {
          this.data = response;
          this.dataSource = new MatTableDataSource(this.data.results);
        },
        error => {
          console.error(error);
        },
        () => {
          this.dataSource.data = this.data.results;
          this.route.queryParams.subscribe(params => {
            if (params['ordenar']) {
              this.routeNavigation(params['ordenar']);
            }
          });
        }
      );
  }

  getInformationPeople(url: string) {
    this._starWarsService.getAllPeopleById(url).subscribe(
      response => {
        const dialogRef = this.dialogPeople.open(PeopleComponent, {
          width: '650px',
          data: response,
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  routeNavigation(param: string) {
    this.router.navigate(['/personajes'], { queryParams: { ordenar: param } });
    switch (param) {
      case 'nombre':
        this.dataSource = new MatTableDataSource(
          this.dataSource.data.slice(0).sort(function(a, b) {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
          })
        );
        break;
        case 'peso':
        this.dataSource = new MatTableDataSource(
          this.dataSource.data.slice(0).sort(function(a, b) {
            return Number(a.mass) < Number(b.mass) ? -1 : Number(a.mass) > Number(b.mass) ? 1 : 0;
          })
        );
        break;
        case 'altura':
        this.dataSource = new MatTableDataSource(
          this.dataSource.data.slice(0).sort(function(a, b) {
            return Number(a.height) < Number(b.height) ? -1 : Number(a.height) > Number(b.height) ? 1 : 0;
          })
        );
        break;
      default:
        break;
    }
  }
}
