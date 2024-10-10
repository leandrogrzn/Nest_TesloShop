import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/fileFilter';
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors( FileInterceptor('file' ,{
    fileFilter: fileFilter
  }) )
  uploadProductImage(
    @UploadedFile()file: Express.Multer.File,
  ){

    if ( !file ) {
      throw new BadRequestException('Make sure that files is an image0');
    }

    return {fileName: file.originalname};
  }
  
}
