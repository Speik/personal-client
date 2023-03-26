import { Component, HostListener } from '@angular/core';

const PERSONAL_EMAIL = 'speik0102@gmail.com';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isPageScrolled = false;
  email: string = PERSONAL_EMAIL;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isPageScrolled = window.scrollY > 100;
  }
}
