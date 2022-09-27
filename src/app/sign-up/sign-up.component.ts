import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: Order = new Order("","", "","");

  constructor() { }

  ngOnInit(): void {
  }
  submitted="false";
  
  onSubmit(){
    console.log(this.model)
  }

}

export class Order {
  constructor(
      public firstname: string,
      public lastname: String,
      public email: string,
      private password: string
  ) {}
}