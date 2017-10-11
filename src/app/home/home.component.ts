import { Component, ElementRef } from '@angular/core';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent {
  constructor(private element: ElementRef) { }

  scrollDown() {
    console.log("Inside of scroll down");
    (<HTMLInputElement>document.getElementById('info')).scrollIntoView({block: "end", behavior: "smooth"});
  }
}
