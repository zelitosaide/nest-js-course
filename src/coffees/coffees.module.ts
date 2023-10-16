import { Module } from "@nestjs/common";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";
import { Event } from "src/events/entities/event.entity";
import { COFFEE_BRANDS } from "./coffees.constants";

// class MockCoffeesService {}

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === "development"
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    CoffeesService,
    // { provide: COFFEE_BRANDS, useValue: ["buddy brew", "nescafe"] },
    { provide: COFFEE_BRANDS, useFactory: () => ["buddy brew", "nescafe"] },
  ],
  // providers: [{ provide: CoffeesService, useValue: new MockCoffeesService() }],
  exports: [CoffeesService],
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useClass: CoffeesService,
  //   },
  // ],
})
export class CoffeesModule {}
