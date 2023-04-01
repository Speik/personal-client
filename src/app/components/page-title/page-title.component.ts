import { Component, Input } from '@angular/core';

type PageTitlePosition = 'center' | 'left' | 'right';
const DEFAULT_LABEL = '<No label>';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent {
  @Input() position: PageTitlePosition = 'left';
  @Input() label: string = DEFAULT_LABEL;
  @Input() tooltip: string | undefined;
}
