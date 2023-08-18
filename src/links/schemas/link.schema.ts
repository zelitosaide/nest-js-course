import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Link {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  segment: string;
}