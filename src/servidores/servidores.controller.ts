import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { Prisma } from '@prisma/client';

@Controller('servidores')
export class ServidoresController {
  constructor(private readonly servidoresService: ServidoresService) { }

  @Post()
  create(@Body() createServidoreDto: Prisma.ServidorCreateInput) {
    return this.servidoresService.create(createServidoreDto);
  }

  @Get()
  findAll() {
    return this.servidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servidoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServidoreDto: Prisma.ServidorUpdateInput) {
    return this.servidoresService.update(id, updateServidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servidoresService.remove(id);
  }
}
