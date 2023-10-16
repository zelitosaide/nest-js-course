import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";

@Module({
  providers: [
    {
      provide: "CONNECTION",
      useValue: new DataSource({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        password: "pass123",
        port: 5433,
      }).initialize(),
    },
  ],
})
export class DatabaseModule {}
