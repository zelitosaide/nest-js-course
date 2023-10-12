import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  // findAll(@Res() response) {
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    // response.status(200).send("This action return all coffees");
    // return `This action return all coffees. Limit: ${limit}, offset: ${offset}`;
    return paginationQuery;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return { id, body };
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes #${id} coffee`;
  }
}
