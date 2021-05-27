import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-statistique-list',
  templateUrl: './statistique-list.component.html',
  styleUrls: ['./statistique-list.component.css'],
})
export class StatistiqueListComponent implements OnInit {
  @Input() public statistique!: Statistique;
  @Output() private demandeSuppression: EventEmitter<void>;

  constructor(private api: StatistiqueService) {
    this.demandeSuppression = new EventEmitter();
  }

  ngOnInit(): void {}

  // supStat(id: string) {
  //   this.api.supStat(id);
  // }
  traiterClicBouton() {
    this.demandeSuppression.emit();
  }
}
