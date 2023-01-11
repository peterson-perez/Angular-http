import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Pages } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Pages

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
