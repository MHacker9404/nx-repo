import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Review } from '@stores/board-game-review-api-interface';

@Controller('review')
export class ReviewController {
  @Get(':game') public async getReviews(
    @Param('game') game: string
  ): Promise<Review[]> {
    return [];
  }
  @Post(':game') public async createReview(
    @Param('game') game: string,
    @Body() review: Review
  ): Promise<Review> {
    return undefined;
  }
}
