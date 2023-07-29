import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CreateNinjaDto } from "./dto/create-ninja.dto";
import { UpdateUserDto } from "./dto/update-ninja.dto";

@Controller("ninjas")
export class NinjasController {
  @Get()
  getNinjas(@Query("type") type: string) {
    return [{ type }];
  }

  @Get(":id")
  getNinja(@Param("id") id: string) {
    return {
      id,
    };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    console.log(createNinjaDto);

    return {
      name: createNinjaDto.name,
    };
  }

  @Put(":id")
  updateNinja(@Param() id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      name: updateUserDto.name,
    };
  }

  @Delete(":id")
  removeNinja(@Param() id: string) {
    return {
      id,
    };
  }
}
