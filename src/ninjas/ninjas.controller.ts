import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";

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
  createNinja() {
    return {};
  }

  @Put(":id")
  updateNinja(@Param() id: string) {
    return {
      id,
    };
  }

  @Delete(":id")
  removeNinja(@Param() id: string) {
    return {
      id,
    };
  }
}
