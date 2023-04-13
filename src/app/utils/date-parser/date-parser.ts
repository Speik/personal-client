import { Injectable } from '@angular/core';
import { DateParserMode, DateLabels } from './declarations';

const MONTHS_PER_YEAR = 12;

@Injectable()
export class DateParser {
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

  /**
   *
   * @param monthsCount Number of months to parse
   * @param mode Determines whether method should work with short labels or not
   * @returns Readable duration in format of '%years% %months%'
   */
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

  /**
   *
   * @param mode Determines whether method should work with short labels or not
   * @param isPlural Determines whether labels should be plural or not
   * @returns Duration part label
   */
  private getYearLabel(mode: DateParserMode, isPlural: boolean): string {
    if (mode === DateParserMode.SHORT) return DateLabels.SHORT_YEAR;
    return ` ${isPlural ? DateLabels.PLURAL_YEAR : DateLabels.YEAR}`;
  }

  /**
   *
   * @param mode Determines whether method should work with short labels or not
   * @param isPlural Determines whether labels should be plural or not
   * @returns Duration part label
   */
  private getMonthLabel(mode: DateParserMode, isPlural: boolean): string {
    if (mode === DateParserMode.SHORT) return DateLabels.SHORT_MONTH;
    return ` ${isPlural ? DateLabels.PLURAL_MONTH : DateLabels.MONTH}`;
  }
}
