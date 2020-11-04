import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDetailShow: false,
    currentIssue: {},
    lists: [
      {
        id: 0,
        title: 'todo',
      },
      {
        id: 1,
        title: 'doing',
      },
      {
        id: 2,
        title: 'done',
      },
    ],
    issues: [
      {
        id: 0,
        listId: 0,
        title: 'login page',
        description: ' make log in page',
        dueDate: '2020-10-29',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: 'nickname',
            text: 'hi my name is nick',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: 'yourNickname',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
      {
        id: 1,
        listId: 0,
        title: 'login page',
        description: ' make log in page',
        dueDate: '2020-10-29',
        checklist: [],
        activities: [],
      },
    ],
  },
  mutations: {
    toggleIsDetailShow(state) {
      // 함수를 실행만 시킬거라서 payload필요없음
      state.isDetailShow = !state.isDetailShow;
    },
    setCurrentIssue(state, payload) {
      state.currentIssue = payload;
    },
    // index.js안에서만 mutations 작성 (state안에 내용추가해줄때 사용)
    // mutation에서 사용된 함수들은 각 파일에서 methods로 사용
    fixDate(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.dueDate = payload.dueDate;
    },
    fixDescr(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.description = payload.descr;
    },
    editIssue(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      Object.assign(target, payload);
      //Object.assign - 객체 병합메서드 출처 객체로부터 대상객체로 속성을 복사할때 사용 / 대상 객체 반환
    },
    addIssue(state, payload) {
      state.issues.push(payload);
    },
    deleteIssue(state, payload) {
      let targetIndex = state.issues.findIndex((el) => el.id === payload);
      state.issues.splice(targetIndex, 1);
      state.isDetailShow = false;
    },
  },
  actions: {},
  modules: {},
});
