import { Test, TestingModule } from "@nestjs/testing";
import { PlaylistSongsController } from "./playlist_songs.controller";

describe("PlaylistSongsController", () => {
  let controller: PlaylistSongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistSongsController],
    }).compile();

    controller = module.get<PlaylistSongsController>(PlaylistSongsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
