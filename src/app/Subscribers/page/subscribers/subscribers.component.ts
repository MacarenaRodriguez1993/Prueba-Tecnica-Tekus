import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
import {
  Subscriber,
  TableSubscriber,
} from '../../models/subscribers.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  subscribers: TableSubscriber[] = [];
  dataSource!: MatTableDataSource<TableSubscriber>;

  constructor(private subsService: SubscribersService, private route: Router) {}
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'CountryName'];

  ngOnInit(): void {
    this.getSubscribers();
  }
  getSubscribers(): void {
    this.subsService.getAllSubscribers().subscribe((subs: Subscriber[]) => {
      for (var i = 0; i < subs.length; i++) {
        this.subscribers.push({
          Id: subs[i].Id,
          Name: subs[i].Name,
          Email: subs[i].Email,
          CountryName: subs[i].CountryName,
        });
      }
      this.dataSource = new MatTableDataSource<TableSubscriber>(
        this.subscribers
      );
    });
  }
}
