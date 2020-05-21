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
          <v-col @click="clickRecordType(RECORD_TYPE.HEADER.VALUE)" style="cursor: pointer;">
            {{ RECORD_TYPE.HEADER.LABEL }}
          </v-col>
          <v-col @click="clickRecordType(RECORD_TYPE.DATA.VALUE)" style="cursor: pointer;">
            {{ RECORD_TYPE.DATA.LABEL }}
          </v-col>
          <v-col @click="clickRecordType(RECORD_TYPE.TRAILER.VALUE)" style="cursor: pointer;">
            {{ RECORD_TYPE.TRAILER.LABEL }}
          </v-col>
          <v-col @click="clickRecordType(RECORD_TYPE.END.VALUE)" style="cursor: pointer;">
            {{ RECORD_TYPE.END.LABEL }}
          </v-col>
          <v-col @click="clickRecordType(RECORD_TYPE.UNKNOWN.VALUE)" style="cursor: pointer;">
            {{ RECORD_TYPE.UNKNOWN.LABEL }}
          </v-col>
        </v-row>
        <v-row/>
        <v-row justify="center">
          <app-header-record-data-table
            v-if="myRecordType===RECORD_TYPE.HEADER.VALUE"/>
          <app-header-record-data-table
            v-else-if="myRecordType===RECORD_TYPE.DATA.VALUE"
          />
          <app-header-record-data-table
           v-else-if="myRecordType===RECORD_TYPE.TRAILER.VALUE"
          />
          <app-header-record-data-table
            v-else-if="myRecordType===RECORD_TYPE.END.VALUE"/>
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
import { RECORD_TYPE_OBJ } from './util/code';

export default {
  name: 'App',

  components: {
    appHeaderRecordDataTable,
  },

  data: () => ({
    myRecordType: '',
  }),

  computed: {
    RECORD_TYPE() {
      return RECORD_TYPE_OBJ;
    },
  },

  methods: {
    clickRecordType(type) {
      this.myRecordType = type;
    },
  },
};
</script>
