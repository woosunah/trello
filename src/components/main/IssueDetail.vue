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
            <due-date
              :init-date="currentIssue.dueDate"
              @change-date="changeDate"
            ></due-date>
            <!-- @change-date(이벤트이름) 전부 소문자로 부모에게 먼저 이름 붙여주기-->
            <description
              :init-descr="currentIssue.description"
              @change-descr="changeDescr"
            ></description>
            <check-list
              :tasks="currentIssue.checklist"
              @add-check-item="addCheckListItem"
            ></check-list>
            <activity
              :activities="currentIssue.activities"
              @add-comment="addComment"
            ></activity>
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
import _ from 'lodash';
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
    addCheckListItem(item) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.checklist.push(item);
      this.$store.commit('editIssue', clone);
    },
    closeDetail() {
      this.$store.commit('toggleIsDetailShow');
    },
    changeDate(date) {
      console.log('change date:', date);
      this.$store.commit('fixDate', {
        id: this.currentIssue.id,
        dueDate: date,
      });
    },
    changeDescr(text) {
      // this.$store.commit('fixDescr', {
      //   id: this.currentIssue.id,
      //   descr: text,
      // });
      let clone = _.cloneDeep(this.currentIssue);
      clone.description = text;
      // clone안하면 원래 파일을 손상시킴?
      this.$store.commit('editIssue', clone);
      // commit - 파일 및 폴더의 추가/변경 사항 저장소에 기록?
    },
    addComment(comment) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.activities.push(comment);
      this.$store.commit('editIssue', clone);
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-detail-card {
  max-width: 800px;
  width: 100vw;
  // vw 창의크기 100%
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
