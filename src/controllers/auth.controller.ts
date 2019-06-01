import {
  JsonController,
  Get,
  OnUndefined,
  QueryParams,
  BadRequestError,
  Res,
  Post,
  UnauthorizedError,
  Body
} from 'routing-controllers';
import { Response } from 'koa';
import { IsString } from 'class-validator';

import shiki from '@/shiki';

class AuthParams {
  @IsString()
  public code: string;

  @IsString()
  public state: string;
}

class AuthBody {
  @IsString()
  public code: string;
}

@JsonController()
export default class AuthController {
  @Get('/auth_redirect')
  @OnUndefined(BadRequestError)
  public async authRedirect(
    @QueryParams() { code, state }: AuthParams,
    @Res() res: Response
  ) {
    try {
      const url = decodeURI(state);
      res.redirect(`${url}?code=${code}`);
      return res;
    } catch (e) {
      return;
    }
  }

  @Post('/auth')
  @OnUndefined(UnauthorizedError)
  public async auth(@Body() { code }: AuthBody) {
    try {
      const accessToken = await shiki.auth(code);
      console.log(accessToken);
      return accessToken;
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
