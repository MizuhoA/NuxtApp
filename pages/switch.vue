<template>
  <v-row class="text-center">
    <v-col cols="12" class="mb-4 border" v-if="getSettings[0].id == 'Dummy'">
      <h1 class="display-2 font-weight-bold mb-3">
        No Settings!
      </h1>
      <em>
        You can set a new one at <nuxt-link to="/setting">Setting</nuxt-link>.
      </em>
    </v-col>
    <v-col cols="12" v-if="getSettings[0].id != 'Dummy'">
      <v-data-table light
          :headers="headers"
          :items="getSettings"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SwitchPage', 
  data() {
    return {
      setting:null, 
      headers: [
          { 
            text: 'ID', 
            value: 'id' 
          },
          { 
            text: 'Start Date', 
            value: 'startDate' 
          },
          {
            text: 'Exchange',
            value: 'exchangeName',
          },
          { 
            text: 'Currency', 
            value: 'currencyName' 
          },
          { 
            text: 'Starting Price', 
            value: 'startingPrice' 
          },
          { 
            text: 'Targeting Price', 
            value: 'targetingPrice' 
          }
      ]
    }
  },
  computed: {
    getSettings() {
      return this.$store.getters.getSettingList;
    }
  }
}
</script>
