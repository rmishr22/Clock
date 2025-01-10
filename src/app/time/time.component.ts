import { Component } from '@angular/core';
import moment from 'moment';
import { interval, map, Subscription } from 'rxjs';
@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  time = '';
  currentTime:Subscription
  constructor() {
    this.currentTime = interval(1000).pipe(
      map(() => moment().format('h:mm:ss A'))
    ).subscribe(time => this.time = time)
  }
  
  ngOnDestroy() {
    if (this.currentTime) {
      this.currentTime.unsubscribe();
    }
  }
}
