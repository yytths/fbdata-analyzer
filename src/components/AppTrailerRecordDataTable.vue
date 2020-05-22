<template>
  <base-record-data-table :headers="headers" :items="records"/>
</template>

<script>
import baseRecordDataTable from './BaseRecordDataTable.vue';

export default {
  name: 'AppTrailerRecordDataTable',

  components: {
    baseRecordDataTable,
  },

  props: {
    items: {
      default() { return []; },
      type: Array,
    },
  },

  computed: {
    records() {
      return this.items.map(({ record, row }) => ({
        row,
        dataPartition: record.substr(0, 1),
        totalNumber: record.substr(1, 6),
        totalFee: record.substr(7, 12),
        dummy: record.substr(19, 101),
      }));
    },
  },

  data: () => ({
    headers: [
      {
        text: '行',
        value: 'row',
        sortable: false,
        width: '2rem',
      },
      {
        text: 'データ区分',
        value: 'dataPartition',
        sortable: false,
        width: '4.5rem',
      },
      { text: '合計件数', value: 'totalNumber', sortable: false },
      { text: '合計金額', value: 'totalFee', sortable: false },
      { text: 'ダミー', value: 'dummy', sortable: false },
    ],
  }),
};
</script>
