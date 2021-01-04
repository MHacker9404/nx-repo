import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@stores/my-site-api-interface';

@Injectable()
export class AppService {
  getData(): ApiResponse {
    return { message: 'Welcome to my-site-api!' };
  }
}
