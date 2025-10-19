import { Module } from '@nestjs/common';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosService } from './relatorios.service';
import { RegistrosDescarteModule } from '../registros-descarte/registros-descarte.module';
import { PontosDescarteModule } from '../pontos-descarte/pontos-descarte.module';

@Module({
  imports: [RegistrosDescarteModule, PontosDescarteModule],
  controllers: [RelatoriosController],
  providers: [RelatoriosService],
})
export class RelatoriosModule {}
