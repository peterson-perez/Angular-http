import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
   
  }
  
  edit = () => {
  this.routes.navigate(['/Products'])
}

}
