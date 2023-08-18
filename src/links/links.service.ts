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

  async remove(id: string) {
    const deletedLink = await this.linkModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedLink;
  }

  async update(id: number, updateLinkDto: UpdateLinkDto) {
    const updatedLink = await this.linkModel
      .findByIdAndUpdate({ _id: id }, updateLinkDto, { new: true })
      .exec();
    return updatedLink;
  }
}
