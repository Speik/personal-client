import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DecorationGridComponent } from './components/decorations/decoration-grid/decoration-grid.component';
import { DecorationCircleComponent } from './components/decorations/decoration-circle/decoration-circle.component';
import { BlockSeparatorComponent } from './components/decorations/block-separator/block-separator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';

import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
    TooltipModule,
    DialogModule,
    BrowserAnimationsModule,
    ChipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
