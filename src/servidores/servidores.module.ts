import { Module } from '@nestjs/common';
import { ServidoresService } from './servidores.service';
import { ServidoresController } from './servidores.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [ServidoresController],
  providers: [ServidoresService],
})
export class ServidoresModule { }
