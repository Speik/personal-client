import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

const APP_TITLE = 'Kirill Kesarev';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = APP_TITLE;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    document.title = this.title;
    this.primengConfig.ripple = true;
  }
}
