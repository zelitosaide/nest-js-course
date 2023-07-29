import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller("cats")
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return "This action adds a new cat";
  }

  @Get()
  async findAll(@Query("limit") limit: string) {
    return `This action returns all cats (limit: ${limit} items)`;
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<string> {
    return `This action returns a #${id} cat`;
  }
}
