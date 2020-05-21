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
          <v-tabs grow>
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="rt in Object.values(RECORD_TYPE)" :key="rt.label">
              {{ rt.label }}
            </v-tab>
            <v-tab-item v-for="rt in Object.values(RECORD_TYPE)" :key="rt.label">
              <app-header-record-data-table
                v-if="rt.value===RECORD_TYPE.HEADER.value" :items="headerRecords"
              />
              <app-header-record-data-table v-if="rt.value===RECORD_TYPE.DATA.value"/>
              <app-header-record-data-table v-if="rt.value===RECORD_TYPE.TRAILER.value"/>
              <app-header-record-data-table v-if="rt.value===RECORD_TYPE.END.value"/>
              <app-header-record-data-table v-if="rt.value===RECORD_TYPE.UNKNOWN.value"/>
            </v-tab-item>
          </v-tabs>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appHeaderRecordDataTable from './components/AppHeaderRecordDataTable.vue';
import { RECORD_TYPE_OBJ } from './util/code';

export default {
  name: 'App',

  components: {
    appHeaderRecordDataTable,
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
  },

  methods: {
    checkCounterPerRow() {
      return [
        this.headerRecords.every((record) => record.length === 0 || record.length === 120)
          || 'ヘッダレコードが120文字ではありません。',
      ];
    },
  },
};
</script>
