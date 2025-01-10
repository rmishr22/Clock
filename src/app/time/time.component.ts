import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import moment from 'moment';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {
  time = '';

  currentTime = interval(1000).pipe(
    map(() => moment().format('h:mm:ss A'))
  )

}
