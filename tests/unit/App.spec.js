import Vue from 'vue';
import Vuetify from 'vuetify';
import {
  mount,
  createLocalVue,
} from '@vue/test-utils';
import App from '@/App.vue';

Vue.use(Vuetify);
const localVue = createLocalVue(Vue);

describe('App.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('normal test. layout', () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
    });
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    const headerTitleElement = wrapper.find('header > div > div');
    expect(headerTitleElement.text()).toBe('FBデータ解析ツール');

    const textareaLabelElement = wrapper.find('#input-6')
    expect(textareaLabelElement.attributes().placeholder).toBe('FBデータを貼り付けてください');

    const tabsElements = wrapper.findAll('.v-slide-group__wrapper > div > div');
    expect(tabsElements.at(1).text()).toBe('ヘッダレコード');
    expect(tabsElements.at(1).classes()).toContain('v-tab--active');
    expect(tabsElements.at(2).text()).toBe('データレコード');
    expect(tabsElements.at(3).text()).toBe('トレーラレコード');
    expect(tabsElements.at(4).text()).toBe('エンドレコード');
    expect(tabsElements.at(5).text()).toBe('不明');
  });

  it('abnormal test. invalid input', async () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
    });

    // ヘッダレコード
    await _inputTextarea(wrapper, _createRandomInputTestData('1'.padEnd(9, '0')));
    _assertInputareaErrorMessage(wrapper, 'ヘッダレコードが120文字ではありません。');
    await _inputTextarea(wrapper, _createRandomInputTestData('1'.padEnd(11, '0')));
    _assertInputareaErrorMessage(wrapper, 'ヘッダレコードが120文字ではありません。');
    // データレコード
    await _inputTextarea(wrapper, _createRandomInputTestData('2'.padEnd(9, '0')));
    _assertInputareaErrorMessage(wrapper, 'データレコードが120文字ではありません。');
    await _inputTextarea(wrapper, _createRandomInputTestData('2'.padEnd(11, '0')));
    _assertInputareaErrorMessage(wrapper, 'データレコードが120文字ではありません。');
    // トレーラレコード
    await _inputTextarea(wrapper, _createRandomInputTestData('8'.padEnd(9, '0')));
    _assertInputareaErrorMessage(wrapper, 'トレーラレコードが120文字ではありません。');
    await _inputTextarea(wrapper, _createRandomInputTestData('8'.padEnd(11, '0')));
    _assertInputareaErrorMessage(wrapper, 'トレーラレコードが120文字ではありません。');
    // エンドレコード
    await _inputTextarea(wrapper, _createRandomInputTestData('9'.padEnd(9, '0')));
    _assertInputareaErrorMessage(wrapper, 'エンドレコードが120文字ではありません。');
    await _inputTextarea(wrapper, _createRandomInputTestData('9'.padEnd(11, '0')));
    _assertInputareaErrorMessage(wrapper, 'エンドレコードが120文字ではありません。');

    // レコードタイプが未知
    await _inputTextarea(wrapper, _createRandomInputTestData('unknown'.padEnd(10, '0')));
    _assertInputareaErrorMessage(wrapper, '不明なデータ区分のレコードがあります。');
  });

  const _inputTextarea = async (wrapper, inputText) => {
    // input
    const textareaElement = wrapper.find('.v-input__slot > div > textarea');
    textareaElement.setValue(inputText);
    await wrapper.vm.$nextTick();
  }

  const _assertInputareaErrorMessage = (wrapper, errMessage) => {
    const errMessageElement = wrapper.find('.v-messages__message');
    expect(errMessageElement.exists()).toBe(true);
    expect(errMessageElement.text()).toBe(errMessage);
  }

  const _createRandomInputTestData = (prefix = '0123456789') => {
    return [
      prefix,
      [...Array(11).keys()].map(() => [...Array(10).keys()]).flat().join(''),　// 110文字の文字列
    ].join('');
  }

});
