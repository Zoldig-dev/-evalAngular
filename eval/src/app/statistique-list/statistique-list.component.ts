import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique-list',
  templateUrl: './statistique-list.component.html',
  styleUrls: ['./statistique-list.component.css'],
})
export class StatistiqueListComponent implements OnInit {
  @Input() public statistique!: Statistique;

  constructor() {}

  ngOnInit(): void {}
}
