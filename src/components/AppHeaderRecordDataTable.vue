<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
export default {
  name: 'AppHeaderRecordDataTable',

  data: () => ({
    headers: [
      { text: 'データ区分', value: 'name', sortable: false },
      { text: '種別コード', value: 'calories', sortable: false },
      { text: 'コード区分', value: 'fat', sortable: false },
      { text: '委託者コード', value: 'carbs', sortable: false },
      { text: '委託者名', value: 'protein', sortable: false },
      { text: '取組日 ', value: 'iron', sortable: false },
      { text: '仕向金融機関番号', value: 'fat', sortable: false },
      { text: '仕向金融機関名', value: 'carbs', sortable: false },
      { text: '仕向支店番号', value: 'protein', sortable: false },
      { text: '仕向支店名  ', value: 'iron', sortable: false },
      { text: '預金種目(依頼人) ', value: 'fat', sortable: false },
      { text: '口座番号(依頼人)', value: 'carbs', sortable: false },
      { text: 'ダミー', value: 'protein', sortable: false },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
  }),
};
</script>
