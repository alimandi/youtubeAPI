import { Types } from 'mongoose';
import {
  AsyncModelFactory,
  Schema,
  Prop,
  SchemaFactory,
} from '@nestjs/mongoose';

@Schema({
  collection: 'dataSchema',
  timestamps: true,
})
export class dataSchema {
  @Prop()
  title: String;
  @Prop()
  videoId: String;
  @Prop()
  channelTitle: String;
  @Prop()
  channelId: String;
  @Prop()
  description: String;
}

export type UserDocument = dataSchema & Document;

export const youtubeSchema = SchemaFactory.createForClass(dataSchema);

export const dataModelFactory: AsyncModelFactory = {
  name: dataSchema.name,

  useFactory: async () => {
    const Schema = youtubeSchema;

    return Schema;
  },
};
