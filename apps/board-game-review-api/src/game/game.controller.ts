import { Controller, Get } from '@nestjs/common';
import { Game } from '@stores/board-game-review-api-interface';

const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max + 1 - min) + min);
const randomReviews = (game: string) =>
  new Array(randomInteger(1, 3)).fill({}).map(() => ({
    game,
    rating: randomInteger(0, 5),
    content: 'Lorem ipsum dolor sit amet',
  }));

export const games: Game[] = [
  {
    name: 'game a',
    id: 'game-a',
    description: 'game a',
    price: 35,
    review: randomReviews('game-a'),
  },
  {
    name: 'game b',
    id: 'game-b',
    description: 'game b',
    price: 19,
    review: randomReviews('game-b'),
  },
  {
    name: 'game c',
    id: 'game-c',
    description: 'game c',
    price: 20,
    review: randomReviews('game-c'),
  },
];

@Controller('game')
export class GameController {
  @Get() public async getGames(): Promise<Game[]> {
    return [...games];
  }
}
