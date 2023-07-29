import { Controller, Get, HttpCode, Res } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  // @Get("breed")
  // @HttpCode(201)
  @Get()
  // findAll(@Res() response): string {
  findAll(): string {
    return "This action returns all cats";
    // return response.status(202).json({ name: "Hello"});
  }
}
