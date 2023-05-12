import { Component, Input } from '@angular/core';

type PageTitlePosition = 'center' | 'left' | 'right';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  @Input() public position: PageTitlePosition = 'center';
  @Input() public icon: Optional<string>;
  @Input() public reference: Optional<string>;
  @Input() public label: Optional<string>;
  @Input() public tooltip: Optional<string>;
}
