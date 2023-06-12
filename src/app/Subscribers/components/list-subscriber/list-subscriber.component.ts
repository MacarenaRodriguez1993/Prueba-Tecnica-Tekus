import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableSubscriber } from '../../models/subscribers.interface';

@Component({
  selector: 'app-list-subscriber',
  templateUrl: './list-subscriber.component.html',
  styleUrls: ['./list-subscriber.component.css'],
})
export class ListSubscriberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
