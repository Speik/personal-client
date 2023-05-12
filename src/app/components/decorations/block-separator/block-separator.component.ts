import { Component, Input, OnInit } from '@angular/core';

type BackgroundColorName = 'default' | 'dark';
type BlockSeparatorDirection = 'right' | 'left';

@Component({
  selector: 'app-block-separator',
  templateUrl: './block-separator.component.html',
})
export class BlockSeparatorComponent implements OnInit {
  @Input() public sourceColorName: BackgroundColorName = 'default';
  @Input() public targetColorName: BackgroundColorName = 'dark';
  @Input() public direction: BlockSeparatorDirection = 'right';

  public ngOnInit(): void {
    if (this.direction === 'left') {
      [this.sourceColorName, this.targetColorName] = [
        this.targetColorName,
        this.sourceColorName,
      ];
    }
  }
}
