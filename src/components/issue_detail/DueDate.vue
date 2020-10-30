<template>
  <div class="due-date-section">
    <h5>DUE DATE</h5>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">{{ date }} </v-btn>
      </template>
      <v-date-picker v-model="date" @input="menu = false"> </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
  props: ['initDate'],
  data() {
    return {
      menu: false,
      // date: new Date().toISOString().substr(0, 10),
      // // expected output: 2011-10-05 / (0index부터~10번째자리까지만 출력 나머진 삭제)T14:48:00.000Z
      date: this.initDate,
    };
  },
  watch: {
    date(newValue) {
      this.$emit('change-date', newValue);
      // 이벤트 실행 방법 / $emit은 자식 컴포넌트 -> 부모 컴포넌트로 값 전달
      // watch를 사용한 이유는, 위의date 정의한 속성이 변화했을때 추가 동작을 수행할 수 있도록 정의하는 속성
    },
  },
};
</script>

<style lang="scss" scoped>
.due-date-section {
  padding: 0 35px;
}
</style>
