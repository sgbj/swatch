import { AppPage } from './app.po';

describe('swatch App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Swatch');
  });
});
