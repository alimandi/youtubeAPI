import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeController } from './youtube.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { dataModelFactory } from './Schema/data.Schema';

@Module({
  imports: [MongooseModule.forFeatureAsync([dataModelFactory])],
  controllers: [YoutubeController],
  providers: [YoutubeService],
})
export class YoutubeModule {}
