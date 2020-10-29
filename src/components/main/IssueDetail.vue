<template>
  <v-overlay :value="isDetailShow">
    <div class="scroll-view">
      <v-card class="issue-detail-card" light>
        <div class="issue-detail-header">
          <v-icon>mdi-id-card</v-icon>
          <h2>{{ currentIssue.title }}</h2>
          <p>in list {{ 'todo' }}</p>
          <v-btn icon class="close-btn" @click="closeDetail"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <v-row>
          <v-col cols="8" class="left-side">
            <due-date :date="currentIssue.dueDate"></due-date>
            <description :descr="currentIssue.description"></description>
            <check-list :tasks="currentIssue.Checklist"></check-list>
            <activity :activities="currentIssue.activities"></activity>
          </v-col>
          <v-col cols="4">
            <actions></actions>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IssueDetail',
  components: {
    DueDate: () => import('@/components/issue_detail/DueDate.vue'),
    Description: () => import('@/components/issue_detail/Description.vue'),
    CheckList: () => import('@/components/issue_detail/CheckList.vue'),
    Activity: () => import('@/components/issue_detail/Activity.vue'),
    Actions: () => import('@/components/issue_detail/Actions.vue'),
  },
  computed: {
    ...mapState(['isDetailShow', 'currentIssue']),
    // "..." - 객체안에 선언할때, 객체의 내부데이터만 빼서 선언할 새로운 객체에 전달
    // mapState만 올 경우 객체 안에 객체로 전달됨
  },
  methods: {
    closeDetail() {
      this.$store.commit('toggleIsDetailShow');
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-detail-card {
  max-width: 800px;
  // vw 창의크기 60%
  width: 100vw;
  min-height: 80vh;
  padding: 20px;
  background: #f4f5f7;
}
.scroll-view {
  overflow-y: auto;
  max-height: 80vh;
}
.issue-detail-header {
  padding: 20px;
  position: relative;
  h2 {
    display: inline-block;
    margin-left: 10px;
  }
  p {
    padding-top: 10px;
    margin-left: 40px;
    color: #bbb;
  }
  .close-btn {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
</style>
