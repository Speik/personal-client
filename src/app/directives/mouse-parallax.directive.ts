import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

const DEFAULT_PARALLAX_INTENSIVITY = 20;
const ANIMATION_DURATION_MS = 300;

type Coordinates = {
  x: number;
  y: number;
};

type ElementParallaxRotation = {
  rotationX: number;
  rotationY: number;
};

@Directive({
  selector: '[appMouseParallax]',
})
export class MouseParallaxDirective implements AfterViewInit {
  @Input() parallaxIntensivity = DEFAULT_PARALLAX_INTENSIVITY;

  content: ElementRef | undefined;
  container: ElementRef;

  constructor(private el: ElementRef) {
    this.container = el;
  }

  ngAfterViewInit(): void {
    this.content = this.getTargetContent(this.container);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(mouseEvent: MouseEvent) {
    if (!this.content) return;

    const { rotationX, rotationY } = this.getRotation(mouseEvent);
    const content = this.content.nativeElement;

    const transformStyles = [
      'translate3d(0px, 0px, 0px)',
      'perspective(900px)',
      `rotateY(${rotationX}deg)`,
      `rotateX(${rotationY}deg)`,
    ];

    content.style.transform = transformStyles.join(' ');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.content) return;

    Object.assign(this.content.nativeElement.style, {
      transitionDuration: `${ANIMATION_DURATION_MS}ms`,
      transitionTimingFunction: 'ease-out',
      transformStyle: 'preserve-3d',
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.content) return;

    this.content.nativeElement.style.transform =
      'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)';
  }

  private getTargetContent(container: ElementRef): ElementRef {
    const containerNativeElement = <Element>container.nativeElement;
    const content = containerNativeElement.children.item(0);

    return new ElementRef(content);
  }

  private getContainerCenter(): Coordinates {
    if (!this.content) {
      return { x: 0, y: 0 };
    }

    const content = this.content.nativeElement;

    return {
      x: content.clientWidth / 2,
      y: content.clientHeight / 2,
    };
  }

  private getCursorPosition(mouseEvent: MouseEvent): Coordinates {
    const rect = this.container.nativeElement.getBoundingClientRect();

    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top,
    };
  }

  private getRotation(mouseEvent: MouseEvent): ElementParallaxRotation {
    const container = this.container.nativeElement;

    const { x: mouseXPos, y: mouseYPos } = this.getCursorPosition(mouseEvent);
    const { x: centerX, y: centerY } = this.getContainerCenter();

    const percentX = (mouseXPos - centerX) / (container.offsetWidth / 2);
    const percentY = -(mouseYPos - centerY) / (container.offsetHeight / 2);

    return {
      rotationX: Number((percentX * this.parallaxIntensivity).toFixed(4)),
      rotationY: Number((percentY * this.parallaxIntensivity).toFixed(4)),
    };
  }
}
