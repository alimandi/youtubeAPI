import { Module } from '@nestjs/common';
import { YoutubeModule } from './youtube/youtube.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    YoutubeModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/youtubeAPI'),
  ],
})
export class AppModule {}
