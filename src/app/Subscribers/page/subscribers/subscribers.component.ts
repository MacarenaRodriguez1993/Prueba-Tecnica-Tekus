import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
import {
  Subscriber,
  TableSubscriber,
} from '../../models/subscribers.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  subscribers: TableSubscriber[] = [];
  dataSource!: MatTableDataSource<TableSubscriber>;
  countData!: number;
  constructor(private subsService: SubscribersService, private route: Router) {}
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'CountryName'];
  currentPage = 0; // Página actual
  pageSize = 5; // Tamaño de página predeterminado (puedes ajustarlo según tus necesidades)
  pageSizeOptions: number[] = [5, 10, 15]; // Opciones de tamaño de página

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.getSubscribers();

    if (this.dataSource && this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  ngOnInit(): void {
    this.getSubscribers();
  }
  getSubscribers(): void {
    this.subsService
      .getAllSubscribers(this.pageSize, this.currentPage)
      .subscribe((subs: any) => {
        console.log(subs.Data);
        this.countData = subs.Count;
        this.subscribers = [];
        for (var i = 0; i < subs.Data.length; i++) {
          this.subscribers.push({
            Id: subs.Data[i].Id,
            Name: subs.Data[i].Name,
            Email: subs.Data[i].Email,
            CountryName: subs.Data[i].CountryName,
          });
        }
        this.dataSource = new MatTableDataSource<TableSubscriber>(
          this.subscribers
        );
      });
  }
  onPageChange(event: PageEvent): void {
    console.log('go');
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getSubscribers();
  }
}
