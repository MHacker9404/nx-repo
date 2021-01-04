import React from 'react';
import { render } from '@testing-library/react';

import BoardGameReviewDataAccessGames from './board-game-review-data-access-games';

describe('BoardGameReviewDataAccessGames', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoardGameReviewDataAccessGames />);
    expect(baseElement).toBeTruthy();
  });
});
