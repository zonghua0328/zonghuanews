import request from '@/utils/request.js'

export const songAPI = (id,data) => {
  return request.get(`/?type=song&id=${id}`, data)
  // return request.get('/v1_0/authorizations', data)
}