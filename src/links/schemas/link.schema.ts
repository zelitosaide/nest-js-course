import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LinkDocument = HydratedDocument<Link>;

@Schema()
export class Link {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  segment: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
