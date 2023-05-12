import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CertificatesService } from './certificates.service';
import { ICertificate } from './certificates.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  public isLoading = true;
  public certificatesData: ICertificate[] = [];

  public constructor(public certificatesService: CertificatesService) {}

  public ngOnInit(): void {
    this.getCertificates();
  }

  public getImageUrl(filename: string): string {
    return `${environment.baseStorageUrl}/${filename}`;
  }

  private getCertificates(): void {
    this.isLoading = true;

    this.certificatesService.getCertificates().subscribe((certificates) => {
      this.certificatesData = certificates;
      this.isLoading = false;
    });
  }
}
