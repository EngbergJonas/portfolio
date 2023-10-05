import { render } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders all the elements', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('hero')).toBeInTheDocument();

    const heroText = getByTestId(`hero-text`);

    expect(heroText).toBeInTheDocument();
    expect(heroText.children[0]).toHaveTextContent('app.title');
    expect(heroText.children[1]).toHaveTextContent('app.subtitle');
    expect(heroText.children[2]).toHaveTextContent('app.textContent');

    expect(getByTestId(`hero-image`)).toBeInTheDocument();
    expect(getByTestId('signature-image')).toBeInTheDocument();
  });
});
