import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import axios from 'axios';
import { dataSchema } from './Schema/data.Schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { queryInput, queryOutput } from './dto/query.dto';

@Injectable()
export class YoutubeService {
  constructor(
    @InjectModel(dataSchema.name)
    private readonly youtubeModel: Model<dataSchema>,
  ) {}

  async getResult(input: queryInput): Promise<queryOutput> {
    const apiKey = '';

    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          type: 'video',
          q: input.query,
          maxResults: 50,
          key: apiKey,
        },
      },
    );
    await Promise.all(
      response.data.items.map(async (item) => {
        await this.youtubeModel.insertMany({
          title: item.snippet.title,
          videoId: item.id.videoId,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          description: item.snippet.description,
        });
      }),
    );

    return {
      message: 'Get Resoult Succsessfuly ...',
    };
  }
}
