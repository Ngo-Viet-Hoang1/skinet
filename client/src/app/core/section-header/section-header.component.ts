import { BreadcrumbComponent, BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$?: Observable<any[]>;

  constructor(
    private breadcrumbService: BreadcrumbService 
  ) {}

  ngOnInit() {
    this.breadcrumb$ = this.breadcrumbService.breadcrumbs$;
  }
  
}
