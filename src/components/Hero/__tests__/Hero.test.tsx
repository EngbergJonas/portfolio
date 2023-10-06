import { render } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders all the elements', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('hero')).toBeInTheDocument();

    const heroInfo = getByTestId(`hero-info`);

    expect(heroInfo).toBeInTheDocument();
    expect(heroInfo.children[0]).toHaveTextContent('hero.title');
    expect(heroInfo.children[1]).toHaveTextContent('hero.subtitle');
    expect(heroInfo.children[2]).toHaveTextContent('hero.textContent');

    expect(getByTestId(`hero-image`)).toBeInTheDocument();
  });
});
