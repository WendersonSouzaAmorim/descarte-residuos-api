import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PontoDescarte } from '../../pontos-descarte/schemas/ponto-descarte.schema';

export type RegistroDescarteDocument = RegistroDescarte & Document;

@Schema()
export class RegistroDescarte {
  @Prop({ required: true })
  nomeUsuario: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'PontoDescarte' })
  pontoDescarteId: Types.ObjectId;

  @Prop({ required: true, enum: ['plástico', 'papel', 'orgânico', 'eletrônico', 'vidro', 'metal'] })
  tipoResiduo: string;

  @Prop({ required: true })
  quantidade: number;

  @Prop({ default: Date.now })
  dataDescarte: Date;

  @Prop()
  observacoes: string;
}

export const RegistroDescarteSchema = SchemaFactory.createForClass(RegistroDescarte);
