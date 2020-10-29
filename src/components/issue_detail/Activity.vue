<template>
  <div class="activity">
    <v-row class="activity-header" no-gutters align="center">
      <v-icon>mdi-format-list-text</v-icon>
      <h4 class="header-left-margin">Activity</h4>
    </v-row>
    <v-row class="comment-text-field-wrapper" no-gutters align="center">
      <v-avatar size="50"> <v-img :src="profileImg"/></v-avatar>

      <v-text-field
        label="Write a comment ..."
        single-line
        outlined
        class="menu"
      >
      </v-text-field>
    </v-row>
    <div class="activity-list-wrapper">
      <v-row no-gutters v-for="(comment, i) in activities" :key="i">
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
import moment from 'moment';
export default {
  props: ['activities'],
  name: 'Activity',
  data() {
    return {
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
  methods: {
    formatDate(date) {
      let created = moment(date);
      console.log(
        moment()
          .utc()
          .format()
      );
      return created.format('MMMM Do ddd');
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
