import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, now } from "mongoose";

export type LinkDocument = HydratedDocument<Link>;

@Schema({ timestamps: true })
export class Link {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  segment: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
