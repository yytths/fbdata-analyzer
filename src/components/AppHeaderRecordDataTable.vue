<template>
  <v-data-table
    :headers="headers"
    :items="records"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
export default {
  name: 'AppHeaderRecordDataTable',

  props: {
    items: {
      default() { return []; },
      type: Array,
    },
  },

  computed: {
    records() {
      return this.items.map((record) => ({
        dataPartition: record.substr(0, 1),
        typeCode: record.substr(1, 2),
        codePartition: record.substr(3, 1),
        entrustorCode: record.substr(4, 10),
        entrustorName: record.substr(14, 40),
        tradingDay: record.substr(54, 4),
        destinationFinancialInstitutionNumber: record.substr(58, 4),
        destinationFinancialInstitutionName: record.substr(62, 15),
        destinationBranchNumber: record.substr(77, 3),
        destinationBranchName: record.substr(80, 15),
        depositItemClient: record.substr(95, 1),
        aoountNumberClient: record.substr(96, 7),
        dummy: record.substr(103, 17),
      }));
    },
  },

  data: () => ({
    headers: [
      { text: 'データ区分', value: 'dataPartition', sortable: false },
      { text: '種別コード', value: 'typeCode', sortable: false },
      { text: 'コード区分', value: 'codePartition', sortable: false },
      { text: '委託者コード', value: 'entrustorCode', sortable: false },
      { text: '委託者名', value: 'entrustorName', sortable: false },
      { text: '取組日 ', value: 'tradingDay', sortable: false },
      { text: '仕向金融機関番号', value: 'destinationFinancialInstitutionNumber', sortable: false },
      { text: '仕向金融機関名', value: 'destinationFinancialInstitutionName', sortable: false },
      { text: '仕向支店番号', value: 'destinationBranchNumber', sortable: false },
      { text: '仕向支店名  ', value: 'destinationBranchName', sortable: false },
      { text: '預金種目(依頼人)', value: 'depositItemClient', sortable: false },
      { text: '口座番号(依頼人)', value: 'aoountNumberClient', sortable: false },
      { text: 'ダミー', value: 'dummy', sortable: false },
    ],
  }),
};
</script>
