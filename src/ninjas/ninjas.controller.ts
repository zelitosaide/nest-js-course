import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller("ninjas")
export class NinjasController {
  @Get()
  getNinjas() {
    return [];
  }

  @Get(":id")
  getNinja() {
    return {}; 
  }

  @Post()
  createNinja() {
    return {};
  }

  @Put(":id")
  updateNinja() {
    return {};
  }
}
