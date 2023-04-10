import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, ElementRef } from '@angular/core';

const PERSONAL_EMAIL = 'speik0102@gmail.com';
const NAVBAR_HEIGHT_BIAS = 0.75;

type NavlinkTargetId = 'skills' | 'experience' | 'contact';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isPageScrolled = false;
  isSidebarVisible = false;

  pageScrolledPercents = 0;
  email: string = PERSONAL_EMAIL;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isPageScrolled = window.scrollY > 100;
    this.pageScrolledPercents = this.getPageScrolledPercents();
  }

  getPageScrolledPercents(): number {
    const documentHeight = this.document.body.scrollHeight - window.innerHeight;
    const scrolledPercents = window.scrollY / (documentHeight / 100);

    if (window.scrollY <= 0) {
      return 0;
    }

    return Number(scrolledPercents.toFixed(2));
  }

  showSidebar(): void {
    this.isSidebarVisible = true;
  }

  handleNavlink(targetId: NavlinkTargetId): void {
    const targetElement = this.document.getElementById(targetId)!;
    const navbarElement = (<HTMLElement>this.el.nativeElement).querySelector(
      'nav'
    )! as HTMLElement;

    const scrollPosition =
      targetElement.offsetTop - navbarElement.offsetHeight * NAVBAR_HEIGHT_BIAS;

    window.scroll({
      top: scrollPosition,
      behavior: 'smooth',
    });

    this.isSidebarVisible = false;
  }
}
