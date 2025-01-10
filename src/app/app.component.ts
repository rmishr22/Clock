import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeComponent } from './time/time.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clock';
}
