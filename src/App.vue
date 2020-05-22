<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <div class="d-flex align-center">
        FBデータ解析ツール
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-textarea
            placeholder="FBデータを貼り付けてください"
            rows="5"
            :outlined="true"
            :filled="true"
            :rules="validates()"
            v-model="inputFbData"
          />
        </v-row>
        <v-row/>
        <v-row>
          <v-tabs grow center-active background-color="primary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="rt in Object.values(RECORD_TYPE)" :key="rt.label">
              {{ rt.label }}
            </v-tab>
            <v-tab-item v-for="rt in Object.values(RECORD_TYPE)" :key="rt.label">
              <app-header-record-data-table
                v-if="rt.value===RECORD_TYPE.HEADER.value" :items="headerRecords"/>
              <app-data-record-data-table
                v-if="rt.value===RECORD_TYPE.DATA.value" :items="dataRecords"/>
              <app-trailer-record-data-table
                v-if="rt.value===RECORD_TYPE.TRAILER.value" :items="trailerRecords"/>
              <app-end-record-data-table
                v-if="rt.value===RECORD_TYPE.END.value" :items="endRecords"/>
              <app-unknown-record-data-table
                v-if="rt.value===RECORD_TYPE.UNKNOWN.value" :items="unknownRecords"/>
            </v-tab-item>
          </v-tabs>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {
  RECORD_TYPE_OBJ,
  MAX_LENGTH_PER_ROW,
} from './util/code';

const appHeaderRecordDataTable = () => import('./components/AppHeaderRecordDataTable.vue');
const appDataRecordDataTable = () => import('./components/AppDataRecordDataTable.vue');
const appTrailerRecordDataTable = () => import('./components/AppTrailerRecordDataTable.vue');
const appEndRecordDataTable = () => import('./components/AppEndRecordDataTable.vue');
const appUnknownRecordDataTable = () => import('./components/AppUnknownRecordDataTable.vue');

export default {
  name: 'App',

  components: {
    appHeaderRecordDataTable,
    appDataRecordDataTable,
    appTrailerRecordDataTable,
    appEndRecordDataTable,
    appUnknownRecordDataTable,
  },

  data: () => ({
    myRecordType: '',
    inputFbData: '',
  }),

  computed: {
    RECORD_TYPE() {
      return RECORD_TYPE_OBJ;
    },

    records() {
      return this.inputFbData.split('\n').map((record, index) => ({ record, row: index + 1 }));
    },

    headerRecords() {
      return this.records
        .filter((({ record }) => record.startsWith(this.RECORD_TYPE.HEADER.code)));
    },
    dataRecords() {
      return this.records
        .filter((({ record }) => record.startsWith(this.RECORD_TYPE.DATA.code)));
    },
    trailerRecords() {
      return this.records
        .filter((({ record }) => record.startsWith(this.RECORD_TYPE.TRAILER.code)));
    },
    endRecords() {
      return this.records
        .filter((({ record }) => record.startsWith(this.RECORD_TYPE.END.code)));
    },
    unknownRecords() {
      return this.records.filter((({ record }) => !(record.startsWith(this.RECORD_TYPE.HEADER.code)
        || record.startsWith(this.RECORD_TYPE.DATA.code)
        || record.startsWith(this.RECORD_TYPE.TRAILER.code)
        || record.startsWith(this.RECORD_TYPE.END.code)
        || record.length === 0
      )));
    },
  },

  methods: {
    validates() {
      return [
        ...this.validateCounterPerRow(),
        ...this.validateDataPartition(),
      ];
    },

    validateDataPartition() {
      return [
        this.unknownRecords.length === 0
          || '不明なデータ区分のレコードがあります。',
      ];
    },

    validateCounterPerRow() {
      return [
        this.headerRecords.every(({ record }) => this.validateMaxLengthPerRow(record.length))
          || `${this.RECORD_TYPE.HEADER.label}が${MAX_LENGTH_PER_ROW}文字ではありません。`,
        this.dataRecords.every(({ record }) => this.validateMaxLengthPerRow(record.length))
          || `${this.RECORD_TYPE.DATA.label}が${MAX_LENGTH_PER_ROW}文字ではありません。`,
        this.trailerRecords.every(({ record }) => this.validateMaxLengthPerRow(record.length))
          || `${this.RECORD_TYPE.TRAILER.label}が${MAX_LENGTH_PER_ROW}文字ではありません。`,
        this.endRecords.every(({ record }) => this.validateMaxLengthPerRow(record.length))
          || `${this.RECORD_TYPE.END.label}が${MAX_LENGTH_PER_ROW}文字ではありません。`,
      ];
    },
    validateMaxLengthPerRow(length) {
      return length === 0 || length === MAX_LENGTH_PER_ROW;
    },
  },
};
</script>
