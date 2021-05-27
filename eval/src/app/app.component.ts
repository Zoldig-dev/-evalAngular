import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eval';
  public stats!: Statistique[];

  constructor(private api: StatistiqueService) {
    this.api.getStats().then((statsTab) => {
      this.stats = statsTab;
    });
  }
}
