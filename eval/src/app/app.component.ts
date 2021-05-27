import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eval';
  public stats: Statistique[] = [
    new Statistique('1', 'test1', '10M', 'SUCCESS'),
    new Statistique('2', 'test2', '20M', 'WARNING'),
  ];

  constructor() {
    setTimeout(() => {
      this.stats.push(new Statistique('3', 'test3', '30M', 'DANGER'));
    }, 2000);
  }
}
