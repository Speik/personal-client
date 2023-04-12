import { Injectable } from '@angular/core';

const MONTHS_PER_YEAR = 12;

enum DateParserMode {
  SHORT = 'short',
  DEFAULT = 'default',
}

enum DateLabels {
  SHORT_YEAR = 'y',
  SHORT_MONTH = 'mo',
  YEAR = 'year',
  MONTH = 'month',
  PLURAL_YEAR = 'years',
  PLURAL_MONTH = 'months',
}

@Injectable()
export class DateParserService {
  public parseMode = DateParserMode;
  public dateLabels = DateLabels;

  /**
   *
   * @param startDate Start date to count months from
   * @param endDate End date to count months to
   * @returns Number of months between specified dates
   */
  public getMonthsBetween(startDate: Date, endDate: Date): number {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      MONTHS_PER_YEAR * (endDate.getFullYear() - startDate.getFullYear()) +
      1
    );
  }

  public parseMonthsToDuration(
    monthsCount: number,
    mode: DateParserMode
  ): string {
    const years = Math.floor(monthsCount / MONTHS_PER_YEAR);
    const months = monthsCount % MONTHS_PER_YEAR;

    const yearLabel = this.getYearLabel(mode, years > 1);
    const monthLabel = this.getMonthLabel(mode, months > 1);

    const displayYears = `${years}${yearLabel}`;
    const displayMonths = `${months}${monthLabel}`;

    if (!years) return displayMonths;
    if (!months) return displayYears;

    return `${displayYears} ${displayMonths}`;
  }

  private getYearLabel(mode: DateParserMode, isPlural: boolean): string {
    if (mode === DateParserMode.SHORT) return DateLabels.SHORT_YEAR;
    return ` ${isPlural ? DateLabels.PLURAL_YEAR : DateLabels.YEAR}`;
  }

  private getMonthLabel(mode: DateParserMode, isPlural: boolean): string {
    if (mode === DateParserMode.SHORT) return DateLabels.SHORT_MONTH;
    return ` ${isPlural ? DateLabels.PLURAL_MONTH : DateLabels.MONTH}`;
  }
}
