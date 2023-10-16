import { Injectable, Module, Scope } from "@nestjs/common";
import { CoffeesController } from "./coffees.controller";
import { CoffeesService } from "./coffees.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coffee } from "./entities/coffee.entity";
import { Flavor } from "./entities/flavor.entity";
import { Event } from "src/events/entities/event.entity";
import { COFFEE_BRANDS } from "./coffees.constants";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";

// class MockCoffeesService {}

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     // Do something
//     return ["buddy brew", "nescafe"];
//   }
// }

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
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
    // { provide: COFFEE_BRANDS, useFactory: () => ["buddy brew", "nescafe"] },
    // CoffeeBrandsFactory,
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //     brandsFactory.create(),
    //   inject: [CoffeeBrandsFactory],
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(["buddy brew", "nescafe"]);
        console.log("[!] async factory");
        return coffeeBrands;
      },
      inject: [Connection],
      scope: Scope.TRANSIENT,
    },
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
