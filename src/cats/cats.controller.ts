import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get("breed")
  @HttpCode(201)
  findAll(): string {
    return "This action returns all cats";
  }
}
