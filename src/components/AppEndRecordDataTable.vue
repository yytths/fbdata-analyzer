<template>
  <v-data-table
    :headers="headers"
    :items="records"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
export default {
  name: 'AppTrailerRecordDataTable',

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
        dummy: record.substr(1, 119),
      }));
    },
  },

  data: () => ({
    headers: [
      { text: '行', value: 'row', sortable: false },
      { text: 'データ区分', value: 'dataPartition', sortable: false },
      { text: 'ダミー', value: 'dummy', sortable: false },
    ],
  }),
};
</script>
