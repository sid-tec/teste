import { Injectable } from '@nestjs/common';
import { CreateServidoreDto } from './dto/create-servidore.dto';
import { UpdateServidoreDto } from './dto/update-servidore.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ServidoresService {
  constructor(private prisma: PrismaService) { }


  create(createServidoreDto: CreateServidoreDto) {
    return 'This action adds a new servidore';
  }

  findAll() {
    return this.prisma.servidor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} servidore`;
  }

  update(id: number, updateServidoreDto: UpdateServidoreDto) {
    return `This action updates a #${id} servidore`;
  }

  remove(id: number) {
    return `This action removes a #${id} servidore`;
  }
}
