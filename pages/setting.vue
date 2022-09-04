<template>
  <v-row align="center">
    <v-col cols="12">
      <v-card light>
        <v-card-title class="text-h5 font-weight-regular teal lighten-3 white--text">
          Exchange
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row align="center">
              <v-col cols="6">
                <v-select
                  v-model="exchange"
                  :items="exchanges"
                  item-text="name"
                  label="Select Exchange"
                  persistent-hint
                  return-object
                  single-line
                  dense
                ></v-select>
              </v-col>
              <v-col cols="6">
                <span>
                  Make sure that your API key is active.
                  This link is
                  <a target="_blank">HERE</a>
                  .
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="exchange != ''">
      <v-card light>
        <v-card-title class="text-h5 font-weight-regular teal lighten-1 white--text">
          Cryptocurrency
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row align="center">
              <v-col cols="6">
                <v-select
                  v-model="currency"
                  :items="exchange.currencies"
                  item-text="name"
                  label="Select Cryptocurrency"
                  persistent-hint
                  return-object
                  single-line
                  dense
                ></v-select>
              </v-col>
              <v-col cols="6">
                <span>
                  Look at the information.
                  Sample
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="currency != ''">
      <v-card light>
        <v-card-title class="text-h5 font-weight-regular teal darken-2 white--text">
          Initial Condition
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row align="center">
              <v-col cols="3">
                <v-text-field
                  v-model.number="startingPrice"
                  :rules="[rules.compare(startingPrice, targetingPrice), rules.min(startingPrice)]"
                  label="Set Starting Price"
                  type="number"
                />
              </v-col>
              <v-col cols="3">
                <span>
                  1000yen/{{currency.name}}
                </span>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.number="targetingPrice"
                  :rules="[rules.compare(startingPrice, targetingPrice), rules.min(targetingPrice)]"
                  label="Set Targeting Price"
                  type="number"
                />
              </v-col>
              <v-col cols="3">
                <span>
                  Make sure that your API key is active.
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="rules.compare(startingPrice, targetingPrice) === true && rules.min(startingPrice) === true && rules.min(targetingPrice) === true">
      <v-row>
        <v-btn absolute right color="teal" height="50" width="150" :loading="isLoading" :disabled="isLoading" @click="loading()">Start</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SwitchPage', 
  data() {
    return {
      exchange:'',
      currency:'',
      exchanges:[
        {
          name: 'bitFlyer', link:'https://lightning.bitflyer.com/Developer', 
          currencies:[
              {name:'Bitcoin'},
              {name:'Ethereum'},
              {name:'XRP'}, 
              {name:'Stellar'}, 
              {name:'MONA'}
          ]
        }, 
        {
          name: 'GMO Coin', link:'https://coin.z.com/jp/member/api', 
          currencies:[
              {name:'Bitcoin'},
              {name:'Ethereum'},
              {name:'NEM'},
              {name:'XRP'},
              {name:'Stellar'},
              {name:'BitcoinCash'}, 
              {name:'Litecoin'}, 
              {name:'MONA'}
          ]
        }
      ], 
      startingPrice:null, 
      targetingPrice:null,  
      rules: {
          compare: (startingPrice, targetingPrice) => {
            return startingPrice < targetingPrice || `Targeting Price must be larger than Starting Price!`;
          }, 
          min: (price) => {
            const minprice = 1000; // 動的に変更
            return price >= minprice || `Price must be larger than 0.1 currency.name`;
          }, 
      },  
      isLoading: false
    }
  }, 
  methods: {
    loading() {
      this.isLoading = true;
      this.$store.commit("addSetting", [this.exchange.name, this.currency.name, this.startingPrice, this.targetingPrice]);
      this.isLoading = false;
    }
  }
}
</script>