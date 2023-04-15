import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main/main-page.component';

const BASE_APP_TITLE = 'Kirill Kesarev';
const APP_TITLE_DETAILS = 'Experienced JS::TS Software Developer';

const APP_ROUTES: Routes = [
  { path: '', component: MainPageComponent, title: 'Who Am I?' },
];

export { APP_ROUTES, BASE_APP_TITLE, APP_TITLE_DETAILS };
