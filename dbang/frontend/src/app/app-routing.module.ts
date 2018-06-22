import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formpart1Component } from './formpart1/formpart1.component';
import { Formpart2Component } from './formpart2/formpart2.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', component: Formpart1Component},
  { path: 'part2', component: Formpart2Component},
  { path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
