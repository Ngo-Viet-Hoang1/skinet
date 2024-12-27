import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  imports: [],
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent {
  @Input() totalCount = 0;
  @Input() pageSize = 0;
  @Input() pageNumber = 0;
}
