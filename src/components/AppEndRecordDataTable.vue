<template>
  <base-record-data-table :headers="headers" :items="records">
    <template
      v-for="slot of slots"
      #[slot]="{ header: { text, appCharCode, appCharLen, appHint } }"
    >
      <app-tooltip-column-hint
        :key="slot"
        :name='text'
        :charCode="appCharCode"
        :charLength="appCharLen"
        :hint="appHint"
      />
    </template>
  </base-record-data-table>
</template>

<script>
import baseRecordDataTable from './BaseRecordDataTable.vue';
import appTooltipColumnHint from './AppTooltipColumnHint.vue';

export default {
  name: 'AppEndRecordDataTable',

  components: {
    baseRecordDataTable,
    appTooltipColumnHint,
  },

  props: {
    items: {
      default() { return []; },
      type: Array,
    },
  },

  computed: {
    slots() {
      return this.headers.map(({ value }) => `header.${value}`);
    },
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
      {
        text: '行',
        value: 'row',
        sortable: false,
        width: '2rem',
        appHint: 'FBデータには登場しない',
      },
      {
        text: 'データ区分',
        value: 'dataPartition',
        sortable: false,
        width: '4.5rem',
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「1」（ヘッダレコード）',
          '「2」（データレコード）',
          '「8」（トレーラレコード）',
          '「9」（エンドレコード）固定値',
        ].join('\n'),
      },
      {
        text: 'ダミー',
        value: 'dummy',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 119,
        appHint: 'スペースを設定',
      },
    ],
  }),
};
</script>
