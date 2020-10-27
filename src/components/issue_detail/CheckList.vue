<template>
  <div class="checklist">
    <v-row no-gutters align="center">
      <v-icon>mdi-checkbox-marked-outline</v-icon>
      <h4 class="header-left-margin">Checklist</h4>
      <v-spacer></v-spacer>
      <v-btn small elevation="0" class="header-left-margin">Delete</v-btn>
    </v-row>
    <v-row no-gutters align="center" class="progress-wrapper">
      <span style="margin-right:10px; font-size=12px"> 0% </span>
      <v-col>
        <v-progress-linear
          height="6"
          color="red darken-2"
          rounded
          value="100"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-checkbox :input-value="active"></v-checkbox>
      <h4 class="text">dd</h4>
    </v-row>
    <v-btn>Add an item</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  data() {
    return {
      tasks: [
        { title: 'task1, complete: false' },
        { title: 'task2, complete: false' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.checklist {
  padding: 20px;
}
.header-left-margin {
  margin-left: 15px;
}
.progress-wrapper {
  margin: 10px 0;
}
</style>
