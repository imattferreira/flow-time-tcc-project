import dayjs from "dayjs";

import { IDateProvider } from "./IDateProvider";

export class DateProvider implements IDateProvider {
  parseDate(date: string): Date {
    return dayjs(date).toDate();
  }

}
