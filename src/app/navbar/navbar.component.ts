import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

@Component({
    selector: 'ct-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  constructor(private router: Router) { }
  isIn = false;
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true: false;
  }

  gotoHome() {
    this.router.navigateByUrl('/');
  }

  gotoDevelopment() {
    this.router.navigateByUrl('/development');
  }

  gotoContact() {
    this.router.navigateByUrl('/contact');
  }
}
