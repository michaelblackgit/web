import { NgModule, Component,
         Injectable, AfterViewInit }      from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  constructor() {}
	ngAfterViewInit() {}
  title = 'app';
}
