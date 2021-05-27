import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueListComponent } from './statistique-list/statistique-list.component';
import { FormComponent } from './form/form.component';
import { BordureDirective } from './directives/bordure.directive';

@NgModule({
  declarations: [AppComponent, StatistiqueListComponent, FormComponent, BordureDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
