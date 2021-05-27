import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eval';
  stat1 = new Statistique('1', 'test1', '10M', 'SUCCESS');
  stat2 = new Statistique('2', 'test2', '20M', 'WARNING');
}
