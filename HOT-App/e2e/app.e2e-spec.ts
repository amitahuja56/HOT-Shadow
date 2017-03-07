import { HOTAppPage } from './app.po';

describe('hot-app App', () => {
  let page: HOTAppPage;

  beforeEach(() => {
    page = new HOTAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
