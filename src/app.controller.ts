import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IPets } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("pets/:id")
  getPet(@Param('id') id : string) : {} {
    return this.appService.getPet(id);
  }
  @Get('pets')
  listPets() : {} {
    return this.appService.listPets();
  }
  @Put("pets/:id")
  editPet(@Param('id') id : string, @Body() data : IPets): {} {
    return this.appService.editPet(id, data)
  }
  @Post('pets')
  addPet(@Body() data : IPets): {} {
    return this.appService.addPet(data)
  }
  @Delete('pets/:id')
  deletePet(@Param('id')id : string): {} {
    return this.appService.deletePet(id)
  }
}



