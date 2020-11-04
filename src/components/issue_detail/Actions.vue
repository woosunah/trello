<template>
  <v-row class="actions">
    <h4>ACTIONS</h4>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block
          elevation="0"
          color="#eaecef"
          class="action"
          v-bind="attrs"
          v-on="on"
          ><v-icon style="margin-right:10px;">mdi-arrow-right</v-icon>Move
          <v-spacer></v-spacer>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in lists"
          :key="index"
          @click="move(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block
          elevation="0"
          color="#eaecef"
          class="action"
          v-bind="attrs"
          v-on="on"
          ><v-icon style="margin-right:10px;">mdi-content-copy</v-icon>Copy
          <v-spacer></v-spacer
        ></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in lists"
          :key="index"
          @click="copy(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      block
      elevation="0"
      color="#eaecef"
      class="action"
      @click="isDelete = true"
    >
      <!-- is가 붙는 변수명 - 데이터를 담는게 아닌 flag플래그 변수(스위치같은) true/ false 값 출력시 많이 사용 -->
      <v-icon style="margin-right:10px;">mdi-delete</v-icon>Delete
      <v-spacer></v-spacer>
    </v-btn>
    <v-fade-transition>
      <v-card v-show="isDelete" class="delete-card" max-width="344">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Delete Card?
            </v-list-item-title>
            <v-divider></v-divider>
            <p>Greyhound divisely hello coldly fonwderfully</p>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn color="red" dark min-width="150" @click="deleteIssue">
            Delete
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="isDelete = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-fade-transition>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Actions',
  data() {
    return {
      isDelete: false,
    };
  },
  computed: {
    ...mapState(['lists']),
  },
  methods: {
    move(item) {
      this.$emit('move', item);
    },
    copy(item) {
      this.$emit('copy', item);
    },
    deleteIssue() {
      this.$emit('delete-issue');
      // 스스로 삭제해서 전달할게 없음
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  padding: 10px;
}
.action {
  margin: 10px 0;
}
.delete-card {
  p {
    font-size: 0.8rem;
    margin: 10px 0;
    color: gray;
  }
}
</style>
