import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Post()
  async create(): Promise<string> {
    return "This action adds a new cat";
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<string> {
    return `This action returns a #${id} cat`;
  }
}
