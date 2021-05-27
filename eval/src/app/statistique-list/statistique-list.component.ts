import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique-list',
  templateUrl: './statistique-list.component.html',
  styleUrls: ['./statistique-list.component.css'],
})
export class StatistiqueListComponent implements OnInit {
  stat1 = new Statistique('1', 'test1', '10M', 'SUCCESS');
  stat2 = new Statistique('2', 'test2', '20M', 'WARNING');
  constructor() {}

  ngOnInit(): void {}
}
