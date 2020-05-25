import Vue from 'vue';
import Vuetify from 'vuetify';
import {
  mount,
  createLocalVue,
} from '@vue/test-utils';
import BaseRecordDataTable from '@/components/BaseRecordDataTable.vue';

Vue.use(Vuetify);
const localVue = createLocalVue(Vue);

describe('BaseRecordDataTable.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('normal test. 1 records.', () => {
    const headers = [
      {
        text: 'テキスト1',
        value: 'textOne',
      },
      {
        text: 'テキスト2',
        value: 'textTwo',
      },
    ];
    const items = [
      {
        textOne: 1,
        textTwo: 2,
      }
    ];
    const wrapper = mount(BaseRecordDataTable, {
      localVue,
      vuetify,
      propsData: {
        headers,
        items,
      }
    });
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    const headerElements = wrapper.findAll('.v-data-table-header > tr > th');
    const valueElements = wrapper.findAll('.v-data-table__wrapper > table > tbody > tr > td');

    expect(headerElements.at(0).find('span').text()).toBe('テキスト1');
    expect(valueElements.at(0).text()).toBe('1');
    expect(headerElements.at(1).find('span').text()).toBe('テキスト2');
    expect(valueElements.at(1).text()).toBe('2');
  });

  it('normal test. no record message.', () => {    
    const wrapper = mount(BaseRecordDataTable, {
      localVue,
      vuetify,
    });
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();
    
    const noDataText = wrapper.find('.v-data-table__empty-wrapper > td');
    const noDataMessage = 'レコードがありません';
    expect(noDataText.text()).toBe(noDataMessage);
  });

  it('normal test. no search message.', async () => {
    const headers = [
      {
        text: 'テキスト1',
        value: 'textOne',
      },
      {
        text: 'テキスト2',
        value: 'textTwo',
      },
    ];
    const items = [
      {
        textOne: 1,
        textTwo: 2,
      }
    ];
    const wrapper = mount(BaseRecordDataTable, {
      localVue,
      vuetify,
      propsData: {
        headers,
        items,
      }
    });

    // input
    const ele = wrapper.find('#input-42');
    ele.setValue('no-search');
    await wrapper.vm.$nextTick();

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    const headerElements = wrapper.findAll('.v-data-table-header > tr > th');
    expect(headerElements.at(0).find('span').text()).toBe('テキスト1');
    expect(headerElements.at(1).find('span').text()).toBe('テキスト2');

    const noSearchMessage = 'レコードがみつかりません';
    const noDataText = wrapper.find('.v-data-table__empty-wrapper > td');
    expect(noDataText.text()).toBe(noSearchMessage);
  });
});
