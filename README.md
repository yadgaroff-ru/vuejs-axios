# Axios plugin for VueJS

### Install from npm:

`npm install vuejs-axios`

### Setup plugin in main.js:

1. `import VueAxios from 'vuejs-axios'`

2. `Vue.use(VueAxios)`

3. `this.$axios.get('/test-request')`

### Setting up global configuration:

`Vue.use(VueAxios, {baseURL: '/api'})`

https://github.com/axios/axios#request-config

### Setting up Interceptors for all HTTP calls in an application:

https://github.com/axios/axios#interceptors

```javascript
Vue.use(
  VueAxios,
  {
    baseURL: '/api',
  },
  {
    request: {
      done: (req) => req,
      fail: (err) => console.log(err),
    },
    response: {
      done: (res) => res,
      fail: (err) => console.log(err),
    },
  }
)
```
