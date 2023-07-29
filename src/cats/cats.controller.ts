import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("cats")
export class CatsController {
  // @Get("breed")
  // @HttpCode(201)
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return "This action returns all cats";
  }
}
