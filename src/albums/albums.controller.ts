import { Controller, Get } from "@nestjs/common";

@Controller("albums")
export class AlbumsController {
  @Get()
  async findAll() {

  }
}
