<template>
  <v-data-table
    :headers="headers"
    :items="records"
    :items-per-page="5"
    :hide-default-header="true"
  ></v-data-table>
</template>

<script>
export default {
  name: 'AppUnknownRecordDataTable',

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
      { text: '行', value: 'row', sortable: false },
      { text: '不明', value: 'unknown', sortable: false },
    ],
  }),
};
</script>
