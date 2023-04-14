import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CertificatesService } from './certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  constructor(public certificatesService: CertificatesService) {}

  public ngOnInit(): void {
    this.certificatesService.getAll().subscribe();
  }

  public getCertificatesCount(): string {
    return String(this.certificatesService.certificates.length);
  }
}
