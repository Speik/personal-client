import { Component, Input } from '@angular/core';

type PageTitlePosition = 'center' | 'left' | 'right';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  @Input() position: PageTitlePosition = 'left';
  @Input() label: string | undefined;
  @Input() tooltip: string | undefined;
}
