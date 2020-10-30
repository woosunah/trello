<template>
  <div class="description">
    <v-row class="description-header" no-gutters align="center">
      <v-icon>mdi-text</v-icon>
      <h4 class="header-left-margin">Description</h4>
      <v-btn
        v-if="!isEdit"
        class="header-left-margin"
        small
        elevation="0"
        @click="isEdit = true"
        >Edit</v-btn
      >
    </v-row>
    <div>
      <p v-if="!isEdit">{{ descr }}</p>
      <div v-else class="edit-form">
        <v-textarea v-model="descr" solo> </v-textarea>
        <v-btn color="green" dark @click="save">Save</v-btn>
        <v-btn icon @click="isEdit = false"><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['initDescr'],
  data() {
    return {
      isEdit: false,
      descr: this.initDescr,
    };
  },
  methods: {
    save() {
      this.$emit('change-descr', this.descr);
      this.isEdit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  padding: 20px;
  margin: 10px 0;
  h4 {
    margin: 0 10px;
    display: inline-block;
  }
  p {
    font-size: 14px;
    margin: 10px 37px;
  }
}
.header-left-margin {
  margin-left: 15px;
}
.edit-form {
  margin: 10px 37px;
}
</style>
