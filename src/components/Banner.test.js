import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('renders text and background color correctly', () => {
    const text = 'Welcome to our website';
    const backgroundColor = '#ffcc00';
    const { getByText, getByTestId } = render(
      <Banner text={text} backgroundColor={backgroundColor} />
    );

    const banner = getByTestId('banner');
    expect(banner).toHaveStyle(`background-color: ${backgroundColor}`);

    const heading = getByText(text);
    expect(heading).toBeInTheDocument();
  });
});
