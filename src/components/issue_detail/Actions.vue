<template>
  <v-row class="actions">
    <h4>ACTIONS</h4>
    <v-btn block elevation="0" color="#eaecef" class="action"
      ><v-icon style="margin-right:10px;">mdi-arrow-right</v-icon>Move
      <v-spacer></v-spacer>
    </v-btn>
    <v-btn block elevation="0" color="#eaecef" class="action"
      ><v-icon style="margin-right:10px;">mdi-content-copy</v-icon>Copy
      <v-spacer></v-spacer
    ></v-btn>
    <v-btn block elevation="0" color="#eaecef" class="action"
      ><v-icon style="margin-right:10px;">mdi-delete</v-icon>Delete
      <v-spacer></v-spacer
    ></v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Actions',
};
</script>

<style lang="scss" scoped>
.actions {
  padding: 10px;
}
.action {
  margin: 10px 0;
}
</style>
