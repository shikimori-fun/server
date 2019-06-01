import { JsonController, Get } from 'routing-controllers';

import shiki from '@/shiki';

@JsonController()
export default class UserController {
  @Get('/user')
  public async getUser() {
    return await shiki.user('');
  }
}
