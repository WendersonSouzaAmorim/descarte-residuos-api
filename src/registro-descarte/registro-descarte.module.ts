import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrosDescarteController } from './registros-descarte.controller';
import { RegistrosDescarteService } from './registros-descarte.service';
import { RegistroDescarte, RegistroDescarteSchema } from './schemas/registro-descarte.schema';
import { PontosDescarteModule } from '../pontos-descarte/pontos-descarte.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RegistroDescarte.name, schema: RegistroDescarteSchema }]),
    PontosDescarteModule,
  ],
  controllers: [RegistrosDescarteController],
  providers: [RegistrosDescarteService],
  exports: [RegistrosDescarteService]
})
export class RegistrosDescarteModule {}
