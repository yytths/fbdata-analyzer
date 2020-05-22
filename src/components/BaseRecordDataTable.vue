<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :search="search"
      :headers="headers"
      :items="items"
      :items-per-page="5"
    >
      <template v-slot:no-data>
        レコードがありません
      </template>
      <template v-slot:no-results>
        レコードがみつかりません
      </template>

      <!-- 親コンポーネントからVuetifyのdatatableのslotを操作する -->
      <template v-for="(slotContent, slotName) of $scopedSlots" #[slotName]="data">
        <slot :name="slotName" v-bind="data"/>
      </template>
    </v-data-table>
  </v-card>
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

  data: () => ({
    search: '',
  }),
};
</script>
