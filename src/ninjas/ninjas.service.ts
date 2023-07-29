import { Injectable } from "@nestjs/common";

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: "ninjaA", weapon: "stars" },
    { id: 1, name: "ninjaB", weapon: "nunchucks" },
  ];

  getNinjas(weapon?: "stars" | "nunchucks") {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: string) {
    const ninja = this.ninjas.find((ninja) => ninja.id === +id);

    if (!ninja) throw new Error("ninja not found");

    return ninja;
  }
}
