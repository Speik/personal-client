import { Component, OnInit } from '@angular/core';

import { IJourney } from './journey.model';
import { JourneyService } from './journey.service';
import { DateParserService } from 'src/app/utils/date-parser.service';

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
  journeyModalDetails: JourneyModalDetails = {
    isVisible: false,
    data: null,
  };

  constructor(
    public journeyService: JourneyService,
    public dateParserService: DateParserService
  ) {}

  public ngOnInit(): void {
    this.journeyService.getAll().subscribe();
  }

  public handleLearnMoreClick(event: MouseEvent, journey: IJourney): void {
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
    return this.dateParserService.parseMonthsToDuration(
      this.getTotalJourneyMonths(),
      this.dateParserService.parseMode.SHORT
    );
  }

  public getJourneyDuration(journey: Nullable<IJourney>): string {
    if (!journey) return '<No duration>';

    const { employedAt, leaveAt } = journey;

    return this.dateParserService.parseMonthsToDuration(
      this.dateParserService.getMonthsBetween(employedAt, leaveAt),
      this.dateParserService.parseMode.DEFAULT
    );
  }

  private getTotalJourneyMonths(): number {
    return this.journeyService.journey.reduce((result, item) => {
      const { employedAt, leaveAt } = item;

      const monthsCount = this.dateParserService.getMonthsBetween(
        employedAt,
        leaveAt
      );

      return (result += monthsCount);
    }, 0);
  }
}
