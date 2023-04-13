import { Component, Input } from '@angular/core';

type DecorationGridPositionX = 'left' | 'right';
type DecorationGridPositionY = 'bottom' | 'top';

@Component({
  selector: 'app-decoration-grid',
  templateUrl: './decoration-grid.component.html',
})
export class DecorationGridComponent {
  @Input() xPos: DecorationGridPositionX = 'left';
  @Input() yPos: DecorationGridPositionY = 'bottom';
  @Input() zIndex: number = 0;

  public handleDrag() {
    return false;
  }
}
