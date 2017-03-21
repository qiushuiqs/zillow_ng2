import { ZillowPage } from './app.po';

describe('zillow App', () => {
  let page: ZillowPage;

  beforeEach(() => {
    page = new ZillowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
