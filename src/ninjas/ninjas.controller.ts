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
import { UpdateNinjaDto } from "./dto/update-ninja.dto";
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
    return this.ninjasService.getNinja(+id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Put(":id")
  updateNinja(@Param("id") id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  @Delete(":id")
  removeNinja(@Param("id") id: number) {
    return {
      id,
    };
  }
}
