import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-formpart2',
  templateUrl: './formpart2.component.html',
  styleUrls: ['./formpart2.component.css']
})
export class Formpart2Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){

    var a = []
    if (form.value.GPS) {
      a.push('GPS')
    }
    if (form.value['Security Lock']) {
      a.push('Security Lock')
    }
    if (form.value['Cargo Mat']) {
      a.push('Cargo Mat')
    }
    form.value.features = a;
    
    var formpart1 = this.http.getForm()
    this.http.setForm({...formpart1,...form.value})
    this.http.postService().subscribe(
      res => {
        console.log(res)
        this.router.navigateByUrl('/feedback')
      },
      err => {
          console.log(err)
      }
    )
    
}

}
