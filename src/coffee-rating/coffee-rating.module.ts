import { Module } from "@nestjs/common";
import { CoffeeRatingService } from "./coffee-rating.service";
import { CoffeesModule } from "src/coffees/coffees.module";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.register({
      type: "postgres",
      host: "localhost",
      username: "postgres",
      password: "pass123",
      port: 5433,
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
