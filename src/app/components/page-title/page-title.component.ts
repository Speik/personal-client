import { Component, Input } from '@angular/core';

type PageTitlePosition = 'center' | 'left' | 'right';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  @Input() position: PageTitlePosition = 'center';
  @Input() icon: Optional<string>;
  @Input() reference: Optional<string>;
  @Input() label: Optional<string>;
  @Input() tooltip: Optional<string>;
}
