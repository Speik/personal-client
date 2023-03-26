import { Component, Input } from '@angular/core';

type DecorationCircleSize = 'small' | 'medium' | 'large';
type DecorationCircleColor = 'dark' | 'light';
type DecorationCirclePositionX = 'left' | 'right';
type DecorationCirclePositionY = 'bottom' | 'top';

@Component({
  selector: 'app-decoration-circle',
  templateUrl: './decoration-circle.component.html',
})
export class DecorationCircleComponent {
  @Input() size: DecorationCircleSize = 'medium';
  @Input() color: DecorationCircleColor = 'dark';
  @Input() xPos: DecorationCirclePositionX = 'left';
  @Input() yPos: DecorationCirclePositionY = 'bottom';
  @Input() zIndex: number = 0;

  handleDrag() {
    return false;
  }
}
