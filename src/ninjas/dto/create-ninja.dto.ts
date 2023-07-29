import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
  @MinLength(10)
  name: string;

  @IsEnum(["stars", "nunchucks"], {
    message: "weapon must be one of the following values: stars or nunchucks",
  })
  weapon: "stars" | "nunchucks";
}
