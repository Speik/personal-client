import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
})
export class WelcomeScreenComponent {
  isPageScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isPageScrolled = window.scrollY > 100;
  }

  handleDrag() {
    return false;
  }

  handleLearnMore(): void {
    const scrollPoint = window.innerHeight + 100;

    window.scroll({
      top: scrollPoint,
      behavior: 'smooth',
    });
  }
}
