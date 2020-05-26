<template>
  <v-app>
    <v-app-bar bottom v-if="this.$store.state.logged"  color="black"></v-app-bar>
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
