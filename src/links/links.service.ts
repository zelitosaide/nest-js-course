import { Injectable } from "@nestjs/common";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Link } from "./schemas/link.schema";

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<Link>) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const createdLink = new this.linkModel(createLinkDto);
    return createdLink.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string): Promise<Link> {
    return this.linkModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
