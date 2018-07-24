import { setupDomTests, flush } from '../util';

describe('esm-import', () => {
  const { setupDom, tearDownDom } = setupDomTests(document);
  let app: HTMLElement;

  beforeEach(async () => {
    app = await setupDom('/esm-import/index.html');
  });
  afterEach(tearDownDom);

  it('import', async () => {
    await testEsmImport(app);
  });

});


export async function testEsmImport(app: HTMLElement) {
  const host = app.querySelector('esm-import');

  const hostStyles = window.getComputedStyle(host);
  expect(hostStyles.borderBottomColor).toBe('rgb(0, 0, 255)');

  const h1 = host.shadowRoot.querySelector('h1');
  const h1Styles = window.getComputedStyle(h1);
  expect(h1Styles.color).toBe('rgb(128, 0, 128)');

  const button = host.shadowRoot.querySelector('button');

  const propVal = host.shadowRoot.querySelector('#propVal');
  expect(propVal.textContent.trim()).toBe('propVal: 88');

  const stateVal = host.shadowRoot.querySelector('#stateVal');
  expect(stateVal.textContent.trim()).toBe('stateVal: mph');

  const listenVal = host.shadowRoot.querySelector('#listenVal');
  expect(listenVal.textContent.trim()).toBe('listenVal: 0');

  button.click();
  await flush(app);

  expect(propVal.textContent.trim()).toBe('propVal: 89');
  expect(listenVal.textContent.trim()).toBe('listenVal: 1');

  button.click();
  await flush(app);

  expect(propVal.textContent.trim()).toBe('propVal: 90');
  expect(listenVal.textContent.trim()).toBe('listenVal: 2');

  const isReady = host.shadowRoot.querySelector('#isReady');
  expect(isReady.textContent.trim()).toBe('componentOnReady: true');
}
