import React from 'react';
import { render } from '@testing-library/react';

import BoardGameReviewUtilFormatters from './board-game-review-util-formatters';

describe('BoardGameReviewUtilFormatters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoardGameReviewUtilFormatters />);
    expect(baseElement).toBeTruthy();
  });
});
