<template>
  <div>
    <div class="main-view">
      <!-- :title="'to do'" -->
      <list-box
        :list="list"
        class="list-box"
        v-for="(list, i) in lists"
        :key="i"
      ></list-box>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  computed: {
    ...mapState(['lists']),
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
</style>
