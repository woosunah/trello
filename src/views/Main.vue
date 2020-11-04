<template>
  <div class="main-view">
    <!-- :title="'to do'" -->
    <list-box
      :list="list"
      class="list-box"
      v-for="(list, i) in lists"
      :key="i"
    ></list-box>
    <v-btn
      v-if="!isAddList"
      elevation="0"
      width="300"
      class="ma-3"
      @click="isAddList = true"
      ><v-icon class="mr-1">mdi-plus</v-icon>another list<v-spacer></v-spacer>
      <!-- mr-1 1 - 4px 기준 / ma margin-top을뜻함 mr margin-right를 뜻함 -->
    </v-btn>
    <v-card v-else class="add-list-box">
      <v-textarea
        v-model="newListTitle"
        placeholder="Enter a title for this card..."
        solo
        rows="2"
        hide-details
        class="mb-2 elevation-0"
        auto-grow
      >
      </v-textarea>
      <v-btn color="green" dark @click="addList">Add List</v-btn>
      <v-btn icon @click="isAddList = false"><v-icon>mdi-close</v-icon></v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  data() {
    return {
      isAddList: false,
      newListTitle: '',
    };
  },
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  computed: {
    ...mapState(['lists']),
    newListId() {
      return (
        this.lists.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
  },
  methods: {
    addList() {
      this.$store.commit('addList', {
        id: this.newListId,
        title: this.newListTitle,
      });
      this.newListTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-flow: row;
  overflow-x: auto;
  // 가로스크롤 생기게 하려면 overflow-x:auto;
  align-items: flex-start;
  height: calc(100vh - 60px);
}
.list-box {
  flex: 400px 0 0;
}
.add-list-box {
  margin: 10px;
  background: #ebecf0;
  min-width: 300px;
  padding: 10px;
}
</style>
