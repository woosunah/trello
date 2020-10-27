<template>
  <v-app-bar color="#0064a5" flat height="60">
    <v-btn icon><v-icon>mdi-apps-box</v-icon></v-btn>
    <v-btn icon><v-icon>mdi-home-variant-outline</v-icon></v-btn>
    <v-btn icon><v-icon>mdi-trello</v-icon></v-btn>
    <v-spacer></v-spacer>

    <v-img
      src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png"
      alt="logo"
      max-width="120"
    />
    <v-spacer></v-spacer>
    <v-btn icon><v-icon>mdi-plus-box</v-icon></v-btn>
    <v-btn icon><v-icon>mdi-bell-outline</v-icon></v-btn>
    <v-avatar size="30">
      <v-img
        src="https://contents.sixshop.com/thumbnails/uploadedFiles/79226/product/image_1569804185381_750.jpg"
    /></v-avatar>
    <v-btn icon><v-icon>mdi-cog-box</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style lang="scss" scoped>
.trello-wrap {
  width: 100vw;
  height: 100vh;
}
</style>
