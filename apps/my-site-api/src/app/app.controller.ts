import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiResponse } from '@stores/my-site-api-interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): ApiResponse {
    return this.appService.getData();
  }
}
