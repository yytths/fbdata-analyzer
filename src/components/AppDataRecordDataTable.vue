<template>
  <base-record-data-table :headers="headers" :items="records">
    <template
      v-for="slot of slots"
      #[slot]="{ header: { text, appCharCode, appCharLen, appHint, appRequired } }"
    >
      <app-tooltip-column-hint
        :key="slot"
        :name='text'
        :charCode="appCharCode"
        :charLength="appCharLen"
        :hint="appHint"
        :isRequired="appRequired"
      />
    </template>
  </base-record-data-table>
</template>

<script>
import baseRecordDataTable from './BaseRecordDataTable.vue';
import appTooltipColumnHint from './AppTooltipColumnHint.vue';

export default {
  name: 'AppDataRecordDataTable',

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
        destinationBankNumber: record.substr(1, 4),
        destinationBankName: record.substr(5, 15),
        destinationBranchNumber: record.substr(20, 3),
        destinationBranchName: record.substr(23, 15),
        clearingHouseNumber: record.substr(38, 4),
        depositItem: record.substr(42, 1),
        accountNumber: record.substr(43, 7),
        beneficiaryName: record.substr(50, 30),
        transferAmountOfMoney: record.substr(80, 10),
        newCode: record.substr(90, 1),
        EDIInformation: record.substr(91, 20),
        transferDesignationCategory: record.substr(111, 1),
        identificationdisplay: record.substr(112, 1),
        dummy: record.substr(113, 7),
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
          '「2」（データレコード）固定値',
          '「8」（トレーラレコード）',
          '「9」（エンドレコード）',
        ].join('\n'),
      },
      {
        text: '被仕向銀行番号',
        value: 'destinationBankNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 4,
        appHint: '統一金融機関番号',
      },
      {
        text: '被仕向銀行名',
        value: 'destinationBankName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 15,
        appHint: '',
        appRequired: false,
      },
      {
        text: '被仕向支店番号',
        value: 'destinationBranchNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 3,
        appHint: '統一店番号',
      },
      {
        text: '被仕向支店名',
        value: 'destinationBranchName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 15,
        appHint: '',
        appRequired: false,
      },
      {
        text: '手形交換所番号 ',
        value: 'clearingHouseNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 4,
        appHint: '',
        appRequired: false,
      },
      {
        text: '預金種目',
        value: 'depositItem',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「1」(普通預金)',
          '「2」(当座預金) ',
          '「4」(貯蓄預金)',
          '「9」(その他)',
        ].join('\n'),
      },
      {
        text: '口座番号',
        value: 'accountNumber',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 7,
        appHint: '',

      },
      {
        text: '受取人名',
        value: 'beneficiaryName',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 30,
        appHint: '',
      },
      {
        text: '振込金額',
        value: 'transferAmountOfMoney',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 10,
        appHint: '',
      },
      {
        text: '新規コード',
        value: 'newCode',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「0」(その他) ',
          '「1」(第1回振込分)',
          '「2」(変更分（被仕向銀行・支店、預金種目・口座番号))',
        ].join('\n'),
      },
      {
        text: 'EDI情報',
        value: 'EDIInformation',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 20,
        appHint: 'マッチングキーを設定',
        appRequired: false,
      },
      {
        text: '振込指定区分',
        value: 'transferDesignationCategory',
        sortable: false,
        appCharCode: 'N',
        appCharLen: 1,
        appHint: [
          '「7」(テレ振込)',
          '「8」(文書振込) ',
        ].join('\n'),
        appRequired: false,
      },
      {
        text: '識別表示',
        value: 'identificationdisplay',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 1,
        appHint: [
          '「Y」またはスペース',
          '「Y」の場合、「EDI 情報」列は「EDI情報」をあらわす',
        ].join('\n'),
        appRequired: false,
      },
      {
        text: 'ダミー',
        value: 'dummy',
        sortable: false,
        appCharCode: 'C',
        appCharLen: 7,
        appHint: 'スペースを設定',
      },
    ],
  }),
};
</script>
