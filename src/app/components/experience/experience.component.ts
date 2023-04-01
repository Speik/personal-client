import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { IExperience } from './experience.model';
import { ExperienceService } from './experience.service';

const MONTHS_PER_YEAR = 12;
const DEFAULT_EXPERIENCE_DESCRIPTION = 'No description';
const DESCRIPTION_SEGMENT_CONTENT_PLACEHOLDER = '%CONTENT%';

const DESCRIPTION_SEGMENT_FORMAT = `
  <p class="mb-5 pl-4 border-green-400 border-left-3">
    ${DESCRIPTION_SEGMENT_CONTENT_PLACEHOLDER}
  </p>
`;

type ExperienceFormat = { years: number; months: number };
type ExperienceModalDetails = {
  isVisible: boolean;
  data: Nullable<IExperience>;
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements AfterViewInit {
  experienceModalDetails: ExperienceModalDetails = {
    isVisible: false,
    data: null,
  };

  constructor(
    public experienceService: ExperienceService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.experienceService.getAll().subscribe();
  }

  ngAfterViewInit(): void {
    const carouselBtnNext = (<HTMLElement>this.el.nativeElement).querySelector(
      '.p-carousel-next'
    );

    this.renderer.addClass(carouselBtnNext, 'pulse');

    this.renderer.listen(carouselBtnNext, 'click', () => {
      this.renderer.removeClass(carouselBtnNext, 'pulse');
    });
  }

  countTotalExperience(): number {
    return this.experienceService.experience.reduce((result, item) => {
      result += this.countExperience(item);
      return result;
    }, 0);
  }

  countExperience({ employedAt, leaveAt }: IExperience): number {
    return (
      leaveAt.getMonth() -
      employedAt.getMonth() +
      MONTHS_PER_YEAR * (leaveAt.getFullYear() - employedAt.getFullYear()) +
      1
    );
  }

  formatExperienceFromMonths(months: number): ExperienceFormat {
    return {
      years: Math.floor(months / MONTHS_PER_YEAR),
      months: months % MONTHS_PER_YEAR,
    };
  }

  getDisplayExperience(experience: Nullable<IExperience>): string {
    if (!experience) {
      return 'Unable to count experience';
    }

    const experienceMonths = this.countExperience(experience);
    const { years, months } = this.formatExperienceFromMonths(experienceMonths);

    const displayYears = years === 1 ? `${years} year` : `${years} years`;
    const displayMonths = months === 1 ? `${months} month` : `${months} months`;

    if (!months) return displayYears;
    if (!years) return displayMonths;
    return `${displayYears} ${displayMonths}`;
  }

  getTitleTooltip(): string {
    const totalExperience = this.countTotalExperience();
    const { years, months } = this.formatExperienceFromMonths(totalExperience);

    const result = Boolean(months) ? `${years}y ${months}mo` : `${years}y`;

    return `Currently I have ${result} of working experience`;
  }

  showExperienceDetails(experience: IExperience): void {
    this.experienceModalDetails.data = experience;
    this.experienceModalDetails.isVisible = true;
  }

  hideExperienceDetails(): void {
    this.experienceModalDetails.data = null;
    this.experienceModalDetails.isVisible = false;
  }

  formatDescription(experienceDescription: string | undefined): string {
    const SEGMENT_SEPARATOR = '\n';

    if (!experienceDescription) {
      return DEFAULT_EXPERIENCE_DESCRIPTION;
    }

    return experienceDescription
      .split(SEGMENT_SEPARATOR)
      .reduce((result, segment) => {
        const content = segment.trim();

        if (!content) {
          return result;
        }

        return result.concat(
          DESCRIPTION_SEGMENT_FORMAT.replace(
            DESCRIPTION_SEGMENT_CONTENT_PLACEHOLDER,
            content
          )
        );
      }, '');
  }
}
