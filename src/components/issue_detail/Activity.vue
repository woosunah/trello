<template>
  <div class="activity">
    <v-row class="activity-header" no-gutters align="center">
      <v-icon>mdi-format-list-text</v-icon>
      <h4 class="header-left-margin">Activity</h4>
    </v-row>
    <v-row class="comment-text-field-wrapper" no-gutters align="center">
      <v-avatar size="50"> <v-img :src="profileImg"/></v-avatar>

      <v-text-field
        flat
        placeholder="Write a comment ..."
        outlined
        v-model="newComment"
        class="comment-text-field"
        @keyup.enter="save"
      >
        <template v-slot:append
          ><v-btn text small color="green" @click="save">SAVE</v-btn>
        </template>
      </v-text-field>
    </v-row>
    <div class="activity-list-wrapper">
      <v-row no-gutters v-for="(comment, i) in orderedActivites" :key="i">
        <div class="profile-wrapper">
          <v-avatar><v-img :src="comment.imgSrc"></v-img></v-avatar>
        </div>
        <div class="text-wrapper">
          <p>
            <strong>{{ comment.name }}</strong>
            <span class="date-text">{{ formatDate(comment.createdAt) }}</span>
          </p>
          <v-card class="text-card">
            <p>{{ comment.text }}</p>
          </v-card>
          <div class="activity-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
export default {
  props: ['activities'],
  name: 'Activity',
  data() {
    return {
      newComment: '',
      profileImg:
        'https://contents.sixshop.com/thumbnails/uploadedFiles/79226/product/image_1569804185381_750.jpg',
      // activities: [
      //   {
      //     id: 0,
      //     imgSrc:
      //       'https://contents.sixshop.com/thumbnails/uploadedFiles/79226/product/image_1569804185381_750.jpg',
      //     name: 'nickname',
      //     text: 'hi my name is nick',
      //     createdAt: '2020-10-27T08:09:34.345Z',
      //   },
      //   {
      //     id: 0,
      //     imgSrc:
      //       'https://contents.sixshop.com/thumbnails/uploadedFiles/79226/product/image_1569804185381_750.jpg',
      //     name: 'nickname',
      //     text: 'hi my name is nick',
      //     createdAt: '2020-10-27T08:09:34.345Z',
      //     // console창에 new Date 이렇게 치면 나옴
      //     // new Date().toISOString()
      //     //->output "2020-10-28T07:34:55.812Z+9:00 / Z+9:00 한국시간 +9:00(이부분이 로컬시간)"
      //   },
      // ],
    };
  },
  computed: {
    newCommentId() {
      return (
        this.activities.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
    orderedActivites() {
      let clone = _.cloneDeep(this.activities);
      return clone.sort(
        (a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix()
      );
    },
  },
  methods: {
    formatDate(date) {
      let created = moment(date);
      return created.format('MMMM Do ddd [at] HH:mm a');
      // [문자로 인식] a - am pm
    },
    save() {
      this.$emit('add-comment', {
        id: this.newCommentId,
        imgSrc: this.profileImg,
        name: 'me',
        text: this.newComment,
        createdAt: moment().toISOString(),
      });
      this.newComment = '';
      // write a comment에 작성 후 sava하면 다시 빈칸으로 돌리기
    },
  },
};
</script>

<style lang="scss" scoped>
.activity {
  padding: 20px;
}
.header-left-margin {
  margin-left: 15px;
}
.menu {
  // border: 1px solid red;
  margin: 10px 0 0 10px;
  height: 56px;
}
.comment-text-field-wrapper {
  margin: 10px 0;
}
.text-wrapper {
  margin-left: 11px;
}
.date-text {
  margin-left: 10px;
  color: gray;
  font-size: 13px;
}
.text-card {
  padding: 10px;
  p {
    margin: 0;
  }
}
.activity-actions {
  button {
    font-size: 13px;
    text-decoration-line: underline;
    margin-right: 10px;
  }
}
</style>
