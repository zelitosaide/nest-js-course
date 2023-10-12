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
  Res,
} from "@nestjs/common";

@Controller("coffees")
export class CoffeesController {
  @Get()
  // findAll(@Res() response) {
  findAll() {
    // response.status(200).send("This action return all coffees");
    return "This action return all coffees";
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
  remove(@Param(":id") id: string) {
    return `This action removes #${id} coffee`;
  }
}
