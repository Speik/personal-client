import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';
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

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { ExperienceComponent } from './components/experience/experience.component';
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
    ExperienceComponent,
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
    CarouselModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
