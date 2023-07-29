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
import { NinjasService } from "./ninjas.service";

@Controller("ninjas")
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query("weapon") weapon: "stars" | "nunchucks") {
    // const service = new NinjasService();
    // return service.getNinjas(weapon);
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(":id")
  getNinja(@Param("id") id: string) {
    return this.ninjasService.getNinja(id);
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
