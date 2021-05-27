import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique } from './models/statistique';
import { RetourApi } from './models/retourApi';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public stat: Statistique[] = [];
  private readonly API_URL = 'https://stats.naminilamy.fr/';
  private statSauvegardees: Statistique[] = [];
  constructor(private http: HttpClient) {}

  getStats(): Promise<Statistique[]> {
    return this.http
      .get(this.API_URL)
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

  // supStat(id: string) {
  //   this.http.delete(this.API_URL);
  //   let todelete = this.stat.findIndex((p) => p.id === id);
  //   this.stat.splice(todelete, 1);
  // }

  supStat(id: string): Promise<RetourApi<void>> {
    return this.http
      .delete(this.API_URL + id)
      .toPromise()
      .then(
        () => {
          let position = this.statSauvegardees.findIndex((c) => c.id === id);
          if (position != -1) {
            this.statSauvegardees.splice(position, 1);
          }
          return { statut: 'OK' };
        },
        () => {
          return { statut: 'KO' };
        }
      );
  }
}
