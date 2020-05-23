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
  name: 'AppHeaderRecordDataTable',

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
        typeCode: record.substr(1, 2),
        codePartition: record.substr(3, 1),
        transferRequesterCode: record.substr(4, 10),
        transferRequesterName: record.substr(14, 40),
        tradingDay: record.substr(54, 4),
        destinationBankNumber: record.substr(58, 4),
        destinationBankName: record.substr(62, 15),
        destinationBranchNumber: record.substr(77, 3),
        destinationBranchName: record.substr(80, 15),
        depositItemClient: record.substr(95, 1),
        accountNumberClient: record.substr(96, 7),
        dummy: record.substr(103, 17),
      }));
    },
  },

  data: () => ({
    // prefixにappがついているものは本アプリ特有のプロパティ
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
          '「1」（ヘッダレコード）固定値',
          '「2」（データレコード）',
          '「8」（トレーラレコード）',
          '「9」（エンドレコード）',
        ].join('\n'),
      },
      {
        text: '種別コード',
        value: 'typeCode',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 2,
        appHint: '「21」(総合振込) 固定値',
      },
      {
        text: 'コード区分',
        value: 'codePartition',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「0」（JIS）',
          '「1」（EBCDIC）',
        ].join('\n'),
      },
      {
        text: '振込依頼人コード',
        value: 'transferRequesterCode',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 10,
        appHint: '取引企業コード',
      },
      {
        text: '振込依頼人名 ',
        value: 'transferRequesterName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 40,
        appHint: '',
      },
      {
        text: '取組日 ',
        value: 'tradingDay',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 4,
        appHint: [
          '振込日を表す',
          'MMDD（月-日）',
        ].join('\n'),
      },
      {
        text: '仕向銀行番号',
        value: 'destinationBankNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 4,
        appHint: '統一金融機関番号',
      },
      {
        text: '仕向銀行名',
        value: 'destinationBankName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 15,
        appHint: '',
      },
      {
        text: '仕向支店番号',
        value: 'destinationBranchNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 3,
        appHint: '統一店番号',
      },
      {
        text: '仕向支店名  ',
        value: 'destinationBranchName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 15,
        appHint: '',

      },
      {
        text: '預金種目（依頼人）',
        value: 'depositItemClient',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「1」(普通預金)',
          '「2」(当座預金) ',
          '「9」(その他)',
        ].join('\n'),
      },
      {
        text: '口座番号（依頼人）',
        value: 'accountNumberClient',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 7,
        appHint: '',
      },
      {
        text: 'ダミー',
        value: 'dummy',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 17,
        appHint: 'スペースを設定',
      }],
  }),
};
</script>
