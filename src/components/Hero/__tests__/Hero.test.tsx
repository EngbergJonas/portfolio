import { render } from '@testing-library/react';
import Hero from '../Hero';
import { someLinks } from '../../../utils/common';

describe('Hero', () => {
  it('renders the info section', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('hero')).toBeInTheDocument();

    const heroInfo = getByTestId(`hero-info-section`);

    expect(heroInfo).toBeInTheDocument();
    expect(heroInfo.children[0].children[0]).toHaveTextContent('hero.title');
    expect(heroInfo.children[0].children[1]).toHaveTextContent('hero.subtitle');
    expect(heroInfo.children[0].children[2]).toHaveTextContent('hero.textContent');
  });

  it('renders the about me button', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('about-me-button')).toBeInTheDocument();
  });

  it('renders all the some links', async () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('some-links-desktop-container')).toBeInTheDocument();
    someLinks.forEach((sl) => {
      const someLink = getByTestId(sl.label);
      expect(someLink).toBeInTheDocument();
      expect(someLink.classList.contains('hover:text-green')).toBeTruthy();
    });
  });

  it('renders the hero image', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId(`hero-image`)).toBeInTheDocument();
  });
});
