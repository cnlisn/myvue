<template>
  <el-button type="primary" @click="login"
             style="border-radius: 50px;width: 50%;margin-top: 100px">
    AxiosTest 登录
  </el-button>
</template>

<script>
  import {Message} from 'element-ui'
  import axios from 'axios'

  export default {
    name: 'axiosTest',
    data () {
      return {
        loginForm: {
          userName: 'xiaomi',
          password: '123456'
        }
      }
    },
    created: function () {
      var _this = this
    },
    methods: {
      login () {
        var _this = this

        //添加请求拦截器
        axios.interceptors.request.use(function (config) {
          // Do something before request is sent
          return config
        }, function (error) {
          // Do something with request error
          return Promise.reject(error)
        })

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
          // Do something with response data
          return response
        }, function (error) {
          // Do something with response error
          return Promise.reject(error)
        })

        //get请求本地json文件
        axios.get('../../static/data.json')
          .then(res => {
            console.log(res)
          })
          .catch(function (error) {
            console.log('error', error)
          })

        let url1 = 'http://127.0.0.1:8080/shiroUtils/noLogin'
        axios.get(url1)
          .then(function (response) {
            console.log(response)
            console.log('code=' + response.data.code)
            console.log('msg=' + response.data.msg)
          }).catch(function (error) {
          console.log('error', error)
        })

        var url = 'http://localhost:8080/userInfo/login'
        //post请求 参数类型FormData
        let formData = new FormData()
        formData.append('userName', 'xiaomi')
        formData.append('password', '123456')
        axios.post(url, formData)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log('msg', error)
          })

        //post请求 参数类型application/json
        axios.post(url, {
          params: {
            userName: 'xiaomi',
            password: '123456'
          }
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log('msg', error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
