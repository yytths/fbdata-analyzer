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
          <v-col>ヘッダ</v-col>
          <v-col>データ</v-col>
          <v-col>トレーラ</v-col>
          <v-col>エンド</v-col>
        </v-row>
        <v-row/>
        <v-row justify="center">
          <app-header-record-data-table/>
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
  }),
};
</script>
