import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
// import { FormattedDate } from "./app.interface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): FormattedDate {
  //   return this.appService.getHello();
  // }

  @Get()
  getAlbums() {
    return this.appService.getAlbums();
  }
}
