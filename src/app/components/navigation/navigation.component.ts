import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

const PERSONAL_EMAIL = 'speik0102@gmail.com';
const NAVBAR_HEIGHT_BIAS = 0.75;

type NavlinkData = {
  icon: Nullable<string>;
  label: Nullable<string>;
  reference: Nullable<string>;
};

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  public isPageScrolled = false;
  public isSidebarVisible = false;

  public pageScrolledPercents = 0;
  public email: string = PERSONAL_EMAIL;

  public navlinks: NavlinkData[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isPageScrolled = window.scrollY > 0;
    this.pageScrolledPercents = this.getPageScrolledPercents();
  }

  public ngAfterViewInit(): void {
    this.document.querySelectorAll('.page__title').forEach((title) =>
      this.navlinks.push({
        icon: title.getAttribute('icon'),
        reference: title.getAttribute('reference'),
        label: title.getAttribute('label'),
      })
    );
  }

  public showSidebar(): void {
    this.isSidebarVisible = true;
  }

  public onNavlinkClick(targetId: Nullable<string>): void {
    if (!targetId) return;

    const targetElement = this.document.getElementById(targetId);
    if (!targetElement) return;

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

  private getPageScrolledPercents(): number {
    const documentHeight = this.document.body.scrollHeight - window.innerHeight;
    const scrolledPercents = window.scrollY / (documentHeight / 100);

    if (window.scrollY <= 0) {
      return 0;
    }

    return Number(scrolledPercents.toFixed(2));
  }
}
