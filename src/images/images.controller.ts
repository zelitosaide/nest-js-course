import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  ParseFilePipeBuilder,
  HttpStatus,
} from "@nestjs/common";
import { ImagesService } from "./images.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { UpdateImageDto } from "./dto/update-image.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("images")
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post("upload-file")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      body: createImageDto,
      file: file.buffer.toString(),
    };
  }

  @Post("upload-file-pass-validation")
  @UseInterceptors(FileInterceptor("file"))
  uploadFileAndPassValidation(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "image/jpeg",
        })
        .addMaxSizeValidator({
          maxSize: 1000,
        })
        .build({
          fileIsRequired: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file?: Express.Multer.File,
  ) {
    return {
      body: createImageDto,
      file: file?.buffer.toString(),
    };
  }

  @Post("upload-file-fail-validation")
  @UseInterceptors(FileInterceptor("file"))
  uploadFileAndFailValidation(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: "jpg" })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    return {
      body: createImageDto,
      file: file.buffer.toString(),
    };
  }

  // @Post("upload")
  // @UseInterceptors(FileInterceptor("image"))
  // uploadFile(
  //   @Body() createImageDto: CreateImageDto,
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         new MaxFileSizeValidator({ maxSize: 100000000 }),
  //         new FileTypeValidator({ fileType: "image/jpeg" }),
  //       ],
  //     }),
  //   )
  //   image: Express.Multer.File,
  // ) {
  //   return {
  //     createImageDto,
  //     image: image.buffer.toString(),
  //   };
  // }

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.imagesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.imagesService.remove(+id);
  }
}
