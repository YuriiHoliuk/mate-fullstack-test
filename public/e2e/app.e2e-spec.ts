import { StarWarsHeroesPage } from './app.po';

describe('star-wars-heroes App', () => {
  let page: StarWarsHeroesPage;

  beforeEach(() => {
    page = new StarWarsHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
