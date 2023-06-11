import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';
import { Subscriber } from '../../models/subscribers.interface';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
})
export class SubscribersComponent implements OnInit {
  constructor(private subsService: SubscribersService) {}

  ngOnInit(): void {
    this.subsService.getAllSubscribers().subscribe((data: Subscriber[]) => {
      console.log(data);
    });
  }
}
