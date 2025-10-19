import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PontosDescarteModule } from './pontos-descarte/pontos-descarte.module';
import { RegistrosDescarteModule } from './registros-descarte/registros-descarte.module';
import { RelatoriosModule } from './relatorios/relatorios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://usuario:senha@cluster0.ixrny.mongodb.net/descarte-residuos?retryWrites=true&w=majority'),
    PontosDescarteModule,
    RegistrosDescarteModule,
    RelatoriosModule,
  ],
})
export class AppModule {}
