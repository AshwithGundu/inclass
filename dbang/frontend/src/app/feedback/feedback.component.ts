import { Component, OnInit } from '@angular/core';
import { HttpService } from "src/app/http.service";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  formData = {}
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}