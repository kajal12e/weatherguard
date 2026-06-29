import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string; // ← This was missing

  @Prop()
  name: string;

  @Prop()
  provider: string; // 'local', 'google', 'github'

  @Prop()
  providerId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);