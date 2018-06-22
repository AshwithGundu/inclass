import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formpart1Component } from './formpart1/formpart1.component';
import { Formpart2Component } from './formpart2/formpart2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    Formpart1Component,
    Formpart2Component,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpService],
   bootstrap: [AppComponent]
})
export class AppModule { }
