import { Component, Input } from '@angular/core';

type DecorationGridColor = 'dark' | 'light';
type DecorationGridPositionX = 'left' | 'right';
type DecorationGridPositionY = 'bottom' | 'top';

@Component({
  selector: 'app-decoration-grid',
  templateUrl: './decoration-grid.component.html',
})
export class DecorationGridComponent {
  @Input() color: DecorationGridColor = 'dark';
  @Input() xPos: DecorationGridPositionX = 'left';
  @Input() yPos: DecorationGridPositionY = 'bottom';
  @Input() zIndex: number = 0;

  handleDrag() {
    return false;
  }
}
