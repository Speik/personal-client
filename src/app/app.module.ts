import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { MessageModule } from 'primeng/message';
import { ImageModule } from 'primeng/image';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { MouseParallaxDirective } from './directives/mouse-parallax.directive';

import { DateParser } from './utils/date-parser';
import { FormUtils } from './utils/form-utils';
import { PrimaryHttpInterceptor } from './http/http.interceptor';

import { DecorationGridComponent } from './components/decorations/decoration-grid/decoration-grid.component';
import { DecorationCircleComponent } from './components/decorations/decoration-circle/decoration-circle.component';
import { BlockSeparatorComponent } from './components/decorations/block-separator/block-separator.component';

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { JourneyComponent } from './components/journey/journey.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DecorationGridComponent,
    DecorationCircleComponent,
    WelcomeScreenComponent,
    JourneyComponent,
    BlockSeparatorComponent,
    PageTitleComponent,
    NavigationComponent,
    SkillsComponent,
    MouseParallaxDirective,
    ContactComponent,
    FooterComponent,
    CertificatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    TimelineModule,
    RippleModule,
    TooltipModule,
    DialogModule,
    BrowserAnimationsModule,
    ChipModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    SidebarModule,
    MessageModule,
    ImageModule,
  ],
  providers: [
    DateParser,
    FormUtils,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PrimaryHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
