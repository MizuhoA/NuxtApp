<template>
  <v-row class="text-center">
    <v-col cols="12" class="mb-4 border">
      <h1 class="display-2 font-weight-bold mb-3">
        No Settings!
      </h1>
      <em>
        You can set a new one at <nuxt-link to="/setting">Setting</nuxt-link>.
      </em>
    </v-col>
    <v-col cols="12">
      <v-expansion-panels accordion light>
        <v-expansion-panel
          v-for="(item,i) in 2"
          :key="i"
        >
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            hoge
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SwitchPage'
}
</script>
