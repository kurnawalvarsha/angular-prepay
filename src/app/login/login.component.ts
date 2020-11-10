import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  private username: string;
  private password: string;

  @Input() show: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    console.log("login")
  }

  showPopup() {
      console.log(this); //Show is false
      this.show = true;
      console.log(this); //Show is true but does not trigger the show class
  }

  closePopup() {
      this.show = false;
  }

}
