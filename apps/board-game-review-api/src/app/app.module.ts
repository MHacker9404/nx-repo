import { Module } from '@nestjs/common';
import { CartController } from '../cart/cart.controller';
import { GameController } from '../game/game.controller';
import { ReviewController } from '../review/review.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    GameController,
    ReviewController,
    CartController,
  ],
  providers: [AppService],
})
export class AppModule {}
