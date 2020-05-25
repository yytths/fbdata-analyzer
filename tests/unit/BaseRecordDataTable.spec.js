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
  it('normal test. no record message.', () => {
    const expected = 'レコードがありません';

    const wrapper = mount(BaseRecordDataTable, {
      localVue,
      vuetify,
    });
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();

    const noDataText = wrapper.find('.v-data-table__empty-wrapper > td');
    expect(noDataText.text()).toBe(expected);

    // TODO: WARNをなくすために、@vue/test-utils@1.0.0に更新する。
    // https://github.com/vuejs/vue-test-utils/issues/1407
  });
});
