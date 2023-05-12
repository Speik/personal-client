import { Component } from '@angular/core';
import { CvDownloadService } from 'src/app/utils/cv-download.service';

type SocialLink = {
  label: string;
  url: string;
  iconName: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/speik/',
    iconName: 'linkedin',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/speik0102',
    iconName: 'telegram',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Speik',
    iconName: 'github',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/ssspeik/',
    iconName: 'facebook',
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public socialLinks: SocialLink[] = SOCIAL_LINKS;

  public constructor(private cvDownloadService: CvDownloadService) {}

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

  public downloadCv(): void {
    this.cvDownloadService.downloadCv().subscribe();
  }
}
