import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) { }
  login()
  {
    console.log("hey")
    this.router.navigateByUrl('register');
  }

  start()
  {

  }
}
