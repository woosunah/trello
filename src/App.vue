<template>
  <v-app>
    <router-view></router-view>
    <!-- router view를 꼭 해야 component폴더에 있는 파일들 연결해줌 -->
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
