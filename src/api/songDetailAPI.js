import request from '@/utils/request.js'

export const songDetailAPI = (id,data) => {
  return request.get(`/?type=detail&id=${id}`, data)
  // return request.get('/v1_0/authorizations', data)
}