<template>
  <div class="due-date-section">
    <h5>DUE DATE</h5>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">{{ date }} </v-btn>
      </template>
      <v-date-picker v-model="date" @input="menu = false"> </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      // expected output: 2011-10-05 / (0index부터~10번째자리까지만 출력 나머진 삭제)T14:48:00.000Z
    };
  },
};
</script>

<style lang="scss" scoped>
.due-date-section {
  padding: 0 35px;
}
</style>
