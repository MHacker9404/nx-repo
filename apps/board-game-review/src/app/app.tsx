import React, { useEffect, useState } from 'react';
import {API_URL, Game}from '@stores/board-game-review-api-interface';
import {TileGrid, Tile, TileRightCorner, TileLeftCorner, TileTitle, ImageWrapper, Image} from "@stores/board-game-review/ui-tile";
import {ratingFormat, currencyFormat} from "@stores/board-game-review/util-formatters";
import {useGames} from "@stores/board-game-review/data-access-games";

export function App() {
    const games = useGames();
  return (
      <>
        <div>Board Game Hoard: Review</div>
          <TileGrid>
          {
                games.map(game => {
                const href = `/${game.id}`;
                return (
                <a href={href} key={game.id} style={{textDecoration:'none', color:'inherit'}}>
                    <Tile>
                        {game.image && (
                            <ImageWrapper>
                                <Image src={game.image} />
                            </ImageWrapper>
                        )}
                        <TileTitle>{game.name}</TileTitle>
                        <TileLeftCorner>{ratingFormat(game.rating)}</TileLeftCorner>
                        <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
                    </Tile>
                </a>
                );
                })
          }
          </TileGrid>
      </>
  );
}

export default App;
