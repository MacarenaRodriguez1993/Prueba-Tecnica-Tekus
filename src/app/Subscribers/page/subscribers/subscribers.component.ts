import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
import {
  Subscriber,
  TableSubscriber,
} from '../../models/subscribers.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddSubsComponent } from '../../components/dialog-add-subs/dialog-add-subs.component';
import { DialogUpdateSubsComponent } from '../../components/dialog-update-subs/dialog-update-subs.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  subscribers: TableSubscriber[] = [];
  dataSource!: MatTableDataSource<TableSubscriber>;
  countData!: number;
  constructor(
    private subsService: SubscribersService,
    public dialog: MatDialog
  ) {}
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'CountryName', 'Action'];
  currentPage = 0; // actual page
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15];
  sortOrder: string = '';
  sortType: number = 0;
  dataApi: any;
  message: string = '';
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
      .getAllSubscribers(
        this.pageSize,
        this.currentPage,
        this.sortOrder,
        this.sortType
      )
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
  // Open Dialog CREATE SUBSCRIBERS
  openDialog() {
    this.dialog.open(DialogAddSubsComponent);
  }
  //Order BY NAME
  sortByName(sortType: string): void {
    this.sortType = sortType === 'asc' ? 0 : 1;
    this.sortOrder = 'Name';
    this.getSubscribersSorted();
  }
  //Order BY EMAIL
  sortByEmail(sortType: string): void {
    this.sortType = sortType === 'asc' ? 0 : 1;
    this.sortOrder = 'Email';
    this.getSubscribersSorted();
  }
  getSubscribersSorted(): void {
    this.currentPage = 0;
    this.getSubscribers();
  }

  //edit subscriber
  updateSubs(id: number): void {
    this.subsService.getSubscriberById(id).subscribe((sub: Subscriber) => {
      this.dialog.open(DialogUpdateSubsComponent, { data: sub });
    });
  }
  deleteSubs(id: number): void {
    if (confirm('Are you sure to delete this subscriber??')) {
      this.subsService.deleteSubscriberById(id).subscribe(
        (sub: any) => {
          this.message = sub;
        },
        (error) => {
          this.message = error;
        }
      );
    }
  }
}
