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
          <v-textarea :rules="checkCounterPerRow()" v-model="inputFbData"/>
        </v-row>
        <v-row/>
        <v-row>
          <v-tabs grow center-active>
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
import appHeaderRecordDataTable from './components/AppHeaderRecordDataTable.vue';
import appDataRecordDataTable from './components/AppDataRecordDataTable.vue';
import appTrailerRecordDataTable from './components/AppTrailerRecordDataTable.vue';
import appEndRecordDataTable from './components/AppEndRecordDataTable.vue';
import appUnknownRecordDataTable from './components/AppUnknownRecordDataTable.vue';
import { RECORD_TYPE_OBJ } from './util/code';

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

    headerRecords() {
      return this.inputFbData.split('\n').filter(((record) => record.startsWith('1')));
    },
    dataRecords() {
      return this.inputFbData.split('\n').filter(((record) => record.startsWith('2')));
    },
    trailerRecords() {
      return this.inputFbData.split('\n').filter(((record) => record.startsWith('8')));
    },
    endRecords() {
      return this.inputFbData.split('\n').filter(((record) => record.startsWith('9')));
    },
    unknownRecords() {
      return this.inputFbData.split('\n').filter(((record) => !(record.startsWith('1')
        || record.startsWith('2')
        || record.startsWith('8')
        || record.startsWith('9')
        || record.length === 0
      )));
    },
  },

  methods: {
    checkCounterPerRow() {
      return [
        this.headerRecords.every((record) => record.length === 0 || record.length === 120)
          || 'ヘッダレコードが120文字ではありません。',
        this.dataRecords.every((record) => record.length === 0 || record.length === 120)
          || 'データレコードが120文字ではありません。',
        this.trailerRecords.every((record) => record.length === 0 || record.length === 120)
          || 'トレーラレコードが120文字ではありません。',
        this.endRecords.every((record) => record.length === 0 || record.length === 120)
          || 'エンドレコードが120文字ではありません。',
        this.unknownRecords.length === 0
          || '不明なデータ区分のレコードがあります。',
      ];
    },
  },
};
</script>
