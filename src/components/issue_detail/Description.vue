<template>
  <div class="description">
    <v-row class="description-header" no-gutters align="center">
      <v-icon>mdi-text</v-icon>
      <h4 class="header-left-margin">Description</h4>
      <v-btn small elevation="0">Edit</v-btn>
    </v-row>
    <div></div>
    <p>{{ descr }}</p>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['descr'],
};
</script>

<style lang="scss" scoped>
.description {
  padding: 20px;
  margin: 10px 0;
  h4 {
    margin: 0 10px;
    display: inline-block;
  }
  p {
    font-size: 14px;
    margin: 10px 37px;
  }
}
.header-left-margin {
  margin-left: 15px;
}
</style>
