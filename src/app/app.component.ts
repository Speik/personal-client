import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { share } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient) {}

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  public ngAfterViewInit(): void {
    if (!environment.watchVisits) {
      return;
    }

    this.http.get('guests/visit').pipe(share()).subscribe();
  }
}
