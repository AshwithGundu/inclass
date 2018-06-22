import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-formpart1',
  templateUrl: './formpart1.component.html',
  styleUrls: ['./formpart1.component.css']
})
export class Formpart1Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
    this.http.setForm(form.value)
    this.router.navigateByUrl('/part2')
  }

}
