import { Injectable } from "@nestjs/common";

import { FormattedDate } from "./app.interface";

@Injectable()
export class AppService {
  getHello(): FormattedDate {
    const date = new Date();

    return {
      date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }
}
