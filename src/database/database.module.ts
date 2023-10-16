import { DynamicModule, Module } from "@nestjs/common";
import { DataSource, DataSourceOptions } from "typeorm";

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
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: "CONNECTION",
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }
}
