import React from 'react';
import { render } from '@testing-library/react';

import BoardGameReviewUiTile from './board-game-review-ui-tile';

describe('BoardGameReviewUiTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoardGameReviewUiTile />);
    expect(baseElement).toBeTruthy();
  });
});
