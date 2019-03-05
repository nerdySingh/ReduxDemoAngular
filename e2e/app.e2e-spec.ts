import { ReduxDemoTodosPage } from './app.po';

describe('redux-demo-todos App', () => {
  let page: ReduxDemoTodosPage;

  beforeEach(() => {
    page = new ReduxDemoTodosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
