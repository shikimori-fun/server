import { JsonController, Get, QueryParams } from 'routing-controllers';
import { IsString, IsOptional } from 'class-validator';

import shiki from '@/shiki';

class SearchParams {
  @IsOptional()
  @IsString()
  public match?: string;
}

@JsonController()
export default class AnimeSearchController {
  @Get('/search')
  public async search(@QueryParams() { match }: SearchParams) {
    try {
      return await shiki.search(match);
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
