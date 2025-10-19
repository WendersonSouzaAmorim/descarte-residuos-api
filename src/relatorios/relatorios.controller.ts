import { Controller, Get } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';

@Controller('relatorio')
export class RelatoriosController {
  constructor(private readonly relatoriosService: RelatoriosService) {}

  @Get()
  async gerarRelatorio() {
    return this.relatoriosService.gerarRelatorioCompleto();
  }
}
