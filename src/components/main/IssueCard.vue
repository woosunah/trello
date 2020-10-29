<template>
  <v-card class="issue-card" elevation="1" @click="openDetail">
    <h4>{{ issue.title }}</h4>
    <div class="icons-wrapper"></div>
  </v-card>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['issue'],
  methods: {
    openDetail() {
      this.$store.commit('setCurrentIssue', this.issue);
      this.$store.commit('toggleIsDetailShow');
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-card {
  padding: 10px;
  margin: 5px 0;
}
</style>
