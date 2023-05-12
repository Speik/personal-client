import { Component, Input, OnInit } from '@angular/core';

type DecorationCircleSize = string | number | 'small' | 'medium' | 'large';
type DecorationCirclePositionX = 'left' | 'right';
type DecorationCirclePositionY = 'bottom' | 'top';

const CIRCLE_PERCENT_SIZES = new Map<DecorationCircleSize, number>([
  ['small', 25],
  ['medium', 60],
  ['large', 100],
]);

@Component({
  selector: 'app-decoration-circle',
  templateUrl: './decoration-circle.component.html',
})
export class DecorationCircleComponent implements OnInit {
  @Input() public size: DecorationCircleSize = 'medium';
  @Input() public xPos: DecorationCirclePositionX = 'left';
  @Input() public yPos: DecorationCirclePositionY = 'bottom';
  @Input() public zIndex: number = 0;

  /**
   * Just applies shorthand for circle size if specified,
   * otherwise uses custom percentage
   */
  public ngOnInit(): void {
    this.size = `${CIRCLE_PERCENT_SIZES.get(this.size) ?? this.size}%`;
  }

  public handleDrag() {
    return false;
  }
}
