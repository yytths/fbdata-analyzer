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
          <v-textarea/>
        </v-row>
        <v-row/>
        <v-row>
          <v-col @click="clickRecordType('header')" style="cursor: pointer;">ヘッダ</v-col>
          <v-col @click="clickRecordType('data')" style="cursor: pointer;">データ</v-col>
          <v-col @click="clickRecordType('trailer')" style="cursor: pointer;">トレーラ</v-col>
          <v-col @click="clickRecordType('end')" style="cursor: pointer;">エンド</v-col>
          <v-col @click="clickRecordType('unknown')" style="cursor: pointer;">不明</v-col>
        </v-row>
        <v-row/>
        <v-row justify="center">
          <app-header-record-data-table
            v-if="recordType==='header'"/>
          <app-header-record-data-table
            v-else-if="recordType==='data'"
          />
          <app-header-record-data-table
           v-else-if="recordType==='trailer'"
          />
          <app-header-record-data-table
            v-else-if="recordType==='end'"/>
          <span
            v-else
          />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appHeaderRecordDataTable from './components/AppHeaderRecordDataTable.vue';

export default {
  name: 'App',

  components: {
    appHeaderRecordDataTable,
  },

  data: () => ({
    recordType: '',
  }),

  methods: {
    clickRecordType(type) {
      this.recordType = type;
    },
  },
};
</script>
