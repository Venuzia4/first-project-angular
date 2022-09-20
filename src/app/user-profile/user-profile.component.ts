import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
    name = 'Doe';
    firstName = 'John';
    age = 25;
    quote = '';
    imageSrc = 'https://randomuser.me/api/portraits/lego/2.jpg';
    toto=true;
    
  

  constructor() { }

  ngOnInit(): void {
  }
  toggleData() {
    this.toto = !this.toto;
  }

 

}
