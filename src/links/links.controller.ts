import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LinksService } from "./links.service";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";
import { Link } from "./schemas/link.schema";

@Controller("links")
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get()
  async findAll(): Promise<Link[]> {
    return this.linksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Link> {
    return this.linksService.findOne(id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linksService.update(id, updateLinkDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.linksService.remove(id);
  }
}
