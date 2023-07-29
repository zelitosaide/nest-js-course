import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NinjasModule } from "./ninjas/ninjas.module";
import { CatsController } from "./cats/cats.controller";

@Module({
  imports: [NinjasModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
