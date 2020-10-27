<template>
  <div>
    <div class="main-view">
      <list-box :title="'to do'" class="list-box"></list-box>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
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
