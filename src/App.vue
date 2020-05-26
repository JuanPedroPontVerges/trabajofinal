<template>
  <v-app>
    <v-app-bar app v-if="this.$store.state.logged" bottom color="white">
      <v-btn icon class="mx-3">
        <v-icon large>mdi-home</v-icon>
      </v-btn>
      <v-btn icon  class="mx-3">
        <v-icon large>mdi-book-open-variant</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon fab class="mb-10">
        <v-icon x-large color="white" class="mb-2 boton px-7 py-7">mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="mx-3">
        <v-icon large>mdi-calendar</v-icon>
       </v-btn>
      <v-btn icon class="mx-3">
        <v-icon large>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    
  }),
};
</script>

<style scoped>
  .boton {
    background-color:#FF9191;
    border-radius: 100%;
  }
</style>