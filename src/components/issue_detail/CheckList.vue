<template>
  <div class="checklist">
    <v-row no-gutters align="center">
      <v-icon>mdi-checkbox-marked-outline</v-icon>
      <h4 class="header-left-margin">Checklist</h4>
      <v-spacer></v-spacer>
      <v-btn small elevation="0" class="header-left-margin">Delete</v-btn>
    </v-row>
    <v-row no-gutters align="center" class="progress-wrapper">
      <span style="margin-right:10px; font-size:12px"> {{ progress }}% </span>
      <v-col>
        <v-progress-linear
          height="6"
          color="red darken-2"
          rounded
          :value="progress"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <div class="checkbox-list-wrapper">
      <v-checkbox
        v-for="(task, i) in tasks"
        :key="i"
        v-model="task.complete"
        :label="task.title"
        class="check-list-item"
      ></v-checkbox>
    </div>
    <div class="button-wrapper">
      <v-btn
        v-if="!isEdit"
        small
        elevation="0"
        style="margin-left:35px"
        @click="isEdit = true"
        >Add an item</v-btn
      >
      <div v-else>
        <v-textarea
          v-model="newItem"
          solo
          outlined
          flat
          placeholder="Add an item"
        >
        </v-textarea>
        <v-btn color="green" dark @click="save">Add</v-btn>
        <v-btn icon @click="isEdit = false"><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['tasks'],
  data() {
    return {
      isEdit: false,
      newItem: '',
      // tasks: [
      //   { title: 'task1', complete: false },
      //   { title: 'task2', complete: false },
      // ], props로 tasks를 받아오니까 지워줘도됨
    };
  },
  methods: {
    save() {
      this.$emit('add-check-item', {
        id: this.newCheckItemId,
        title: this.newItem,
        complete: false,
      });
      this.newItem = '';
    },
  },
  computed: {
    progress() {
      let completeNum = this.tasks.filter((el) => el.complete).length;
      return (completeNum / this.tasks.length) * 100;
    },
    newCheckItemId() {
      return (
        this.tasks.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
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

.check-list-item {
  margin: 5px 0;
  height: 40px;
}
</style>
