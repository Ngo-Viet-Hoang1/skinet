import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pager',
  imports: [    
    PaginationModule,
  ],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChange(event: PageChangedEvent): void {
    this.pageChanged.emit(event.page);
  }
}
