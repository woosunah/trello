<template>
  <v-overlay :value="true">
    <v-card class="issue-detail-card" light>
      <div class="issue-detail-header">
        <v-icon>mdi-id-card</v-icon>
        <h2>v2.1.8.2</h2>
        <p>in list <u>todo</u></p>
        <v-btn icon class="close-btn"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <v-row>
        <v-col cols="8" class="left-side">
          <due-date></due-date>
          <description></description>
          <check-list></check-list>
          <activity></activity>
        </v-col>
        <v-col cols="4">
          <actions></actions>
        </v-col>
      </v-row>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'IssueDetail',
  components: {
    DueDate: () => import('@/components/issue_detail/DueDate.vue'),
    Description: () => import('@/components/issue_detail/Description.vue'),
    CheckList: () => import('@/components/issue_detail/CheckList.vue'),
    Activity: () => import('@/components/issue_detail/Activity.vue'),
    Actions: () => import('@/components/issue_detail/Actions.vue'),
  },
};
</script>

<style lang="scss" scoped>
.issue-detail-card {
  width: 800px;
  // vw 창의크기 60%
  min-height: 80vh;
  padding: 20px;
  background: #f4f5f7;
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
    top: 20px;
    right: 10px;
  }
}
</style>
