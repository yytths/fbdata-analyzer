<template>
  <base-record-data-table :headers="headers" :items="records"/>
</template>

<script>
import baseRecordDataTable from './BaseRecordDataTable.vue';

export default {
  name: 'AppUnknownRecordDataTable',

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
        unknown: record,
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
      { text: '不明', value: 'unknown', sortable: false },
    ],
  }),
};
</script>
