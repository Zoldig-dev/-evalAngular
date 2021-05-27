import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public stat: Statistique[] = [];
  constructor(private http: HttpClient) {}
  getStats(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr/')
      .toPromise()
      .then(
        (data: any) => {
          let tabStat: Statistique[] = [];
          data.forEach((stat: any) => {
            tabStat.push(
              new Statistique(
                stat.id,
                stat.title,
                stat.value,
                stat.appreciation
              )
            );
          });
          this.stat = tabStat;
          return tabStat;
        },
        (e) => e
      );
  }
}
