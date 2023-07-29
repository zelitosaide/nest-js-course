import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller("cats")
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
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
