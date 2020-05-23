<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <span v-on="on">{{ name }}</span>
    </template>
    <template>
      <span style="margin-right: 0.5rem">文字種：{{ charCode }}</span>
      <span>文字長：{{ charLength }}</span>
      <br>
      <span style="white-space:pre-wrap; word-wrap:break-word;">{{ hint }}</span>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: 'AppTooltipColumnHint',

  props: {
    name: {
      default() { return ''; },
      type: String,
    },
    charCode: {
      default() { return '-'; },
      type: String,
    },
    charLength: {
      default() { return '-'; },
      type: String,
    },
    hint: {
      default() { return ''; },
      type: String,
    },
  },
};
</script>
