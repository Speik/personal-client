import { Component } from '@angular/core';

type SocialLink = {
  label: string;
  url: string;
  iconName: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: '',
    iconName: 'linkedin',
  },
  {
    label: 'Telegram',
    url: '',
    iconName: 'telegram',
  },
  {
    label: 'GitHub',
    url: '',
    iconName: 'github',
  },
  {
    label: 'Facebook',
    url: '',
    iconName: 'facebook',
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialLinks: SocialLink[] = SOCIAL_LINKS;

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
