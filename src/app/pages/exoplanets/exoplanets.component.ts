import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Exoplanet } from 'src/app/models/exoplanet';
import { ExoplanetService } from 'src/app/services/exoplanet.service';

@Component({
  selector: 'app-exoplanets',
  templateUrl: './exoplanets.component.html',
  styleUrls: ['./exoplanets.component.scss']
})
export class ExoplanetsComponent implements OnInit {

  exoplanets: Exoplanet[] = [];

  displayedColumns: string[] = ['name', 'stars', 'moons', 'year', 'details'];
  dataSource = new MatTableDataSource<Exoplanet>(this.exoplanets);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private service: ExoplanetService;

  constructor(service: ExoplanetService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(exoplanets => {
      this.exoplanets = exoplanets;
      this.dataSource = new MatTableDataSource<Exoplanet>(this.exoplanets);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
