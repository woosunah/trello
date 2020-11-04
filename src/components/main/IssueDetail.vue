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
            <!-- @chage-descr은 자체 이벤트 생성한 것을 연결해줌 / 자식 -> 부모 컴포넌트로 넘길때 $emit 이벤트 발생을 직접 만든걸 뜻함 -->
            <check-list
              :tasks="currentIssue.checklist"
              @add-check-item="addCheckListItem"
            ></check-list>
            <activity
              :activities="currentIssue.activities"
              @add-comment="addComment"
              @edit-comment="editComment"
              @delete-comment="deleteComment"
            ></activity>
          </v-col>
          <v-col cols="4">
            <actions
              :activities="currentIssue.activities"
              @move="moveToList"
              @copy="copyToList"
              @delete-issue="deleteIssue"
            ></actions>
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
    ...mapState(['isDetailShow', 'currentIssue', 'issues']),
    // "..." - 객체안에 선언할때, 객체의 내부데이터만 빼서 선언할 새로운 객체에 전달
    // mapState만 올 경우 객체 안에 객체로 전달됨
    newIssueId() {
      return (
        this.issues.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
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
    editComment(comment) {
      let clone = _.cloneDeep(this.currentIssue);
      let target = clone.activities.find((el) => el.id === comment.id);
      target.text = comment.text;
      this.$store.commit('editIssue', clone);
    },
    deleteComment(id) {
      let clone = _.cloneDeep(this.currentIssue);
      let targetIndex = clone.activities.findIndex((el) => el.id === id);
      clone.activities.splice(targetIndex, 1);
      this.$store.commit('editIssue', clone);
    },
    moveToList(item) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.listId = item.id;
      this.$store.commit('editIssue', clone);
    },
    copyToList(item) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.id = this.newIssueId;
      clone.listId = item.id;
      this.$store.commit('addIssue', clone);
    },
    deleteIssue() {
      this.$store.commit('deleteIssue', this.currentIssue.id);
      // 자기자신을 삭제하니까 자기자신의 id를 넘김
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
