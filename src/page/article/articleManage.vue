<template>
  <!--https://www.npmjs.com/package/vue2-editor-->
  <div style="height: calc(100% - 20px)">
    <div style="height: 80%">
      <vue-editor v-model="content" style="height: 90%;margin-left: 0px"></vue-editor>
    </div>
    <div>
      <el-button type="primary" @click="aaa" style="margin-top:10px">打印HTML</el-button>
    </div>
  </div>
</template>

<script>
  import {VueEditor} from 'vue2-editor'

  export default {
    name: 'articleManage',
    components: {
      VueEditor
    },
    data () {
      return {
        content: '<h1>Some initial content</h1>'
      }
    },
    methods: {
      aaa () {
        console.log(this.content)
      }
    }

  }
</script>

<style scoped>

</style>
