import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
})
export class WelcomeScreenComponent {
  public isPageScrolled = false;

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isPageScrolled = window.scrollY > 100;
  }

  public handleDrag() {
    return false;
  }

  public handleLearnMore(): void {
    const scrollPoint = window.innerHeight + 100;

    window.scroll({
      top: scrollPoint,
      behavior: 'smooth',
    });
  }
}
