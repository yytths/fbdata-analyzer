<template>
  <v-data-table
    :headers="headers"
    :items="records"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
export default {
  name: 'AppDataRecordDataTable',

  props: {
    items: {
      default() { return []; },
      type: Array,
    },
  },

  computed: {
    records() {
      return this.items.map((record) => {
        const obj = {
          dataPartition: record.substr(0, 1),
          destinationFinancialInstitutionNumber: record.substr(1, 4),
          destinationFinancialInstitutionName: record.substr(5, 15),
          destinationBranchNumber: record.substr(20, 3),
          destinationBranchName: record.substr(23, 15),
          clearingHouseNumber: record.substr(38, 4),
          depositItem: record.substr(42, 1),
          accountNumber: record.substr(43, 7),
          beneficiaryName: record.substr(50, 30),
          transferAmountOfMoney: record.substr(80, 10),
          newCode: record.substr(90, 1),
          customerCodeOne: record.substr(91, 10),
          customerCodeTwo: record.substr(101, 10),
          EDIInformation: record.substr(91, 20),
          transferClassification: record.substr(111, 1),
          identificationdisplay: record.substr(112, 1),
          dummy: record.substr(113, 7),
        };

        // 識別表示欄にYを付与した場合はEDI情報を採用する。
        if (obj.identificationdisplay === 'Y') {
          obj.customerCodeOne = '';
          obj.customerCodeTwo = '';
        } else {
          obj.EDIInformation = '';
        }
        return obj;
      });
    },
  },

  data: () => ({
    headers: [
      { text: 'データ区分', value: 'dataPartition', sortable: false },
      { text: '被仕向金融機関番号', value: 'destinationFinancialInstitutionNumber', sortable: false },
      { text: '被仕向金融機関名', value: 'destinationFinancialInstitutionName', sortable: false },
      { text: '被仕向支店番号', value: 'destinationBranchNumber', sortable: false },
      { text: '被仕向支店名', value: 'destinationBranchName', sortable: false },
      { text: '手形交換所番号 ', value: 'clearingHouseNumber', sortable: false },
      { text: '預金種目', value: 'depositItem', sortable: false },
      { text: '口座番号', value: 'accountNumber', sortable: false },
      { text: '受取人名', value: 'beneficiaryName', sortable: false },
      { text: '振込金額', value: 'transferAmountOfMoney', sortable: false },
      { text: '新規コード', value: 'newCode', sortable: false },
      { text: '顧客コード1', value: 'customerCodeOne', sortable: false },
      { text: '顧客コード2', value: 'customerCodeTwo', sortable: false },
      { text: 'EDI情報', value: 'EDIInformation', sortable: false },
      { text: '振込区分', value: 'transferClassification', sortable: false },
      { text: '識別表示', value: 'identificationdisplay', sortable: false },
      { text: 'ダミー', value: 'dummy', sortable: false },
    ],
  }),
};
</script>
