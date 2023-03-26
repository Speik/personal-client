import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
})
export class WelcomeScreenComponent {
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
