import { AppSncfPage } from './app.po';

describe('app-sncf App', function() {
  let page: AppSncfPage;

  beforeEach(() => {
    page = new AppSncfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
