import { LoaderappPage } from './app.po';

describe('loaderapp App', () => {
  let page: LoaderappPage;

  beforeEach(() => {
    page = new LoaderappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
