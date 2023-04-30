import axios from 'axios'

const VueJSAxios = {}

VueJSAxios.install = (Vue, options, promises) => {
  const handlers = {
    request: {
      done: (request) => request,
      fail: (err) => Promise.reject(err),
    },
    response: {
      done: (response) => response,
      fail: (err) => Promise.reject(err),
    },
  }

  if (promises) {
    if (promises.hasOwnProperty('request')) {
      handlers.request = { ...handlers.request, ...promises.request }
    }

    if (promises.hasOwnProperty('response')) {
      handlers.response = { ...handlers.response, ...promises.response }
    }
  }

  // Создание инстанса
  const service = axios.create(options)

  // https://axios-http.com/ru/docs/interceptors
  // Перехват запроса
  service.interceptors.request.use(
    (request) => handlers.request.done(request),
    (error) => handlers.request.fail(error)
  )

  // Перехват ответа
  service.interceptors.response.use(
    (response) => handlers.response.done(response),
    (error) => handlers.response.fail(error)
  )

  Vue.prototype.$axios = service
}

export default VueJSAxios
