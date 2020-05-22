<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
  >
    <template v-slot:no-data>
      レコードがありません
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'BaseRecordDataTable',

  props: {
    items: {
      default() { return []; },
      type: Array,
    },
    headers: {
      default() { return []; },
      type: Array,
    },
  },
};
</script>
