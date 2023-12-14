import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ServidoresService {

  constructor(private prisma: PrismaService) { }


  create(createServidorDto: Prisma.ServidorCreateInput) {
    return this.prisma.servidor.create({
      data: createServidorDto
    });
  }

  findAll() {
    return this.prisma.servidor.findMany();
  }

  findOne(id: string) {
    return this.prisma.servidor.findUnique({
      where: {
        key: id,
      }
    });
  }

  update(id: string, updateServidorDto: Prisma.ServidorUpdateInput) {
    return this.prisma.servidor.update({
      data: updateServidorDto,
      where: {
        key: id      // Se o seu id não chama id mudar aqui
      }
    });
  }

  remove(id: string) {
    return this.prisma.servidor.delete({
      where: {
        key: id          // Se o seu id não chama id mudar aqui
      }
    });
  }
}
