import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MouseParallaxDirective } from './directives/mouse-parallax.directive';

import { DecorationGridComponent } from './components/decorations/decoration-grid/decoration-grid.component';
import { DecorationCircleComponent } from './components/decorations/decoration-circle/decoration-circle.component';
import { BlockSeparatorComponent } from './components/decorations/block-separator/block-separator.component';

import { DateParserService } from './utils/date-parser.service';

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { JourneyComponent } from './components/journey/journey.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MessagesModule,
  ],
  providers: [DateParserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
