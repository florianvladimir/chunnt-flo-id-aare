import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AareService } from './home/aare-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './home/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
