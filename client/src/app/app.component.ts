import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { SectionHeaderComponent } from "./core/section-header/section-header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NavBarComponent, 
    RouterOutlet, 
    SectionHeaderComponent
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
