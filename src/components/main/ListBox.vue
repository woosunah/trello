<template>
  <v-card class="list-box">
    <v-row class="box-header" align="center" no-gutters>
      <!-- align-items의 align -->
      <h2>{{ list.title }}</h2>
      <!-- index.js에서 list의 title을 받아오니까  그전에는 title을 직접받아와서 title만작성-->

      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </v-row>

    <div class="item-list-wrapper">
      <issue-card
        v-for="(issue, i) in relatedIssues"
        :key="i"
        :issue="issue"
      ></issue-card>
      <!-- 따로 파일만들어서 import시켜준 부분 태그명으로 남겨서 연결해주기 -->
    </div>
    <div class="btn-wrapper">
      <v-btn text color="#5e6c84"><v-icon>mdi-plus</v-icon>Add a card</v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ListBox',
  props: ['list'],
  components: {
    IssueCard: () => import('@/components/main/IssueCard.vue'),
  },
  computed: {
    ...mapState(['issues']),
    // 실시간으로 계산? computed?
    relatedIssues() {
      return this.issues.filter((el) => el.listId === this.list.id);
      // el은 => index.js - issues id/listId
    },
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  margin: 10px;
  background: #ebecf0;
}
.box-header {
  padding: 5px 20px;
  h2 {
    font-size: 1.4rem;
  }
}
.btn-wrapper {
  padding: 5px;
}
.item-list-wrapper {
  padding: 5px;
}
</style>
