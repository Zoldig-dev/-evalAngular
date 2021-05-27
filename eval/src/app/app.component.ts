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
  public stat!: Statistique[];

  constructor(private api: StatistiqueService) {
    this.api.getStats().then((statsTab) => {
      this.stat = statsTab;
    });
  }
  supStat(stat: Statistique) {
    this.api.supStat(stat.id).then((retourApi: { statut: string }) => {
      if (retourApi.statut !== 'OK') {
        alert('Problème lors de la suppression');
      }
    });
  }
}
