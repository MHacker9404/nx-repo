import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Cart } from '@stores/board-game-review-api-interface';

@Controller('cart')
export class CartController {
  @Get() public async getCart(): Promise<Cart> {
    return 'cart';
  }
  @Post() public async addItemToCart(@Body() item: any): Promise<Cart> {
    return 'cart';
  }
  @Put() public async updateItemInCart(@Body() item: any): Promise<Cart> {
    return 'cart';
  }
}
