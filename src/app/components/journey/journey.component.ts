import { Component, HostListener, OnInit } from '@angular/core';

import { IJourney } from './journey.model';
import { JourneyService } from './journey.service';
import { DateParser, DateParserMode } from 'src/app/utils/date-parser';

const LARGE_BREAKPOINT_WIDTH = 1023;
const DEFAULT_JOURNEY_DESCRIPTION = '<No Description>';

type JourneyModalDetails = {
  isVisible: boolean;
  data: Nullable<IJourney>;
};

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
})
export class JourneyComponent implements OnInit {
  public isLoading = true;
  public journeyData: IJourney[] = [];

  public isLargeBreakpoint: boolean = false;

  public journeyModalDetails: JourneyModalDetails = {
    isVisible: false,
    data: null,
  };

  constructor(
    public journeyService: JourneyService,
    public dateParser: DateParser
  ) {}

  @HostListener('window:resize')
  public onResize(): void {
    this.isLargeBreakpoint = this.detectLargeBreakpoint();
  }

  public ngOnInit(): void {
    this.getJourney();
    this.isLargeBreakpoint = this.detectLargeBreakpoint();
  }

  public onLearnMoreClick(event: MouseEvent, journey: IJourney): void {
    const button = <Nullable<HTMLElement>>event.target;

    this.journeyModalDetails.data = journey;
    this.journeyModalDetails.isVisible = true;

    if (!button) return;

    button.classList.add('used');
  }

  public getDescriptionSegments(description: string | undefined): string[] {
    const SEGMENT_SEPARATOR = '\n';

    if (!description) return [DEFAULT_JOURNEY_DESCRIPTION];

    return description
      .split(SEGMENT_SEPARATOR)
      .map((segment) => segment.trim())
      .filter(Boolean);
  }

  public getTotalJourneyDuration(): string {
    return this.dateParser.parseMonthsToDuration(
      this.getTotalJourneyMonths(),
      DateParserMode.SHORT
    );
  }

  public getJourneyDuration(journey: Nullable<IJourney>): string {
    if (!journey) return '<No duration>';

    const startedAt = new Date(journey.startedAt);
    const endedAt = journey.endedAt ? new Date(journey.endedAt) : new Date();

    return this.dateParser.parseMonthsToDuration(
      this.dateParser.getMonthsBetween(startedAt, endedAt),
      DateParserMode.DEFAULT
    );
  }

  private getTotalJourneyMonths(): number {
    return this.journeyData.reduce((result, item) => {
      const startedAt = new Date(item.startedAt);
      const endedAt = item.endedAt ? new Date(item.endedAt) : new Date();

      const monthsCount = this.dateParser.getMonthsBetween(startedAt, endedAt);

      return (result += monthsCount);
    }, 0);
  }

  private detectLargeBreakpoint(): boolean {
    return window.innerWidth <= LARGE_BREAKPOINT_WIDTH;
  }

  private getJourney(): void {
    this.isLoading = true;

    this.journeyService.getJourney().subscribe((journey) => {
      this.journeyData = journey;
      this.isLoading = false;
    });
  }
}
