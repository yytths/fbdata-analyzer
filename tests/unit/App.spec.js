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

});
